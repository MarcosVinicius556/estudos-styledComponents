import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GlobalStyle } from './GlobalStyle.jsx'
import { ThemeProvider } from 'styled-components'
import { them } from './Theme.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Toda a aplicação fica dentro do ThemeProvider, pois com isso podemos acessar os temas que configuramos */}
    <ThemeProvider theme={them}> {/**Passando o tema que criamos */}
      {/* Adicionando um estilo global para a aplicação através de styled components */}
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
