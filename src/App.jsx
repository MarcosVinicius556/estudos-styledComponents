import { Button2, StyledButton } from "./components/Button.style";
import { Wrapper } from "./components/Wrapper.style";

function App() {

  return (
    /*
     Utilizando styledComponents, 
     ao invés de criar uma tag,
     e estiliza-la, já criamos um componente,
     e estilizamos no mesmo arquivo

     Ao utilizar  styled componentes deixamos nosso código mais limpo
     pois já trazemos componentes estilizados, isto facilita a leitura
     */
    <Wrapper>
      <StyledButton >
        Front Beginners Red
      </StyledButton>

      {/* 
        Outra facilidade que o styledComponentes fonece, é a possibilidade
        de passar propriedades para os componentes, tornando assim mais fácil
        e flexível a reutilização de componentes
      */}

      <StyledButton backgroundColor="blue" >
        Front Beginners BLue
      </StyledButton>

      <StyledButton backgroundColor="pink" >
        Front Beginners BLue
      </StyledButton>

      <Button2>
        Front Begginers
      </Button2>

      <a href="#">Clique aqui!</a>
    </Wrapper>
  )
}

export default App
