"use client";

import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import React from "react";

import AppTheme from "./AppTheme";
import Link from "next/link";
import { Button } from "@mui/material";

export default function Header() {
  const [open, setOpen] = React.useState(false);
  const isLoggedIn = false;
  return (
    <AppTheme>
      <Box
        sx={{
          display: {
            xs: "none",
            lg: "flex",
          },
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          bgcolor: "secondary.main",
          color: "primary.light",
          py: 3,
          px: 4,
          fontWeight: "bold",
          fontSize: "14px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "4px",
            }}
          >
            <CallOutlinedIcon />
            <Typography>(225) 555-0118</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: "4px",
            }}
          >
            <EmailOutlinedIcon />
            <Typography>michelle.rivera@example.com</Typography>
          </Box>
        </Box>
        <Typography>Follow Us and get a chance to win 80% off</Typography>
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <Typography>Follow Us :</Typography>
          <InstagramIcon />
          <YouTubeIcon />
          <FacebookIcon />
          <TwitterIcon />
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 4,
            py: 3,
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "120px",
            }}
          >
            <Typography
              sx={{
                fontSize: "24px",
                fontWeight: "bold",
                color: "text.main",
              }}
            >
              Bandage
            </Typography>

            <Box
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
                alignItems: "center",
                gap: "16px",
                fontSize: "14px",
                fontWeight: "bold",
              }}
            >
              <Link href="">Home</Link>
              <Link href="" className="flex items-center gap-2">
                Shop <ExpandMoreIcon />
              </Link>
              <Link href="">About</Link>
              <Link href="">Blog</Link>
              <Link href="">Contact</Link>
              <Link href="">Pages</Link>
            </Box>
          </Box>
          <Box
            sx={{
              display: {
                xs: "none",
                lg: "flex",
              },
              alignItems: "center",
              gap: "32px",
              fontSize: "14px",
              fontWeight: "bold",
              color: "primary.main",
            }}
          >
            <Link href={"/login"} className="flex items-center gap-2">
              <PersonOutlineOutlinedIcon />
              <Typography>
                {!isLoggedIn ? "Login / Register" : "Logout"}
              </Typography>
            </Link>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "32px",
              }}
            >
              <IconButton
                sx={{
                  padding: "0px",
                  color: "primary.main",
                }}
              >
                <SearchIcon />
              </IconButton>
              <IconButton
                sx={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  padding: "0px",
                  color: "primary.main",
                }}
              >
                <ShoppingCartOutlinedIcon />2
              </IconButton>
              <IconButton
                sx={{
                  fontSize: "12px",
                  fontWeight: "normal",
                  padding: "0px",
                  color: "primary.main",
                }}
              >
                <FavoriteBorderOutlinedIcon />1
              </IconButton>
            </Box>
          </Box>
          <Box
            sx={{
              display: {
                xs: "flex",
                lg: "none",
              },
              alignItems: "center",
              gap: "24px",
            }}
          >
            {!open && (
              <IconButton sx={{ p: 0 }}>
                <SearchIcon />
              </IconButton>
            )}
            {!open && (
              <IconButton
                sx={{
                  p: 0,
                }}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
            )}
            <IconButton
              aria-label="menu"
              onClick={() => setOpen((prev) => !prev)}
              sx={{
                p: 0,
              }}
            >
              {open ? <MenuOpenIcon /> : <MenuIcon />}
            </IconButton>
          </Box>
        </Box>
        {open && (
          <Box
            sx={{
              display: {
                xs: "flex",
                lg: "none",
              },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "32px",
            }}
          >
            <Link href="">Home</Link>
            <Link href="" className="flex items-center gap-2">
              Shop <ExpandMoreIcon />
            </Link>
            <Link href="">About</Link>
            <Link href="">Blog</Link>
            <Link href="">Contact</Link>
            <Link href="">Pages</Link>
            <Box
              sx={{
                color: "primary.main",
              }}
            >
              <Link href={"/login"} className="flex items-center gap-2 ">
                <PersonOutlineOutlinedIcon />
                <Typography>
                  {!isLoggedIn ? "Login / Register" : "Logout"}
                </Typography>
              </Link>
            </Box>
            <IconButton
              sx={{
                padding: "0px",
                color: "primary.main",
              }}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              sx={{
                fontSize: "12px",
                fontWeight: "normal",
                padding: "0px",
                color: "primary.main",
              }}
            >
              <ShoppingCartOutlinedIcon />2
            </IconButton>
            <IconButton
              sx={{
                fontSize: "12px",
                fontWeight: "normal",
                padding: "0px",
                color: "primary.main",
              }}
            >
              <FavoriteBorderOutlinedIcon />1
            </IconButton>
          </Box>
        )}
      </Box>
    </AppTheme>
  );
}
