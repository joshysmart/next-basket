"use client";

import { Box, Typography } from "@mui/material";
import Link from "next/link";
import AppTheme from "./AppTheme";
import mediaBgCoverOne from "../assets/images/media bg-cover-one.png";
import mediaBgCoverTwo from "../assets/images/media bg-cover-two.png";
import mediaBgCoverThree from "../assets/images/media bg-cover-three.png";
import mediaBgCoverFour from "../assets/images/media bg-cover-four.png";
import { StaticImageData } from "next/image";

export default function Hero() {
  return (
    <AppTheme>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: "16px",
          px: {
            xs: "16px",
            lg: "140px",
          },
          height: {
            lg: "616px",
          },
          mt: {
            xs: "24px",
            lg: "68px",
          },
        }}
      >
        <Box
          sx={{
            width: {
              xs: "100%",
              lg: "40%",
            },
          }}
        >
          <HeroProduct
            amount={20}
            name="Bathroom"
            fz="40px"
            bgImage={mediaBgCoverOne}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            width: {
              xs: "100%",
              lg: "60%",
            },
          }}
        >
          <Box
            sx={{
              height: {
                lg: "50%",
              },
            }}
          >
            <HeroProduct
              amount={20}
              name="FURNITURE"
              bgImage={mediaBgCoverTwo}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: {
                xs: "column",
                lg: "row",
              },
              gap: "16px",
              height: {
                lg: "50%",
              },
            }}
          >
            <HeroProduct
              amount={20}
              name="FURNITURE"
              bgImage={mediaBgCoverThree}
            />
            <HeroProduct
              amount={20}
              name="FURNITURE"
              bgImage={mediaBgCoverFour}
            />
          </Box>
        </Box>
      </Box>
    </AppTheme>
  );
}

interface IHeroProduct {
  amount: number;
  name: string;
  fz?: string;
  bgImage: StaticImageData;
}

function HeroProduct({ amount, name, fz, bgImage }: IHeroProduct) {
  return (
    <Box
      sx={{
        width: "100%",
        height: {
          xs: "330px",
          lg: "100%",
        },
        backgroundImage: `url('${bgImage.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "24px",
      }}
    >
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "bold",
          color: "success.main",
        }}
      >
        {amount} items
      </Typography>
      <Typography
        sx={{
          fontSize: fz || "24px",
          fontWeight: "bold",
          color: "text.primary",
          textTransform: "uppercase",
        }}
        component="h3"
      >
        {name}
      </Typography>
      <Link href="" className="text-[#252B42] text-xs font-bold">
        Read More
      </Link>
    </Box>
  );
}
