import React from "react";
import { Cart, Login, Shop } from "./components";

export const App = () => {
  return (
    <div className="App">
      <Login />
      <Shop />
      <Cart />
    </div>
  );
};
