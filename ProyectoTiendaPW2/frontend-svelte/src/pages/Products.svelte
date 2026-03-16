<script lang="ts">
  import { onMount } from 'svelte';
  import { productsApi, type Product } from '../services/products';
  import ProductCard from '../components/ProductCard.svelte';
  import ProductForm from '../components/ProductForm.svelte';
  import { auth } from '../stores/auth.svelte';
  import { toasts } from '../stores/toasts.svelte';
  import { productsStore } from '../stores/products.svelte'; // Import products store
  import { Plus, Search, Loader2 } from 'lucide-svelte';

  let searchQuery = $state('');
  
  // Modal state
  let isModalOpen = $state(false);
  let currentProduct = $state<Partial<Product>>({ activo: true });
  let isSaving = $state(false);

  // Derived filtered products
  let filteredProducts = $derived(() => {
    if (!searchQuery) return productsStore.products;
    const lowerQuery = searchQuery.toLowerCase();
    return productsStore.products.filter(p => 
      p.nombre.toLowerCase().includes(lowerQuery) || 
      (p.categoria && p.categoria.toLowerCase().includes(lowerQuery))
    );
  });

  onMount(() => {
    productsStore.loadProducts();
  });

  function openCreateModal() {
    currentProduct = { activo: true, stock: 0, precio: 0 };
    isModalOpen = true;
  }

  function handleEdit(product: Product) {
    currentProduct = { ...product };
    isModalOpen = true;
  }

  async function handleDelete(id: string) {
    if (!confirm('¿Estás seguro de que quieres borrar este producto?')) return;
    
    try {
      await productsApi.delete(id);
      toasts.success('Producto borrado');
      productsStore.removeProduct(id);
    } catch (err: any) {
      toasts.error(err.message || 'Error al borrar');
    }
  }

  async function saveProduct(formData: FormData) {
    isSaving = true;
    
    try {
      if (currentProduct._id) {
        const updated = await productsApi.update(currentProduct._id, formData);
        productsStore.updateProduct(updated);
        toasts.success('Producto actualizado');
      } else {
        const created = await productsApi.create(formData);
        productsStore.addProduct(created);
        toasts.success('Producto creado');
      }
      isModalOpen = false;
    } catch (err: any) {
      toasts.error(err.message || 'Error al guardar');
    } finally {
      isSaving = false;
    }
  }
</script>

{#snippet loadingState()}
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {#each Array(8) as _}
      <div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden animate-pulse">
        <div class="h-48 bg-gray-200"></div>
        <div class="p-4 space-y-3">
          <div class="flex justify-between">
            <div class="h-6 bg-gray-200 rounded w-1/2"></div>
            <div class="h-6 bg-gray-200 rounded w-16"></div>
          </div>
          <div class="h-4 bg-gray-200 rounded w-full"></div>
          <div class="h-4 bg-gray-200 rounded w-3/4"></div>
          <div class="flex justify-between pt-4">
            <div class="h-4 bg-gray-200 rounded w-20"></div>
            <div class="h-4 bg-gray-200 rounded w-20"></div>
          </div>
          <div class="h-10 bg-gray-200 rounded mt-4"></div>
        </div>
      </div>
    {/each}
  </div>
{/snippet}

{#snippet emptyState()}
  <div class="text-center py-20 bg-white rounded-lg border border-gray-200">
    <p class="text-gray-500 text-lg">No se encontraron productos.</p>
  </div>
{/snippet}

{#snippet productGrid(products: Product[])}
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
    {#each products as product (product._id)}
      <ProductCard 
        {product} 
        onEdit={handleEdit} 
        onDelete={handleDelete} 
      />
    {/each}
  </div>
{/snippet}

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
  <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
    <h1 class="text-3xl font-bold text-gray-900">Catálogo de Productos</h1>
    
    <div class="flex w-full sm:w-auto gap-4">
      <div class="relative flex-grow sm:w-64">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search class="h-5 w-5 text-gray-400" />
        </div>
        <input
          type="text"
          bind:value={searchQuery}
          placeholder="Buscar por nombre o categoría..."
          class="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-primary-500 focus:border-primary-500 sm:text-sm"
        />
      </div>
      
      {#if auth.isAdmin}
        <button
          onclick={openCreateModal}
          class="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 shadow-sm transition-colors"
        >
          <Plus class="w-5 h-5 mr-1" />
          Nuevo
        </button>
      {/if}
    </div>
  </div>

  {#if productsStore.loading}
    {@render loadingState()}
  {:else if filteredProducts().length === 0}
    {@render emptyState()}
  {:else}
    {@render productGrid(filteredProducts())}
  {/if}
</div>

{#if isModalOpen}
  <ProductForm 
    product={currentProduct}
    isOpen={isModalOpen}
    isSaving={isSaving}
    onSave={saveProduct}
    onCancel={() => isModalOpen = false}
  />
{/if}
