import React, { createContext, useState } from "react";

interface UsuarioContextTypes {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  valor: number;
  setValor: React.Dispatch<React.SetStateAction<number>>;
}

interface UsuarioProviderProps {
  children: React.ReactNode;
}

export const UsuarioContext = createContext<UsuarioContextTypes>({
  nome: "",
  setNome: () => {},
  valor: 0,
  setValor: () => {},
});

export const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
  const [nome, setNome] = useState("");

  const [valor, setValor] = useState(0);

  return (
    <UsuarioContext.Provider value={{ nome, setNome, valor, setValor }}>
      {children}
    </UsuarioContext.Provider>
  );
};
