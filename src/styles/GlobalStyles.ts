import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --brand-green: 36, 133, 64;
    --brand-yellow: 227, 229, 34;
    --brand-light-green: 146, 227, 169;
    --brand-light-green-2: 228, 249, 234;
    --button-green: 18, 117, 58;
    --brand-yellow: 227, 229, 34;
    --placeholder: 67, 66, 66;
    --light-border: 194, 194, 194;
    --gray-100: #EDEDED;

    --cart-background: 84, 166, 86;
    --cart-white-background: 255, 255, 255;

    --white: white;
    --gray: 128,128,128;
    --text-black: 0,0,0;
    --warning-error: 255, 0, 0, 1;
    --background-white: 255, 255, 255;
    --light-background-color: 247, 246, 243;
}

* { 
    margin:0;
    outline:0;
    padding: 0;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;

    overflow-y: auto;
    overflow-x: hidden;

    width: 100vw;
    height: 100vh;

    font-family: 'Petrona', serif;

    background: ${(props) => props.theme.colors.body};

    ::-webkit-scrollbar {
      width: 5px;
      border-radius: 5px;
    }
    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
      background-color: #54a656;
    }
}

button {
    cursor: pointer;
    border: 0;
}

input {
    border: 0;
}

ul {
    list-style: none;
}

a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.contrastTextBlack};
}
`;

export default GlobalStyle;
