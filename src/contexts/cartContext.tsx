import { createContext, ReactNode, useContext, useState } from "react";

import {
  IProduct,
  useRestaurantProductsContext,
} from "./restaurantProductsContext";

const CartContext = createContext<ICartProviderData>({} as ICartProviderData);
export const useCart = () => useContext(CartContext);

interface ICartProps {
  children: ReactNode;
}

interface ICartProviderData {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
}

const CartProvider = ({ children }: ICartProps) => {
  const [cart, setIsCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setIsCart([...cart, product]);
  };
  const removeFromCart = (removeItem: IProduct) => {
    const newCart = cart.filter((product) => product.item !== removeItem.item);
    setIsCart(newCart);
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
