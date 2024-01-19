import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import userOne from "../assets/images/user-one.jpg";
import testimonialOne from "../assets/images/about-one.png";
import testimonialTwo from "../assets/images/about-two.png";
import testimonialThree from "../assets/images/about-three.png";
import testimonialFour from "../assets/images/about-four.png";
import testimonialFive from "../assets/images/about-five.png";
import testimonialSix from "../assets/images/about-six.png";
import testimonialSeven from "../assets/images/about-seven.png";
import testimonialEight from "../assets/images/about-eight.png";
import testimonialNine from "../assets/images/about-nine.png";

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
          lg: "180px",
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
          textAlign: "center",
          color: "text.main",
          maxWidth: {
            xs: "181px",
            lg: "100%",
          },
        }}
      >
        What they say about us
      </Typography>
      <Image
        width={90}
        height={90}
        src={userOne}
        alt="avatar"
        className="rounded-full mt-8"
      />
      <Rating defaultValue={3.5} precision={0.5} readOnly />
      <Typography
        sx={{
          fontSize: "14px",
          color: "text.secondary",
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        Slate helps you see how many more days you need to work to reach your
        financial goal.
      </Typography>
      <Box>
        <Typography
          sx={{
            fontSize: "14px",
            color: "primary.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Regina Miles
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "text.main",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Designer
        </Typography>
      </Box>
    </Box>
  );
}

function PictureGrid() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "16px",
        width: {
          xs: "100%",
          lg: "40%",
        },
      }}
    >
      {pictures.map((picture) => (
        <Box key={picture.src}>
          <Image
            src={picture.src}
            width={150}
            height={0}
            style={{ width: "100%", height: "100%" }}
            alt="testimonial"
          />
        </Box>
      ))}
    </Box>
  );
}

const pictures = [
  testimonialOne,
  testimonialTwo,
  testimonialThree,
  testimonialFour,
  testimonialFive,
  testimonialSix,
  testimonialSeven,
  testimonialEight,
  testimonialNine,
];
