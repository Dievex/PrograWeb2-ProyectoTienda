import { apiFetch } from '../services/api';
import { toasts } from './toasts.svelte';
import type { Product } from '../services/products';

export function createProductsStore() {
  let products = $state<Product[]>([]);
  let loading = $state(false);

  async function loadProducts() {
    loading = true;
    try {
      products = await apiFetch('/productos');
    } catch (err: any) {
      toasts.error(err.message || 'Error al cargar productos');
    } finally {
      loading = false;
    }
  }

  return {
    get products() { return products; },
    get loading() { return loading; },
    
    setProducts(newProducts: Product[]) {
      products = newProducts;
    },

    loadProducts,
    
    updateProductStock(id: string, quantityBought: number) {
      products = products.map(p => {
        if (p._id === id) {
          const currentStock = p.stock || 0;
          return { ...p, stock: Math.max(0, currentStock - quantityBought) };
        }
        return p;
      });
    },
    
    addProduct(product: Product) {
      products = [...products, product];
    },
    
    updateProduct(product: Product) {
      products = products.map(p => p._id === product._id ? product : p);
    },
    
    removeProduct(id: string) {
      products = products.filter(p => p._id !== id);
    }
  };
}

export const productsStore = createProductsStore();
