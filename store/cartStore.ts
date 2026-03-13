import { create } from 'zustand';

export interface CartItem {
  id: string;
  productId: number;
  name: string;
  price: number;
  size: string;
  image: string;
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity' | 'id'>) => void;
  removeItem: (id: string) => void;
  openCart: () => void;
  closeCart: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  items: [],
  isOpen: false,
  
  addItem: (newItem) => set((state) => {
    const uniqueId = `${newItem.productId}-${newItem.size}`;
    const existingItem = state.items.find(item => item.id === uniqueId);
    
    if (existingItem) {
      return {
        items: state.items.map(item => 
          item.id === uniqueId ? { ...item, quantity: item.quantity + 1 } : item
        ),
        isOpen: true
      };
    }
    
    return { 
      items: [...state.items, { ...newItem, id: uniqueId, quantity: 1 }],
      isOpen: true 
    };
  }),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  
  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
}));