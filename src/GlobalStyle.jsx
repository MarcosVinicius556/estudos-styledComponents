import { createGlobalStyle } from "styled-components";

/**
 * Outra vantagem de utilizar styled componentes, é poder fornecer
 * estilos globais para nossa aplicação, isso de forma simples, 
 * organizada e de fácil leitura, como mostra o exemplo a seguir...
 */

export const GlobalStyle = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: red;
}
`;