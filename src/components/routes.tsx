import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Cart, Login, Shop } from ".";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/shop",
    element: <Shop />,
  },
]);

const appRoutes = () => {
  return <RouterProvider router={router} />;
};

export default appRoutes;
