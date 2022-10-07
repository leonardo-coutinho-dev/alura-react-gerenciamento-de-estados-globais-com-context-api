import { Box, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";

const Login = () => {
  return (
    <Box
      sx={{
        maxWidth: "796px",
        margin: "16px auto",
        padding: "0 16px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="body1" gutterBottom>
        Login
      </Typography>
      <Typography variant="h6" gutterBottom>
        Primeiro, nos informe o seu nome e sobrenome, por gentileza:
      </Typography>
      <TextField
        id="text-field-nome-sobrenome"
        label="Nome/Sobrenome"
        variant="outlined"
        sx={{ paddingBottom: "7px" }}
      />
      <Typography variant="h6" gutterBottom>
        Agora, nos informe o valor em dinheiro que você possui disponível para
        gastar:
      </Typography>
      <TextField
        id="text-field-valor"
        label="Valor em R$"
        variant="outlined"
        type="number"
      />
    </Box>
  );
};

export default Login;
