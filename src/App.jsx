import {
  createBrowserRouter, RouterProvider,} from "react-router";
import './App.css'
import Registration from './pages/Registration'
import Login from "./pages/Login";
const router =createBrowserRouter([
  {
    path: "/registration",
    element :<Registration/>
  },
  {
    path: "/login",
    element :<Login/>
  }
])

function App() {

  return (
   <RouterProvider router={router}/>
  )
}

export default App
