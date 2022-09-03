import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
    --brand-green: rgba(36, 133, 64, 1);
    --brand-yellow: rgba(227, 229, 34, 1);
    --brand-light-green: rgba(146, 227, 169, 1);
    --brand-light-green-2: rgb(228, 249, 234);
    --button-green: rgba(18, 117, 58, 1);
    --brand-yellow: rgba(227, 229, 34, 1);
    --placeholder: rgba(67, 66, 66, 1);

    --text-black: rgba(0,0,0,1);
    --background-color:  #f7f6f3;
}

* { 
    margin:0;
    padding: 0;
    outline:0;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100vw;
    height: 100vh;
    font-family: 'Petrona', serif;
    background: #f7f6f3;
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
a{
    text-decoration: none;
}
`;

export default GlobalStyle;
