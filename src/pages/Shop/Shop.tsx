import React, { useContext } from "react";

import { Link } from "react-router-dom";

import { Box, Button, Typography } from "@mui/material";

import { UsuarioContext } from "../../common/context";

const Shop = () => {
  const { nome, valor } = useContext(UsuarioContext);

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
        <Typography variant="body1" gutterBottom>
          Olá, {nome}! Essa é a nossa loja.
        </Typography>
        <Typography variant="body1" gutterBottom>
          O seu saldo é:{" "}
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(valor)}
          ;
        </Typography>
      </Box>
      <Box
        sx={{
          maxWidth: "796px",
          margin: "0 auto 16px",
          padding: "16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "#ebebeb",
          color: "#1d1d1d",
          borderRadius: "4px",
        }}
      >
        <Link to={"/"}>
          <Button sx={{ maxWidth: "200px", backgroundColor: "#1d1d1d" }}>
            {"<"} Anterior
          </Button>
        </Link>
        <Link to={"/cart"}>
          <Button sx={{ maxWidth: "200px", backgroundColor: "#1d1d1d" }}>
            Próxima {">"}
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Shop;
