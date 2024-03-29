import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CartItem from "./CartItem";
import React from "react";
import { formatCurrency } from "@/utils";
import { TItem } from "@/types";

export default function CartForm({
  items,
  type,
}: {
  items: TItem[];
  type: string;
}) {
  const subtotal = items.reduce((acc, item) => {
    return acc + item.price! * item.quantity!;
  }, 0);

  const [total, setTotal] = React.useState(subtotal);
  return (
    <Box
      sx={{
        maxWidth: "400px",
        minWidth: {
          xs: "300px",
          lg: "400px",
        },
        position: "absolute",
        right: {
          xs: "8px",
          lg: "32px",
        },
        overflowY: "scroll",
        maxHeight: "calc(400px)",
        padding: "16px",
        top: "164px",
        boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.25)",
        backgroundColor: "primary.light",
        border: "1px solid #E5E5E5",
        zIndex: 50,
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
            className="bg-[#23A6F0]"
          >
            Checkout {formatCurrency(total, "USD")}
          </Button>
        )}
      </form>
    </Box>
  );
}
