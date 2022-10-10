import React from "react";

import { Cart, Login, Shop } from ".";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UsuarioProvider } from "../common/context/Usuario";

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
