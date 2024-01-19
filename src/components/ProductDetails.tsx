"use client";

import { useGetProductQuery } from "@/redux/services/product";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Divider from "@mui/material/Divider";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Rating from "@mui/material/Rating";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";
import additionalInfoOne from "../assets/images/additional-info-one.webp";
import { useAppDispatch, useAppSelector } from "@/redux/app/hook";
import { RootState } from "@/redux/app/store";
import { addToCart } from "@/redux/features/cart/cartSlice";
import { addToWishList } from "@/redux/features/wish/wishSlice";
import Link from "next/link";

interface IProductId {
  productId: string;
}
export default function ProductDetails({ productId }: IProductId) {
  const { data: product, isLoading: productLoading } =
    useGetProductQuery(productId);
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("Success");

  const handleClose = (
    _event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "32px",
          pb: "80px",
          px: {
            xs: "16px",
            lg: "140px",
          },
        }}
      >
        <Box
          sx={{
            py: "24px",
          }}
        >
          <BreadCrumbs />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row",
            },
            gap: "32px",
          }}
        >
          {productLoading ? (
            <CircularProgress color="primary" />
          ) : (
            <>
              <ProductThumbnails images={product?.images} />
              <ProductDetail
                price={product?.price}
                rating={product?.rating || 0}
                title={product?.title}
                stock={product?.stock}
                thumbnail={product?.thumbnail}
                setOpen={setOpen}
                setMessage={setMessage}
                id={product?.id}
              />
            </>
          )}
        </Box>
        <ProductInfo description={product?.description} />
      </Box>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={6000}
        open={open}
        onClose={handleClose}
        message={message}
        key={"bottomright"}
        ContentProps={{
          sx: {
            background: "#23856D",
          },
        }}
      />
    </>
  );
}

function BreadCrumbs() {
  const breadcrumbs = [
    <Link color="inherit" href="/" key="1">
      Home
    </Link>,
    <Typography key="3" color="text.primary">
      Shop
    </Typography>,
  ];

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs}
      </Breadcrumbs>
    </Stack>
  );
}

