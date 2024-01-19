import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CartItem from "./CartItem";
import React from "react";
import { formatCurrency } from "@/utils";

export default function CartForm({
  items,
  type,
}: {
  items: {
    id: number;
    thumbnail: string;
    title: string;
    price: number;
    quantity: number;
  }[];
  type: string;
}) {
  const subtotal = items.reduce((acc, item) => {
    return acc + item.price * item.quantity;
  }, 0);

  const [total, setTotal] = React.useState(subtotal);
  return (
    <Box
      sx={{
        minWidth: "100%",
        position: "absolute",
        padding: "16px",
        top: "64px",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "primary.light",
      }}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full flex flex-col gap-4"
      >
        {items.map((item) => (
          <CartItem key={item.id} item={item} setTotal={setTotal} type={type} />
        ))}
        {type === "cart" && (
          <Button
            variant="contained"
            sx={{
              color: "primary.light",
            }}
          >
            Checkout {formatCurrency(total, "USD")}
          </Button>
        )}
      </form>
    </Box>
  );
}
