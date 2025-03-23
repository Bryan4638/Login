// store/toastStore.ts
import {  create } from 'zustand';

// Definimos los tipos para un toast
type ToastType = 'success' | 'error' | 'info' | 'warning';

interface Toast {
  id: number;
  type: ToastType;
  message: string;
  title?: string;
}

interface ToastStore {
  toasts: Toast[];
  showToast: (type: ToastType, message: string, title?: string) => void;
  removeToast: (id: number) => void;
}

const useToastStore = create<ToastStore>()((set) => ({
  toasts: [],
  showToast: (type, message, title) => {
    const newToast: Toast = { id: Date.now(), type, message, title };
    set((state) => ({ toasts: [...state.toasts, newToast] }));

    setTimeout(() => {
      set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== newToast.id) }));
    }, 5000);
  },
  removeToast: (id) => {
    set((state) => ({ toasts: state.toasts.filter((toast) => toast.id !== id) }));
  },
}));

export default useToastStore;