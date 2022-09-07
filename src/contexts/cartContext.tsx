import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

import { api } from "../services";
import { IUser, IUserEditRes, useAuthUserContext } from "./authUserContext";
import { IProduct } from "./restaurantProductsContext";
import { useRestaurantsContext } from "./restaurantsContext";

const CartContext = createContext<ICartProviderData>({} as ICartProviderData);

interface ICartProps {
  children: ReactNode;
}

interface ICartProviderData {
  addToCart: (product: IProduct) => void;
  removeFromCart: (productId: number) => void;
  addOneProduct: (productId: number) => void;
  minusOneProduct: (productId: number) => void;
  amountCart?: number;
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
  const { setUser, cart, setCart } = useAuthUserContext();
  // const [cart, setCart] = useState<IProduct[]>(user?.cart as IProduct[]);
  const [subTotalCart, setSubTotalCart] = useState(0);
  const [freightCart, setFreightCart] = useState(0);
  const [totalCart, setTotalCart] = useState(0);

  useEffect(() => {
    const cartObject = { cart: cart };
    const userName: IUser = JSON.parse(
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      localStorage.getItem("@healthyGo-user")!,
    );
    if (userName && cart) {
      const userId = userName.id;
      api
        .patch(`/users/${userId}`, cartObject)
        .then((res: IUserEditRes) => {
          setUser(res.data);
          const userLocalStorage = JSON.stringify(res.data);
          localStorage.setItem("@healthyGo-user", userLocalStorage);
        })
        .catch((err) => console.log(err));
    }

    if (cart) {
      const restaurants: string[] = [];

      cart?.forEach((product) => {
        if (!restaurants.includes(product.restaurant))
          restaurants.push(product.restaurant);
      });
      setFreightCart(restaurants.length * 8);

      setSubTotalCart(
        cart.reduce((acc, product) => {
          return acc + product.amountPrice;
        }, 0),
      );
      const newTotal = subTotalCart + freightCart;
      setTotalCart(newTotal > 80 ? newTotal * 0.9 : newTotal);
    }
  }, [cart, subTotalCart, freightCart]);

  //frete

  const amountCart = cart?.reduce((acc, product) => {
    return acc + product.amount;
  }, 0);

  let productsCartCopy;
  if (cart) {
    productsCartCopy = [...cart];
  }

  const indexProduct = (currentId: number) => {
    if (cart) {
      return cart?.findIndex(({ id }) => id === currentId);
    }
    return 0;
  };

  const updateAmountPrice = (currentId: number) => {
    productsCartCopy[currentId].amountPrice =
      productsCartCopy[currentId].amount * productsCartCopy[currentId].price;
    setCart(productsCartCopy);
  };

  const addToCart = (product: IProduct) => {
    const isOnCart = cart?.some(({ id }) => id == product.id);

    if (isOnCart) {
      addOneProduct(product.id);
    } else {
      product.amount = 1;
      product.amountPrice = product.price;
      setCart((old) => {
        if (typeof old === "undefined") return [product];
        const newCart = [...old, product].sort((a, b) =>
          a.restaurant.localeCompare(b.restaurant),
        );
        return newCart;
      });
    }
  };

  const removeFromCart = (currentId: number) => {
    const currentIndex = indexProduct(currentId);
    if (cart) {
      const newCart = cart?.filter((product, index) => index !== currentIndex);
      setCart(newCart);
    }
  };

  const addOneProduct = (productId: number) => {
    const currentIndex = indexProduct(productId);
    productsCartCopy[currentIndex].amount++;
    setCart(productsCartCopy);

    updateAmountPrice(currentIndex);
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
  };

  const summaryCart: ISummaryCart[] = [];
  const updateSummaryCart = () => {
    if (cart) {
      cart?.forEach((product) => {
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
    }
  };
  updateSummaryCart();

  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
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
