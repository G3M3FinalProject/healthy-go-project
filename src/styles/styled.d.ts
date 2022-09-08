import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      contrastTextWhite: string;
      contrastTextBlack: string;

      primary: string;
      secondary: string;
      tertiary: string;

      placeholder: string;
      lightBorder: string;
      red: string;

      brandGreen: string;
      buttonGreen: string;
      lightGreen: string;
      lighterGreen: string;
      lightGreenTransparent: string;

      cartBackground: string;
      cartLightBackground: string;

      body: string;
      backgroundTransparent: string;
    };
  }
}
