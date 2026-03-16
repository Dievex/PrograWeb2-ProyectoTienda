<script lang="ts">
  import type { Product } from '../services/products';
  import { Edit, Trash2, Tag, ShoppingCart, ChevronDown, ChevronUp } from 'lucide-svelte';
  import { auth } from '../stores/auth.svelte';
  import { cart } from '../stores/cart.svelte';

  let { 
    product, 
    onEdit, 
    onDelete 
  }: { 
    product: Product; 
    onEdit: (p: Product) => void; 
    onDelete: (id: string) => void;
  } = $props();

  let showFullDescription = $state(false);
</script>

<div class="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
  <div class="h-48 bg-gray-100 relative">
    {#if product.imagen}
      <img src={product.imagen.startsWith('http') ? product.imagen : `http://localhost:3000/uploads/${product.imagen}`} alt={product.nombre} class="w-full h-full object-cover" />
    {:else}
      <div class="w-full h-full flex items-center justify-center text-gray-400">
        Sin imagen
      </div>
    {/if}
    {#if !product.activo}
      <div class="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
        Inactivo
      </div>
    {/if}
  </div>
  
  <div class="p-4">
    <div class="flex justify-between items-start">
      <h3 class="text-lg font-semibold text-gray-900 line-clamp-1">{product.nombre}</h3>
      <span class="text-lg font-bold text-primary-600">${product.precio}</span>
    </div>
    
    <div class="relative">
      <p class="mt-1 text-sm text-gray-500 {showFullDescription ? '' : 'line-clamp-2'} min-h-[40px] transition-all duration-300 break-words">
        {product.descripcion}
      </p>
      {#if product.descripcion && product.descripcion.length > 80}
        <button 
          onclick={() => showFullDescription = !showFullDescription}
          class="text-xs text-primary-600 hover:text-primary-800 mt-1 flex items-center focus:outline-none"
        >
          {#if showFullDescription}
            Mostrar menos <ChevronUp class="w-3 h-3 ml-1" />
          {:else}
            Mostrar más <ChevronDown class="w-3 h-3 ml-1" />
          {/if}
        </button>
      {/if}
    </div>
    
    <div class="mt-4 flex items-center justify-between">
      <div class="flex items-center text-sm text-gray-500">
        <Tag class="w-4 h-4 mr-1" /> {product.categoria || 'General'}
      </div>
      <div class="text-sm font-medium {(product.stock || 0) > 0 ? 'text-green-600' : 'text-red-500'}">
        {product.stock || 0} en stock
      </div>
    </div>

    <div class="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
      <button 
        onclick={() => cart.addItem(product._id)}
        disabled={!product.activo || (product.stock || 0) <= 0}
        class="flex-1 flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ShoppingCart class="w-4 h-4 mr-2" />
        Añadir
      </button>

      {#if auth.isAdmin}
        <div class="flex ml-2 space-x-1">
          <button 
            onclick={() => onEdit(product)}
            class="p-2 text-blue-600 hover:bg-blue-50 rounded transition-colors"
            title="Editar"
          >
            <Edit class="w-4 h-4" />
          </button>
          <button 
            onclick={() => onDelete(product._id)}
            class="p-2 text-red-600 hover:bg-red-50 rounded transition-colors"
            title="Borrar"
          >
            <Trash2 class="w-4 h-4" />
          </button>
        </div>
      {/if}
    </div>
  </div>
</div>
