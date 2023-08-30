
/**
 * Para poder estilizar um componente próprio com styled components, 
 * é necessário passar um parâmetro chamado "className" para que ele possa
 * entender que isto irá receber uma estilização
 */
function ButtonStyled({ className, children }) {
    return (
        <button className={className} >{children}</button>
    )
}

export default ButtonStyled;
