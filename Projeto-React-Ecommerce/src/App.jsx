import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/auth'
import { Login } from './pages/Login/Login'
import { GlobalStyle } from './styles/GlobalStyle'

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Router />
      </AuthProvider>
    <>
      <GlobalStyle/>
    </>
    </BrowserRouter>
  )
}

export default App