function ProductThumbnails({ images }: { images?: string[] }) {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  return (
    <main className="lg:w-[44%] flex flex-col gap-4">
      <Swiper
        style={{
          // @ts-ignore
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="lg:h-[450px] h-[280px]"
      >
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={image}
              width={520}
              height={0}
              style={{ width: "100%", height: "100%" }}
              alt="product image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // @ts-ignore
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="h-[75px] w-[100px]"
      >
        {images?.map((image) => (
          <SwiperSlide key={image}>
            <Image
              src={image}
              width={100}
              height={0}
              style={{ width: "100%", height: "100%" }}
              alt="product image"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}

interface IProductDetail {
  title?: string;
  rating: number;
  price?: number;
  stock?: number;
  id?: number;
  thumbnail?: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}
function ProductDetail({
  title,
  rating,
  price,
  stock,
  id,
  thumbnail,
  setOpen,
  setMessage,
}: IProductDetail) {
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state: RootState) => state.cart.items);
  const wishList = useAppSelector((state: RootState) => state.wish.items);
  const disableCart = cartItems.some((item) => item.id === id);
  const disableWishList = wishList.some((item) => item.id === id);

  function handleCart() {
    if (!id || !title || !price || !thumbnail) return;
    dispatch(addToCart({ id, title, price, quantity: 1, thumbnail }));
    setOpen(true);
    setMessage("Added to cart");
  }

  function handleWishList() {
    if (!id || !title || !price || !thumbnail) return;
    dispatch(addToWishList({ id, title, price, thumbnail, quantity: 1 }));
    setOpen(true);
    setMessage("Added to wishlist");
  }

  return (
    <Box
      sx={{
        padding: {
          lg: "24px",
        },
        width: {
          xs: "100%",
          lg: "44%",
        },
      }}
    >
      <Typography
        sx={{
          fontSize: "20px",
          color: "text.main",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Rating value={rating} precision={0.5} readOnly />
        <Typography
          sx={{
            fontSize: "14px",
            color: "text.secondary",
            fontWeight: "bold",
          }}
        >
          {rating} Reviews
        </Typography>
      </Box>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "text.main",
          mt: "16px",
        }}
      >
        {price?.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            color: "text.secondary",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          Availability:
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: stock ? "primary.main" : "error.main",
            fontWeight: "bold",
          }}
        >
          {stock ? "In Stock" : "Out of Stock"}
        </Typography>
      </Box>
      <Divider
        sx={{
          mt: {
            width: "100%",
            xs: "8px",
            lg: "120px",
          },
        }}
      />
      <Box
        sx={{
          mt: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        {["#252B42", "#E77C40", "#2DC071", "#23A6F0"].map((color) => (
          <Box
            key={color}
            sx={{
              width: "32px",
              height: "32px",
              borderRadius: "50%",
              backgroundColor: color,
            }}
          />
        ))}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          mt: {
            xs: "48px",
            lg: "64px",
          },
        }}
      >
        <Button
          variant="contained"
          sx={{
            padding: "16px 24px",
            fontSize: "14px",
          }}
          className="bg-[#23A6F0] text-white"
        >
          Select Options
        </Button>
        <IconButton
          sx={{
            border: "1px solid #E8E8E8",
            borderRadius: "50%",
          }}
          onClick={handleWishList}
          disabled={disableWishList}
        >
          <FavoriteBorderOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            border: "1px solid #E8E8E8",
            borderRadius: "50%",
          }}
          disabled={disableCart}
          onClick={handleCart}
        >
          <ShoppingCartOutlinedIcon />
        </IconButton>
        <IconButton
          sx={{
            border: "1px solid #E8E8E8",
            borderRadius: "50%",
          }}
        >
          <VisibilityIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

type TTabs = "description" | "additional information" | "reviews";
function ProductInfo({ description }: { description?: string }) {
  const [value, setValue] = React.useState(0);
  const tabs = ["description", "additional information", "reviews"] as TTabs[];

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        mt: "24px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs"
        >
          {tabs.map((tab) => (
            <Tab key={tab} label={tab} />
          ))}
        </Tabs>
      </Box>
      {value === 0 && <Description description={description} />}
      {value === 1 && <Reviews />}
      {value === 2 && <Reviews />}
    </Box>
  );
}

function Description({ description }: { description?: string }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        alignItems: "center",
        gap: "32px",
        justifyContent: "space-between",
        mt: "32px",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "50%",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "text.main",
            textTransform: "capitalize",
          }}
        >
          the quick fox jumps over{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "text.secondary",
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "45%",
          },
        }}
      >
        <Image
          width={400}
          height={0}
          style={{ width: "100%", height: "100%" }}
          src={additionalInfoOne.src}
          alt="info"
        />
      </Box>
    </Box>
  );
}

function Reviews() {
  return (
    <Box
      sx={{
        display: "flex",
        mt: "32px",

        flexDirection: {
          xs: "column",
          lg: "row",
        },
        alignItems: "center",
        gap: "32px",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "50%",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            color: "text.main",
            textTransform: "capitalize",
          }}
        >
          the quick fox jumps over{" "}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "text.secondary",
            borderLeft: "2px solid #23856D",
            pl: "16px",
          }}
        >
          Met minim Mollie non desert Alamo est sit cliquey dolor do met sent.
          RELIT official consequent door ENIM RELIT Mollie. Excitation venial
          consequent sent nostrum met.
        </Typography>
      </Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            lg: "45%",
          },
        }}
      >
        <Image
          width={400}
          height={0}
          style={{ width: "100%", height: "100%" }}
          src={additionalInfoOne.src}
          alt="info"
        />
      </Box>
    </Box>
  );
}
