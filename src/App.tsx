import { Router } from "./Routes/Router"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <BrowserRouter>
      <Router />
      <GlobalStyle />
    </BrowserRouter>
  )
}

export default App
