import { useNavigate } from "react-router-dom"

export function PageNotFound() {
   const navigate = useNavigate();
   return (
      <>
         <h1> Ops, parece que está página não existe</h1>
         <p>...ou foi apenas um sonho, sei lá</p>
      </>
   )
}
