import React from "react";

import { Cart, Login, Shop } from ".";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UsuarioProvider } from "../common/context";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <UsuarioProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </UsuarioProvider>
    </BrowserRouter>
  );
};

export default AppRoutes;
