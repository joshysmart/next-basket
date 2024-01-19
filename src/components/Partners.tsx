import Box from "@mui/material/Box";
import partnerOne from "../assets/images/partner-one.png";
import partnerTwo from "../assets/images/partner-two.png";
import partnerThree from "../assets/images/partner-three.png";
import partnerFour from "../assets/images/partner-four.png";
import partnerFive from "../assets/images/partner-five.png";
import partnerSix from "../assets/images/partner-six.png";
import Image from "next/image";

export default function Partners() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row",
        },
        gap: {
          xs: "48px",
        },
        justifyContent: "space-between",
        alignItems: "center",
        py: {
          xs: "40px",
          lg: "54px",
        },
        px: {
          xs: "16px",
          lg: "140px",
        },

        backgroundColor: "#FAFAFA",
      }}
    >
      {partners.map((partner) => (
        <Image
          key={partner.src}
          width={partner.width}
          height={partner.height}
          style={{ height: "auto", width: "100px" }}
          src={partner.src}
          alt={"partners"}
        />
      ))}
    </Box>
  );
}

const partners = [
  partnerOne,
  partnerTwo,
  partnerThree,
  partnerFour,
  partnerFive,
  partnerSix,
];
