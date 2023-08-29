import { StyledButton } from "./components/Button.style"

function App() {

  return (
    /*
     Utilizando styledComponents, 
     ao invés de criar uma tag,
     e estiliza-la, já criamos um componente,
     e estilizamos no mesmo arquivo
     */
      <StyledButton onClick={() => console.log('clickou!')}>
        Front Beginners
      </StyledButton>
  )
}

export default App
