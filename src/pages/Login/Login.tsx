import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { Box, Button, Typography, TextField } from "@mui/material";

import { UsuarioContext } from "../../common/context";

const Login = () => {
  const { nome, setNome, valor, setValor } = useContext(UsuarioContext);
  return (
    <>
      <Box
        sx={{
          maxWidth: "796px",
          margin: "16px auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#ebebeb",
          color: "#1d1d1d",
          borderRadius: "4px",
        }}
      >
        <Typography variant="h6" gutterBottom>
          Login
        </Typography>
        <Typography variant="body1" gutterBottom>
          Primeiro, nos informe o seu nome e sobrenome, por gentileza:
        </Typography>
        <TextField
          id="text-field-nome-sobrenome"
          label="Nome/Sobrenome"
          variant="outlined"
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
          sx={{ paddingBottom: "7px" }}
        />
        <Typography variant="body1" gutterBottom>
          Agora, nos informe o valor em dinheiro que você possui disponível para
          gastar:
        </Typography>
        <TextField
          id="text-field-valor"
          label="Valor em R$"
          variant="outlined"
          type="number"
          value={valor}
          onChange={(event) => {
            setValor(Number(event.target.value));
          }}
        />
      </Box>
      <Box
        sx={{
          maxWidth: "796px",
          margin: "0 auto 16px",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          backgroundColor: "#ebebeb",
          color: "#1d1d1d",
          borderRadius: "4px",
        }}
      >
        <Link to={"/shop"}>
          <Button
            sx={{ maxWidth: "200px", backgroundColor: "#1d1d1d" }}
            onClick={() => {
              console.log(nome);
              console.log(valor);
            }}
          >
            Próxima {">"}
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Login;
