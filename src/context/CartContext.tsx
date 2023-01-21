import { createContext, ReactNode, useState } from "react";

export interface CartItems {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  description: string;
  defaultPriceId: string;
}

interface CartContextType {
  addNewItem: (item: CartItems) => void;
  removeItem: (item: CartItems) => void;
  cartItems: CartItems[];
}

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, SetCartItems] = useState<CartItems[]>([]);

  function addNewItem(item: CartItems) {
    SetCartItems((state) => [...state, item]);
    console.log(cartItems);
  }

  function removeItem(item: CartItems) {
    const NewCartItems = cartItems.filter((cartItem) => {
      return cartItem !== item;
    });

    SetCartItems(NewCartItems);
  }

  return (
    <CartContext.Provider value={{ addNewItem, cartItems, removeItem }}>
      {children}
    </CartContext.Provider>
  );
}
