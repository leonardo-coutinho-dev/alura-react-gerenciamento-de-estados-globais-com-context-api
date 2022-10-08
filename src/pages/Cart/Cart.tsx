import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Cart = () => {
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
        Cart
      </Box>
      <Box
        sx={{
          maxWidth: "796px",
          margin: "0 auto 16px",
          padding: "16px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-start",
          backgroundColor: "#ebebeb",
          color: "#1d1d1d",
          borderRadius: "4px",
        }}
      >
        <Link to={"/shop"}>
          <Button sx={{ maxWidth: "200px", backgroundColor: "#1d1d1d" }}>
            {"<"} Anterior
          </Button>
        </Link>
      </Box>
    </>
  );
};

export default Cart;
