import React, { useState } from "react";

import { Cart, Login, Shop } from ".";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UsuarioContext } from "../common/context";

const AppRoutes = () => {
  const [nome, setNome] = useState("");
  const [valor, setValor] = useState(0);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <UsuarioContext.Provider value={{ nome, setNome, valor, setValor }}>
              <Login />
            </UsuarioContext.Provider>
          }
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
