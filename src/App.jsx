import {
  createBrowserRouter, RouterProvider,} from "react-router";
import './App.css'
import Registration from './pages/Registration'
import Login from "./pages/Login";

import Massege from "./pages/Messege";
import Home from "./pages/home";
import RootLayout from "./pages/RootLayout";
import Messege from "./pages/Messege";
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
    path: "/messege",
    element :<Massege/>,
  },
  {
    path: "/",
    element :<RootLayout/>,
    children :[{
      index :true,
      element: <Home/>,
    },
    {
      path: "/messege",
      element: <Messege/>,
    },
  ] 
  },
  
 
])

function App() {

  return (
   <RouterProvider router={router}/>
  )
}

export default App
