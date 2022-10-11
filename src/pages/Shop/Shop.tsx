import React, { useContext, useState } from "react";

import { Link } from "react-router-dom";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";

import { UsuarioContext } from "../../common/context";

// dummy data

const productsData = [
  { name: "Tomato", price: 5.8, key: 0 },
  { name: "Cucumber", price: 7.2, key: 1 },
  { name: "Letuce", price: 3.4, key: 2 },
];

const Shop = () => {
  const { nome, valor } = useContext(UsuarioContext);

  // const { total, setTotal } = useState(0);

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
          Olá, <strong>{nome}</strong>! Essa é a nossa loja.
        </Typography>
        <Typography variant="body1" gutterBottom>
          O seu saldo é:{" "}
          <strong>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(valor)}
          </strong>
        </Typography>
        <Card
          variant="outlined"
          sx={{ backgroundColor: "transparent", border: "none" }}
        >
          {productsData.map((product) => (
            <Box
              sx={{ backgroundColor: "#F7F5D2", marginBottom: "16px" }}
              key={product.key}
            >
              <CardContent
                sx={{
                  margin: 0,
                  padding: "16px 16px 0",
                }}
              >
                <Typography sx={{ fontSize: 14 }} color="#1d1d1d" gutterBottom>
                  <strong>{product.name}</strong>
                </Typography>
                <Typography sx={{ margin: 0 }} color="#1d1d1d">
                  <strong>
                    {new Intl.NumberFormat("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    }).format(product.price)}
                    /kg
                  </strong>
                </Typography>
              </CardContent>
              <CardActions sx={{ backgroundColor: "transparent" }}>
                <Button
                  sx={{ margin: 0, backgroundColor: "#1d1d1d" }}
                  size="small"
                  onClick={() => {
                    console.log("Adicionou um produto!");
                  }}
                >
                  +
                </Button>
                <Button
                  sx={{ margin: 0, backgroundColor: "#1d1d1d" }}
                  size="small"
                  onClick={() => {
                    console.log("Removeu um produto!");
                  }}
                >
                  -
                </Button>
              </CardActions>
            </Box>
          ))}
        </Card>
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
