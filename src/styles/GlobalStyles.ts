import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
    --brand-green: rgba(36, 133, 64, 1);
    --brand-yellow: rgba(227, 229, 34, 1);

    * { 
        margin:0;
        padding: 0;
        outline:0;
        box-sizing: border-box;

        -webkit-font-smoothing: antialiased;
        overflow-y: auto;
        width: 100vw;
        height: 100vh;
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
}
`;
