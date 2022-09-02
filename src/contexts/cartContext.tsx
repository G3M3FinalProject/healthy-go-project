import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

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
  const localCart = localStorage.getItem("cart");
  useEffect(() => {
    if (localCart) {
      const local = JSON.parse(localCart);
      setCart(local);
    }
  }, []);

  const addToCart = (product: IProduct) => {
    setCart((cart) => {
      const newCart = [...cart, product].sort((a, b) =>
        a.restaurant.localeCompare(b.restaurant),
      );
      return newCart;
    });
    localStorage.setItem("cart", JSON.stringify(cart));
  };
  const removeFromCart = (removeItem) => {
    const newCart = cart.filter((index, product) => index !== removeItem);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addOneProduct = (product) => {
    const copyCurrentSale = [...cart];

    const indexProduct = (currentProduct) =>
      cart.findIndex(({ id }) => id === currentId);
    const currentIndex = indexProduct(currentId);
    copyCurrentSale[currentIndex].amount++;

    setCurrentSale(copyCurrentSale);

    updateAmountPrice(currentId);
  };

  // const minusOneProduct = (currentId) => {
  //   const currentIndex = indexProduct(currentId);

  //   if (copyCurrentSale[currentIndex].amount > 1) {
  //     copyCurrentSale[currentIndex].amount--;
  //     setCurrentSale(copyCurrentSale);
  //     updateAmountPrice(currentId);
  //   }
  // };

  return (
    <CartContext.Provider value={{ addToCart, removeFromCart, cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
