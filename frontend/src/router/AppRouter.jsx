import React from 'react'
import {createBrowserRouter, RouterProvider} from "react-router"
import AuthLayout from '../layout/AuthLayout'

const AppRouter = () => {
  const router = createBrowserRouter([
    {
        path: "/",
        element: <AuthLayout/>
    }
  ])

  return <RouterProvider router={router}/>
}

export default AppRouter