"use client";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import ProductCard from "./ProductCard";
import { TProduct } from "@/types";
import { useGetProductsQuery } from "@/redux/services/product";

export default function RelatedProducts() {
  const { data, isLoading: loadingProducts } = useGetProductsQuery(8);
  const products = data?.products || [];

  return (
    <Box
      sx={{
        px: {
          xs: "16px",
          lg: "140px",
        },
        pt: "48px",
        pb: {
          xs: "48px",
          lg: "120px",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "text.main",
        }}
        component={"h4"}
      >
        BESTSELLER PRODUCTS
      </Typography>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          gap: "32px 32px",
          mt: "48px",
        }}
      >
        {products?.map((product) => (
          <ProductCard key={product.id} product={product as TProduct} />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {loadingProducts && <CircularProgress color="primary" />}{" "}
      </Box>
    </Box>
  );
}
