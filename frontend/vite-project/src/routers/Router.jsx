import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from "../App"
import Home from "../pages/home/Home"
import Login from "../components/Login"
import Register from "../components/Register"


const router = createBrowserRouter([
    {
        path: "/", 
        element: <App/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
              path: "/login",
              element: <Login/>
            },
            {
              path: "/register",
              element: <Register/>
            }
            
        ]
    },
])
function Router() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default Router
