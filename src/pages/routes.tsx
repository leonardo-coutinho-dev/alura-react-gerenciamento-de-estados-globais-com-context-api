import React from "react";

import { Cart, Login, Shop } from ".";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UsuarioProvider } from "../common/context";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UsuarioProvider>
              <Login />
            </UsuarioProvider>
          }
        />
        <Route
          path="/cart"
          element={
            <UsuarioProvider>
              <Cart />
            </UsuarioProvider>
          }
        />
        <Route
          path="/shop"
          element={
            <UsuarioProvider>
              <Shop />
            </UsuarioProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
