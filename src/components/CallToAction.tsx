"use client";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import cta from "../assets/images/cta-bg.png";
import ctaMobile from "../assets/images/cta-bg-two.png";

export default function CallToAction() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: {
          lg: `url(${cta.src})`,
          xs: `url(${ctaMobile.src})`,
        },
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        px: {
          xs: "16px",
          lg: "140px",
        },
        py: {
          xs: "80px",
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
          gap: "32px",
          width: {
            xs: "100%",
            lg: "50%",
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "14px",
            color: "primary.main",
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Designing Better Experience
        </Typography>
        <Typography
          sx={{
            fontSize: "40px",
            color: "text.main",
            fontWeight: "bold",
            textAlign: "center",
          }}
          component="h1"
        >
          Problems trying to resolve the conflict between
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column-reverse",
              lg: "column",
            },
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
          }}
        >
          <Typography
            sx={{
              fontSize: "14px",
              color: "text.secondary",
              textAlign: "center",
              maxWidth: {
                xs: "100%",
                lg: "450px",
              },
            }}
          >
            Problems trying to resolve the conflict between the two major realms
            of Classical physics:{" "}
          </Typography>
          <Typography
            sx={{
              fontSize: "24px",
              color: "success.main",
              fontWeight: "bold",
            }}
          >
            $16.48
          </Typography>
        </Box>

        <Button
          variant="contained"
          sx={{
            py: "16px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
          className="bg-[#23A6F0]"
        >
          ADD YOUR CALL TO ACTION
        </Button>
      </Box>
    </Box>
  );
}
