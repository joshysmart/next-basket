"use client";

import { useGetProductsQuery } from "@/redux/services/product";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import ProductCard from "./ProductCard";
import React from "react";

export default function FeaturedProducts() {
  const [limit, setLimit] = React.useState(10);
  const { data, isLoading: loadingProducts } = useGetProductsQuery(limit);
  const products = data?.products || [];
  const total = data?.total;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "56px",
        py: {
          xs: "100px",
          lg: "160px",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            display: {
              xs: "none",
              lg: "block",
            },
            color: "text.secondary",
          }}
        >
          Featured Products
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            color: "text.main",
            fontWeight: "bold",
          }}
          component={"h3"}
        >
          BESTSELLER PRODUCTS
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "text.secondary",
          }}
        >
          Problems trying to resolve the conflict between{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          padding: {
            xs: "0 16px",
            lg: "0 140px",
          },
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            lg: "repeat(5, 1fr)",
          },
          gap: "32px 32px",
        }}
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loadingProducts && <CircularProgress color="primary" />}

        {total && (products?.length ?? 0) > 0 && limit < total && (
          <Button
            sx={{
              mt: "96px",
              fontSize: "14px",
              fontWeight: "bold",
              py: "16px",
            }}
            variant="outlined"
            onClick={() => setLimit((prev) => prev + 5)}
          >
            LOAD MORE PRODUCTS
          </Button>
        )}
      </Box>
    </Box>
  );
}
