<script lang="ts">
  import { cart } from '../stores/cart.svelte';
  import { X, Trash2, ShoppingBag } from 'lucide-svelte';
  import { fade, fly } from 'svelte/transition';

  function closeCart() {
    cart.close();
  }

  function handleRemove(productId: string) {
    if (!productId) return;
    cart.removeItem(productId);
  }
</script>

{#if cart.isOpen}
  <div class="fixed inset-0 overflow-hidden z-50">
    <div class="absolute inset-0 overflow-hidden">
      <!-- Overlay -->
      <div 
        class="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" 
        transition:fade={{ duration: 300 }}
        onclick={closeCart}
        aria-hidden="true"
      ></div>

      <div class="fixed inset-y-0 right-0 pl-10 max-w-full flex">
        <!-- Panel -->
        <div 
          class="w-screen max-w-md"
          transition:fly={{ x: 300, duration: 300 }}
        >
          <div class="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
            <div class="flex-1 py-6 overflow-y-auto px-4 sm:px-6">
              <div class="flex items-start justify-between">
                <h2 class="text-lg font-medium text-gray-900 flex items-center">
                  <ShoppingBag class="w-6 h-6 mr-2 text-primary-600" />
                  Carrito de Compras
                </h2>
                <div class="ml-3 h-7 flex items-center">
                  <button 
                    onclick={closeCart}
                    class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                  >
                    <span class="sr-only">Cerrar panel</span>
                    <X class="w-6 h-6" />
                  </button>
                </div>
              </div>

              <div class="mt-8">
                <div class="flow-root">
                  {#if cart.loading}
                    <div class="flex justify-center py-10">
                      <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
                    </div>
                  {:else if cart.items.length === 0}
                    <div class="text-center py-10">
                      <ShoppingBag class="mx-auto h-12 w-12 text-gray-300" />
                      <p class="mt-2 text-gray-500">Tu carrito está vacío</p>
                    </div>
                  {:else}
                    <ul class="-my-6 divide-y divide-gray-200">
                      {#each cart.items as item (item.productId?._id || item._id)}
                        {#if item.productId}
                          <li class="py-6 flex">
                            <div class="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                              {#if item.productId.imagen}
                                <img 
                                  src={item.productId.imagen.startsWith('http') ? item.productId.imagen : `http://localhost:3000/uploads/${item.productId.imagen}`}
                                  alt={item.productId.nombre} 
                                  class="w-full h-full object-center object-cover"
                                />
                              {:else}
                                <div class="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-xs">
                                  Sin imagen
                                </div>
                              {/if}
                            </div>

                            <div class="ml-4 flex-1 flex flex-col">
                              <div>
                                <div class="flex justify-between text-base font-medium text-gray-900">
                                  <h3>
                                    {item.productId.nombre}
                                  </h3>
                                  <p class="ml-4">${item.productId.precio * item.quantity}</p>
                                </div>
                                <p class="mt-1 text-sm text-gray-500">{item.productId.categoria || 'General'}</p>
                              </div>
                              <div class="flex-1 flex items-end justify-between text-sm">
                                <p class="text-gray-500">Cant: {item.quantity}</p>

                                <div class="flex">
                                  <button 
                                    type="button" 
                                    onclick={() => handleRemove(item.productId._id)}
                                    class="font-medium text-red-600 hover:text-red-500 flex items-center"
                                  >
                                    <Trash2 class="w-4 h-4 mr-1" /> Eliminar
                                  </button>
                                </div>
                              </div>
                            </div>
                          </li>
                        {/if}
                      {/each}
                    </ul>
                  {/if}
                </div>
              </div>
            </div>

            <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>${cart.totalPrice.toFixed(2)}</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">Envío e impuestos calculados al finalizar.</p>
              <div class="mt-6">
                <button 
                  class="w-full flex justify-center items-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-primary-600 hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed"
                  onclick={() => cart.checkout()}
                  disabled={cart.items.length === 0}
                >
                  Checkout
                </button>
              </div>
              <div class="mt-6 flex justify-center text-sm text-center text-gray-500">
                <p>
                  o{' '}
                  <button type="button" class="text-primary-600 font-medium hover:text-primary-500" onclick={closeCart}>
                    Continuar Comprando<span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
{/if}
