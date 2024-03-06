import { RouterProvider, createBrowserRouter } from "react-router-dom"
import { Login } from "../pages/Login"
import { Home } from "../pages/Home"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/login",
    element: <Login />
  }
])

function Routes() {
  return <RouterProvider router={router} />
}

export default Routes
