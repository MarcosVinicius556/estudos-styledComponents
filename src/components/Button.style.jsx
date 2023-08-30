import styled from 'styled-components';
import ButtonStyled from './Button';

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
    /* Por ser uma tagged function podemos utilizar código JS,
       para acessar as props passadas para o componente, praticamente
       como um componente react funciona */

    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : 'red' };
    width: 100px;
    height: ${({ theme }) => theme.size.xxl}; /* Aplicando um estilo contido no nosso Theme.jsx */

    /* Para utilizar eventos como hover, click, etc, utilizamos o & */
    &:hover {
        background-color: pink;
    }
`;

/**
 * Com styled componentes também podemos estilizar 
 * componentes criados por nós mesmos
 */
export const Button2 = styled(ButtonStyled)`
    background-color: light-blue;
    width: 100px;
    height: 50px;
`;