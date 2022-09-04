import { ReactNode } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { AddressContextProvider } from "./addressContext";
import { AuthUserProvider } from "./authUserContext";
import CartProvider from "./cartContext";
import { ModalProvider } from "./modalContext";
import { RestaurantProductsProvider } from "./restaurantProductsContext";
import { RestaurantsProvider } from "./restaurantsContext";

interface IProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
  return (
    <GoogleOAuthProvider clientId="361752817190-eq61arub3dm8p01c2jk7roqelfdk4hf7.apps.googleusercontent.com">
      <AuthUserProvider>
        <RestaurantsProvider>
          <RestaurantProductsProvider>
            <CartProvider>
              <AddressContextProvider>
                <ModalProvider>{children}</ModalProvider>
              </AddressContextProvider>
            </CartProvider>
          </RestaurantProductsProvider>
        </RestaurantsProvider>
      </AuthUserProvider>
    </GoogleOAuthProvider>
  );
};
