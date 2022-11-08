import { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Header } from './components/Header/header'
import { GlobalStyle } from './styles/GlobalStyle'
import {Produto} from './pages/Produto/Produto'
import { Router } from './routes/Router'

function App() {

  return (
    <>
    <BrowserRouter>
      <Header/>
      <GlobalStyle/>
      <Router/>
    </BrowserRouter>
    </>
  )
}

export default App
