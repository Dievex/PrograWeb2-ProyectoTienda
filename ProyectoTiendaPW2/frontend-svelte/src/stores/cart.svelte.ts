import { CartService } from '../services/cart.service';
import type { CartItem } from '../models/cart.model';
import { auth } from './auth.svelte';
import { toasts } from './toasts.svelte';
import { productsStore } from './products.svelte'; // Import products store

export function createCartStore() {
  let items = $state<CartItem[]>([]);
  let isOpen = $state(false);
  let loading = $state(false);

  // Load cart when user logs in
  $effect.root(() => {
    $effect(() => {
      if (auth.isAuthenticated) {
        loadCart();
      } else {
        items = [];
      }
    });
  });

  async function loadCart() {
    loading = true;
    try {
      items = await CartService.getCart();
    } catch (err) {
      console.error('Error loading cart:', err);
    } finally {
      loading = false;
    }
  }

  const totalItems = $derived(() => {
    return items.reduce((acc, item) => acc + item.quantity, 0);
  });

  const totalPrice = $derived(() => {
    return items.reduce((acc, item) => {
      // Handle case where productId might be null if product was deleted
      if (!item.productId) return acc;
      return acc + (item.productId.precio * item.quantity);
    }, 0);
  });

  return {
    get items() { return items; },
    get isOpen() { return isOpen; },
    set isOpen(value) { isOpen = value; },
    get loading() { return loading; },
    get totalItems() { return totalItems(); },
    get totalPrice() { return totalPrice(); },

    async addItem(productId: string) {
      if (!auth.isAuthenticated) {
        toasts.error('Debes iniciar sesión para añadir al carrito');
        return;
      }
      
      try {
        // Optimistic update (optional, but let's wait for server response for accuracy)
        items = await CartService.addToCart(productId);
        toasts.success('Producto añadido al carrito');
      } catch (err: any) {
        toasts.error(err.message || 'Error al añadir al carrito');
      }
    },

    async removeItem(productId: string) {
      try {
        items = await CartService.removeFromCart(productId);
        toasts.success('Producto eliminado del carrito');
      } catch (err: any) {
        toasts.error(err.message || 'Error al eliminar del carrito');
      }
    },
    
    async checkout() {
      try {
        await CartService.checkout();
        
        // Update local products stock
        // We need to decrease stock for each item in the cart
        items.forEach(item => {
          if (item.productId) {
            productsStore.updateProductStock(item.productId._id, item.quantity);
          }
        });

        items = [];
        toasts.success('¡Compra realizada con éxito!');
        isOpen = false;
        
        // Optionally reload all products from server to be 100% sure
        // productsStore.loadProducts(); 
      } catch (err: any) {
        toasts.error(err.message || 'Error al realizar la compra');
      }
    },

    toggle() {
      isOpen = !isOpen;
    },
    
    open() {
      isOpen = true;
    },
    
    close() {
      isOpen = false;
    }
  };
}

export const cart = createCartStore();
