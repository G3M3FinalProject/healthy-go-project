import { ReactNode } from "react";

import { GoogleOAuthProvider } from "@react-oauth/google";

import { AuthUserProvider } from "./authUserContext";
import { RestaurantProductsProvider } from "./restaurantProductsContext";

interface IProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: IProvidersProps) => {
  return (
    <GoogleOAuthProvider clientId="361752817190-eq61arub3dm8p01c2jk7roqelfdk4hf7.apps.googleusercontent.com">
      <AuthUserProvider>
        <RestaurantProductsProvider>{children}</RestaurantProductsProvider>
      </AuthUserProvider>
    </GoogleOAuthProvider>
  );
};
