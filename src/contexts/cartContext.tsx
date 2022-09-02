import { createContext, ReactNode, useContext, useState } from "react";

import { IProduct } from "./restaurantProductsContext";

const CartContext = createContext<ICartProviderData>({} as ICartProviderData);
export const useCart = () => useContext(CartContext);

interface ICartProps {
  children: ReactNode;
}

interface ICartProviderData {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
}

const CartProvider = ({ children }: ICartProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setCart([...cart, product]);
    console.log(cart);
  };
  const removeFromCart = (removeItem: IProduct) => {
    const newCart = cart.filter((product) => product.item !== removeItem.item);
    setCart(newCart);
  };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
