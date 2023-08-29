import styled from 'styled-components';

/**
 * Ao criar um styled componente,
 * na notação ponto dele pode ser
 * informada qualquer tag HTML
 * 
 * a sintaxe é: styled.<tag_html>`<estilos a serem aplicados>`
 * 
 * <tag_html>+`` é uma tagged function....
 */
export const StyledButton = styled.button`
    /* Aqui é onde será criado nossos estilos */ 
    background-color: red;
    width: 100px;
    height: 50px;
`;