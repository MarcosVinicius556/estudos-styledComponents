import { styled } from "styled-components";

export const Wrapper = styled.div`
    width: 80vw;
    height: 100vh;

    /* 
       Com styled componentes, também é possível estilizar 
       componentes encadeados, ou seja, filhos do componente
       pai 
    */

    & a {
        color: inherit;
        text-decoration: none;
    }
`;
