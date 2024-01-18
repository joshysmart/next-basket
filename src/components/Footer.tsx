import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <Box
      sx={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: {
            xs: "26px",
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

          borderBottom: "1px solid #E6E6E6",
          backgroundColor: "#FAFAFA",
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
            display: "flex",
            alignItems: "center",
            gap: "26px",
            color: "primary.main",
          }}
        >
          <FacebookIcon />
          <InstagramIcon />
          <TwitterIcon />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: {
            xs: "32px",
          },
          justifyContent: "space-between",
          py: {
            xs: "90px",
            lg: "50px",
          },
          px: {
            xs: "16px",
            lg: "140px",
          },
        }}
      >
        {footerLinks.map((category) => (
          <FooterLink key={category.title} category={category} />
        ))}
        <Box
          sx={{
            width: {
              lg: "321px",
              xs: "100%",
            },
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              fontWeight: "bold",
              color: "text.primary",
              mb: "10px",
            }}
            component="h4"
          >
            Get In Touch
          </Typography>
          <form action="">
            <fieldset className="flex">
              <input
                type="text"
                name=""
                id=""
                className="border border-[#E6E6E6] rounded-[4px_0_0_4px] py-4 px-4 text-sm text-[#737373]"
                placeholder="Your Email"
              />
              <button className="px-6 py-4 bg-[#23A6F0] text-white text-sm rounded-[0_4px_4px_0]">
                Subscribe
              </button>
            </fieldset>
            <Typography
              sx={{
                fontSize: "12px",
                color: "text.secondary",
              }}
            >
              Lore imp sum dolor Amit
            </Typography>
          </form>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: "24px",
          backgroundColor: "#FAFAFA",
          color: "text.secondary",
          px: {
            xs: "16px",
            lg: "140px",
          },
        }}
      >
        <Typography
          sx={{
            width: {
              lg: "100%",
              xs: "190px",
            },
            textAlign: {
              xs: "center",
              lg: "left",
              fontSize: "14px",
              fontWeight: "bold",
            },
          }}
        >
          Made With Love By Finland All Right Reserved{" "}
        </Typography>
      </Box>
    </Box>
  );
}

interface IFooteLinks {
  category: {
    title: string;
    options: string[];
  };
}

function FooterLink({ category }: IFooteLinks) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <Typography
        sx={{
          fontSize: "16px",
          fontWeight: "bold",
          color: "text.primary",
          mb: "10px",
        }}
        component="h4"
      >
        {category.title}
      </Typography>

      {category.options.map((option) => (
        <Typography
          key={option}
          sx={{
            fontSize: "14px",
            fontWeight: "bold",
            color: "text.secondary",
          }}
        >
          {option}
        </Typography>
      ))}
    </Box>
  );
}

const footerLinks = [
  {
    title: "Company Info",
    options: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Legal",
    options: ["About Us", "Carrier", "We are hiring", "Blog"],
  },
  {
    title: "Features",
    options: [
      "Business Marketing",
      "User Analytic",
      "Live Chat",
      "Unlimited Support",
    ],
  },
  {
    title: "Resources",
    options: ["IOS & Android", "Watch a Demo", "Customers", "API"],
  },
];
