import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { IProduct } from "./restaurantProductsContext";
import { useRestaurantsContext } from "./restaurantsContext";

const CartContext = createContext<ICartProviderData>({} as ICartProviderData);

interface ICartProps {
  children: ReactNode;
}

interface ICartProviderData {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  setCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  addOneProduct: (productId: number) => void;
  minusOneProduct: (productId: number) => void;
  amountCart: number;
  totalCart: number;
  subTotalCart: number;
  freightCart: number;
  summaryCart: ISummaryCart[];
}

interface ISummaryCart {
  restaurant: string;
  price: number;
  amount: number;
  logo?: string;
}

const CartProvider = ({ children }: ICartProps) => {
  const { allRestaurants } = useRestaurantsContext();

  const [cart, setCart] = useState<IProduct[]>([]);
  //frete

  const restaurants: string[] = [];
  cart.forEach((product) => {
    if (!restaurants.includes(product.restaurant))
      restaurants.push(product.restaurant);
  });
  const freightCart = restaurants.length * 8;
  const amountCart = cart.reduce((acc, product) => {
    return acc + product.amount;
  }, 0);
  const productsCartCopy = [...cart];

  const subTotalCart = cart.reduce((acc, product) => {
    return acc + product.amountPrice;
  }, 0);

  const totalCart = subTotalCart + freightCart;

  const localCart = localStorage.getItem("cart");

  useEffect(() => {
    if (localCart) {
      const local = JSON.parse(localCart);
      setCart(local);
    }
  }, []);

  const indexProduct = (currentId: number) =>
    cart.findIndex(({ id }) => id === currentId);

  const updateAmountPrice = (currentId: number) => {
    productsCartCopy[currentId].amountPrice =
      productsCartCopy[currentId].amount * productsCartCopy[currentId].price;
    setCart(productsCartCopy);
  };

  const addToCart = (product: IProduct) => {
    const isOnCart = cart.some(({ id }) => id == product.id);
    const indexOnSale = cart.findIndex(({ id }) => id == product.id);

    if (isOnCart) {
      updateAmountPrice(indexOnSale);
    } else {
      product.amount = 1;
      product.amountPrice = product.price;
      setCart((old) => {
        const newCart = [...old, product].sort((a, b) =>
          a.restaurant.localeCompare(b.restaurant),
        );
        return newCart;
      });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const removeFromCart = (currentId: number) => {
    const currentIndex = indexProduct(currentId);

    const newCart = cart.filter((product, index) => index !== currentIndex);
    setCart(newCart);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addOneProduct = (productId: number) => {
    const currentIndex = indexProduct(productId);

    productsCartCopy[currentIndex].amount++;
    setCart(productsCartCopy);

    updateAmountPrice(currentIndex);

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const minusOneProduct = (productId: number) => {
    const currentIndex = indexProduct(productId);
    if (productsCartCopy[currentIndex].amount > 1) {
      productsCartCopy[currentIndex].amount--;
      setCart(productsCartCopy);
      updateAmountPrice(currentIndex);
    } else if (productsCartCopy[currentIndex].amount === 1) {
      removeFromCart(productId);
    }
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const summaryCart: ISummaryCart[] = [];

  cart.forEach((product) => {
    const indexSummaryCart = summaryCart.findIndex(
      ({ restaurant }) => restaurant === product.restaurant,
    );

    if (indexSummaryCart === -1) {
      const logo = allRestaurants.find(
        (restaurant) => restaurant.name === product.restaurant,
      )?.["logo-image"];

      const summaryRestaurant = {
        restaurant: product.restaurant,
        amount: product.amount,
        price: product.amountPrice,
        logo: logo,
      };
      summaryCart.push(summaryRestaurant);
    } else {
      summaryCart[indexSummaryCart].amount += product.amount;
      summaryCart[indexSummaryCart].price += product.amountPrice;
    }
  });

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        cart,
        setCart,
        minusOneProduct,
        addOneProduct,
        amountCart,
        totalCart,
        subTotalCart,
        freightCart,
        summaryCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
export const useCart = () => useContext(CartContext);
