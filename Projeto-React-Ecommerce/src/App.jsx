import { ToastContainer } from "react-toastify"
import { BrowserRouter } from "react-router-dom"
import { AuthProvider } from "./context/Auth"
import { GlobalStyle } from "./styles/GlobalStyle"
import { Router } from "./routes/router"
import Context from "./context/Context"

function App() {
   return (
      <BrowserRouter>
         <AuthProvider>
            <Context>
               <ToastContainer />
               <GlobalStyle />
               <Router />
            </Context>
         </AuthProvider>
      </BrowserRouter>
   )
}

export default App
