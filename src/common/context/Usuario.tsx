import React, { createContext, useState } from "react";

// Interfaces

interface UsuarioContextTypes {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  valor: number;
  setValor: React.Dispatch<React.SetStateAction<number>>;
}

interface UsuarioProviderProps {
  children: React.ReactNode;
}

// creating the context

export const UsuarioContext = createContext<UsuarioContextTypes>({
  nome: "",
  setNome: () => {},
  valor: 0,
  setValor: () => {},
});

// changin' the name of the created context on google chrome devtools

UsuarioContext.displayName = "Usuário";

// creating the provider component

export const UsuarioProvider = ({ children }: UsuarioProviderProps) => {
  const [nome, setNome] = useState("{nome aqui}");

  const [valor, setValor] = useState(0);

  return (
    <UsuarioContext.Provider value={{ nome, setNome, valor, setValor }}>
      {children}
    </UsuarioContext.Provider>
  );
};
