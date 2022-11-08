import { ToastContainer } from "react-toastify"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/Auth"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Router } from "./routes/router"

function App() {
   return (
      <BrowserRouter>
         <AuthProvider>
            <ToastContainer />
            <GlobalStyle />
            <Router />
         </AuthProvider>
      </BrowserRouter>
   )
}

export default App
