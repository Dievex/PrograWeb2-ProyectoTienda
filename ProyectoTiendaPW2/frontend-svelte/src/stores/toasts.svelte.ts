export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: number;
  message: string;
  type: ToastType;
}

export function createToastsStore() {
  let toasts = $state<Toast[]>([]);
  let nextId = 0;

  function add(message: string, type: ToastType = 'info', duration = 3000) {
    const id = nextId++;
    toasts = [...toasts, { id, message, type }];
    
    if (duration > 0) {
      setTimeout(() => {
        remove(id);
      }, duration);
    }
  }

  function remove(id: number) {
    toasts = toasts.filter(t => t.id !== id);
  }

  return {
    get toasts() { return toasts; },
    add,
    remove,
    success: (msg: string, dur?: number) => add(msg, 'success', dur),
    error: (msg: string, dur?: number) => add(msg, 'error', dur),
    info: (msg: string, dur?: number) => add(msg, 'info', dur),
  };
}

export const toasts = createToastsStore();
