import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Application } from "../Application"

export const RootRouter = () => {
   return(
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<Application/>}/>
         </Routes>
      </BrowserRouter>
   )
}