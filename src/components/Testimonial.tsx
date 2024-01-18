import { Box, Typography } from "@mui/material";
import Image from "next/image";
import userOne from "../assets/images/user-one.jpg";

export default function Testimonial() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        justifyContent: "space-between",
        gap: "32px",
        px: {
          xs: "16px",
          lg: "140px",
        },
        py: "80px",
      }}
    >
      <TestimonialCard />
      <PictureGrid />
    </Box>
  );
}

function TestimonialCard() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        alignItems: "center",
        justifyContent: "center",
        width: {
          xs: "100%",
          lg: "38%",
        },
      }}
    >
      <Typography
        component="h2"
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "primary.main",
        }}
      >
        What they say about us
      </Typography>
      <Image
        width={90}
        height={90}
        src={userOne}
        alt="avatar"
        className="rounded-full"
      />
    </Box>
  );
}

function PictureGrid() {
  return <Box>test</Box>;
}
