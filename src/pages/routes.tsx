import React from "react";

import { Cart, Login, Shop } from ".";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UsuarioProvider } from "../common/context";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <UsuarioProvider>
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
        </UsuarioProvider>
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
