import { ReactNode } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { AuthUserProvider } from "./authUserContext";
import CartProvider from "./cartContext";
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
            <CartProvider>{children}</CartProvider>
          </RestaurantProductsProvider>
        </RestaurantsProvider>
      </AuthUserProvider>
    </GoogleOAuthProvider>
  );
};
