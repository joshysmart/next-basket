import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import MinusIcon from "@mui/icons-material/Remove";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import React from "react";
import { formatCurrency } from "@/utils";
import { useAppDispatch } from "@/redux/app/hook";
import { removeFromCart } from "@/redux/features/cart/cartSlice";
import { removeFromWishList } from "@/redux/features/wish/wishSlice";
import Link from "next/link";
import { TItem } from "@/types";

interface CartItemProps {
  item: TItem;
  setTotal: React.Dispatch<React.SetStateAction<number>>;
  type: string;
}
export default function CartItem({
  item: { id, thumbnail, title, price, quantity },
  setTotal,
  type,
}: CartItemProps) {
  const dispatch = useAppDispatch();
  const [newQuantity, setNewQuantity] = React.useState(quantity);
  const [subTotal, setSubTotal] = React.useState(price! * newQuantity!);
  const labelValues = [
    {
      label: "Title",
      value: title,
    },
    {
      label: "Price",
      value: price!.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      }),
    },
    {
      label: "Quantity",
      value: newQuantity,
    },
  ];
  const actions: {
    [key: string]: any;
  } = {
    cart: removeFromCart,
    wish: removeFromWishList,
  };

  function handleRemove() {
    setTotal((prev) => prev - subTotal);
    dispatch(
      actions[type]({
        id,
      })
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Box
          sx={{
            maxWidth: "40px",
            width: "20%",
            height: "40px",
          }}
        >
          <Image
            src={thumbnail!}
            alt="product-thumbnail"
            width={40}
            height={0}
            style={{ width: "100%", height: "100%" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "80%",
          }}
        >
          <div>
            {labelValues.map((lv) => (
              <KeyValue
                key={lv.label}
                label={`${lv.label}`}
                value={lv.value!}
                id={id!}
              />
            ))}
          </div>
          <IconButton aria-label="delete" onClick={handleRemove}>
            <DeleteIcon
              sx={{
                color: "warning.main",
              }}
            />
          </IconButton>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div className="flex items-center">
          <IconButton
            onClick={() => {
              if (newQuantity! > 1) {
                setNewQuantity(newQuantity! - 1);
                setSubTotal(price! * (newQuantity! - 1));
                setTotal((prev) => prev - price!);
              }
            }}
          >
            <MinusIcon
              sx={{
                color: "primary.main",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
          </IconButton>

          <input
            className="p-1 w-[40px] border border-gray-500 text-center font-normal focus:outline-none text-[#252B42]"
            value={newQuantity!}
            onChange={(e) => {
              if (isNaN(Number(e.target.value)) || Number(e.target.value) < 1)
                return;
              setNewQuantity(Number(e.target.value));
              setSubTotal(price! * Number(e.target.value));
              if (Number(e.target.value) > newQuantity!)
                setTotal(
                  (prev) =>
                    prev + (Number(e.target.value) - newQuantity!) * price!
                );
              else
                setTotal(
                  (prev) =>
                    prev - (newQuantity! - Number(e.target.value)) * price!
                );
            }}
          />
          <IconButton
            onClick={() => {
              setNewQuantity(newQuantity! + 1);
              setSubTotal(price! * (newQuantity! + 1));
              setTotal((prev) => prev + price!);
            }}
          >
            <AddIcon
              sx={{
                color: "primary.main",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            />
          </IconButton>
        </div>
        <KeyValue
          label="Total"
          value={formatCurrency(subTotal, "USD")}
          id={id!}
        />
      </Box>
      <Divider />
    </>
  );
}

function KeyValue({
  label,
  value,
  id,
}: {
  label: string;
  value: string | number;
  id?: number;
}) {
  return (
    <Link href={`/products/${id}`} className="flex items-center gap-2">
      <Typography
        sx={{
          fontSize: "14px",
          color: "text.primary",
          fontWeight: "bold",
        }}
      >
        {label}:{" "}
      </Typography>

      <Typography
        sx={{
          fontSize: "14px",
          color: "text.secondary",
        }}
      >
        {value}
      </Typography>
    </Link>
  );
}
