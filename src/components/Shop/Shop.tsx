import React from "react";
import { Link } from "react-router-dom";
import { Box, Button } from "@mui/material";

const Shop = () => {
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
        Shop
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
