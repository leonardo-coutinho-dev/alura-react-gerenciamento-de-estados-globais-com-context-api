import { Box, Button, Typography } from "@mui/material";
import { TextField } from "@mui/material";
import React from "react";

const Login = () => {
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
        <Button sx={{ maxWidth: "200px", backgroundColor: "#1d1d1d" }}>
          Próxima {">"}
        </Button>
      </Box>
    </>
  );
};

export default Login;
