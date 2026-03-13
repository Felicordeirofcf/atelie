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
  // Estado do Carrinho
  items: CartItem[];
  isCartOpen: boolean;
  addItem: (item: Omit<CartItem, 'quantity' | 'id'>) => void;
  removeItem: (id: string) => void;
  openCart: () => void;
  closeCart: () => void;
  
  // Estado do Menu Mobile
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
}

export const useCartStore = create<CartStore>((set) => ({
  // Implementação do Carrinho
  items: [],
  isCartOpen: false, // Renomeado de isOpen para isCartOpen
  
  addItem: (newItem) => set((state) => {
    const uniqueId = `${newItem.productId}-${newItem.size}`;
    const existingItem = state.items.find(item => item.id === uniqueId);
    
    if (existingItem) {
      return {
        items: state.items.map(item => 
          item.id === uniqueId ? { ...item, quantity: item.quantity + 1 } : item
        ),
        isCartOpen: true
      };
    }
    
    return { 
      items: [...state.items, { ...newItem, id: uniqueId, quantity: 1 }],
      isCartOpen: true 
    };
  }),
  
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  })),
  
  openCart: () => set({ isCartOpen: true, isMenuOpen: false }), // Fecha o menu se abrir o carrinho
  closeCart: () => set({ isCartOpen: false }),

  // Implementação do Menu Mobile
  isMenuOpen: false,
  openMenu: () => set({ isMenuOpen: true, isCartOpen: false }), // Fecha o carrinho se abrir o menu
  closeMenu: () => set({ isMenuOpen: false }),
}));