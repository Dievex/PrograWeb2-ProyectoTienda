<script lang="ts">
  import type { Product } from '../models/product.model';
  import { Loader2 } from 'lucide-svelte';

  let { 
    product, 
    isOpen, 
    isSaving, 
    onSave, 
    onCancel 
  }: { 
    product: Partial<Product>; 
    isOpen: boolean; 
    isSaving: boolean;
    onSave: (data: FormData) => void; 
    onCancel: () => void; 
  } = $props();

  let currentProduct = $state<Partial<Product>>({});
  let imageFile = $state<File | null>(null);

  // Sync internal state when prop changes
  $effect(() => {
    if (isOpen) {
      currentProduct = { ...product };
      imageFile = null;
    }
  });

  function handleFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      imageFile = input.files[0];
    }
  }

  function handleSubmit(e: Event) {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('nombre', currentProduct.nombre || '');
    formData.append('descripcion', currentProduct.descripcion || '');
    formData.append('precio', (currentProduct.precio || 0).toString());
    formData.append('stock', (currentProduct.stock || 0).toString());
    formData.append('categoria', currentProduct.categoria || '');
    formData.append('activo', String(currentProduct.activo ?? true));
    
    if (imageFile) {
      formData.append('imagen', imageFile);
    }

    onSave(formData);
  }
</script>

{#if isOpen}
  <div class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
    <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
      <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true" onclick={onCancel}></div>

      <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

      <div class="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
        <form onsubmit={handleSubmit} autocomplete="off">
          <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title">
              {currentProduct._id ? 'Editar Producto' : 'Nuevo Producto'}
            </h3>
            
            <div class="space-y-4">
              <div>
                <label for="nombre" class="block text-sm font-medium text-gray-700">Nombre</label>
                <input type="text" id="nombre" bind:value={currentProduct.nombre} required class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
              </div>
              
              <div>
                <label for="descripcion" class="block text-sm font-medium text-gray-700">Descripción</label>
                <textarea id="descripcion" bind:value={currentProduct.descripcion} required rows="3" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm"></textarea>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div>
                  <label for="precio" class="block text-sm font-medium text-gray-700">Precio</label>
                  <input type="number" id="precio" bind:value={currentProduct.precio} required min="0" step="0.01" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                </div>
                <div>
                  <label for="stock" class="block text-sm font-medium text-gray-700">Stock</label>
                  <input type="number" id="stock" bind:value={currentProduct.stock} required min="0" class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
                </div>
              </div>

              <div>
                <label for="categoria" class="block text-sm font-medium text-gray-700">Categoría</label>
                <input type="text" id="categoria" bind:value={currentProduct.categoria} class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-primary-500 focus:border-primary-500 sm:text-sm">
              </div>

              <div>
                <label for="imagen" class="block text-sm font-medium text-gray-700">Imagen</label>
                <input 
                  type="file" 
                  id="imagen" 
                  accept="image/*"
                  onchange={handleFileChange}
                  class="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary-50 file:text-primary-700 hover:file:bg-primary-100"
                >
                {#if currentProduct.imagen && !imageFile}
                  <p class="mt-1 text-xs text-gray-500">Imagen actual: {currentProduct.imagen}</p>
                {/if}
              </div>

              <div class="flex items-center">
                <input id="activo" type="checkbox" bind:checked={currentProduct.activo} class="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded">
                <label for="activo" class="ml-2 block text-sm text-gray-900">
                  Producto Activo
                </label>
              </div>
            </div>
          </div>
          <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button type="submit" disabled={isSaving} class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary-600 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:ml-3 sm:w-auto sm:text-sm disabled:opacity-50">
              {#if isSaving}
                <Loader2 class="animate-spin -ml-1 mr-2 h-5 w-5 inline" />
                Guardando...
              {:else}
                Guardar
              {/if}
            </button>
            <button type="button" onclick={onCancel} class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
{/if}
