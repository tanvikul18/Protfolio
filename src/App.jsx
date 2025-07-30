import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./Pages/Home"
import NotFound from "./Pages/NotFound"
import { ToastContainer } from "react-toastify"


function App() {
  return (
  <>
   <ToastContainer/>
    <BrowserRouter>
       <Routes>
            <Route index element={<Home/>}/>
             
             <Route path="*" element={<NotFound/>}/>

       </Routes>
    </BrowserRouter>
    
     </>
  )
}

export default App
