import {
  createBrowserRouter, RouterProvider,} from "react-router";
import './App.css'
import Registration from './pages/Registration'
import Login from "./pages/Login";
import Home from './pages/Home';
import Massege from "./pages/Messege";
const router =createBrowserRouter([
  {
    path: "/registration",
    element :<Registration/>
  },
  {
    path: "/login",
    element :<Login/>
  },
  {
    path: "/home",
    element :<Home/>,
  },
  {
    path: "/messege",
    element :<Massege/>,
  },
  
 
])

function App() {

  return (
   <RouterProvider router={router}/>
  )
}

export default App
