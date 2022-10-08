import React, { createContext } from "react";

interface UsuarioContextTypes {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  valor: number;
  setValor: React.Dispatch<React.SetStateAction<number>>;
}

const UsuarioContext = createContext<UsuarioContextTypes>({
  nome: "",
  setNome: () => {},
  valor: 0,
  setValor: () => {},
});

export default UsuarioContext;
