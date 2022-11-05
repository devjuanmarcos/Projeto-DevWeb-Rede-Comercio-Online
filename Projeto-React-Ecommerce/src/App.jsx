import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/Auth'
import { Login } from './pages/Login/Login'
import { GlobalStyle } from './styles/GlobalStyle'
import { Router } from './routes/router'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <GlobalStyle/>
        <Router />
      </AuthProvider>
   
    </BrowserRouter>
  )
}

export default App
