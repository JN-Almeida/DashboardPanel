import { Router } from "./Routes/Router"
import { GlobalStyle } from "./styles/global"
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from "./contexts/AuthContext"
import { useEffect } from "react"

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
        <GlobalStyle />
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
