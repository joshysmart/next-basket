import { TProduct } from "@/types";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({ product }: { product: TProduct }) {
  const discountedPrice = Math.round(
    product.price - (product.price * product.discountPercentage) / 100
  );

  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col items-center justify-between gap-2"
    >
      <Box
        sx={{
          width: "100%",
          height: {
            xs: "300px",
            lg: "200px",
          },
        }}
      >
        <Image
          src={product.thumbnail}
          alt="product-thumbnail"
          width={200}
          height={0}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            fontWeight: "bold",
            color: "text.main",
            textAlign: "center",
          }}
        >
          {product.title}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "text.secondary",
            fontWeight: "bold",
            textTransform: "capitalize",
          }}
        >
          {product.category}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Typography
            sx={{
              color: "text.disabled",
              fontWeight: "bold",
            }}
          >
            {product.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
          <Typography
            sx={{
              color: "success.main",
              fontWeight: "bold",
            }}
          >
            {discountedPrice.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}
