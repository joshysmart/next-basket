import { SvgIconComponent } from "@mui/icons-material";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import TrendingUpOutlinedIcon from "@mui/icons-material/TrendingUpOutlined";
import { Box, Typography } from "@mui/material";

export default function Services() {
  return (
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
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "20px",
            display: {
              xs: "none",
              lg: "block",
            },
            color: "text.secondary",
          }}
        >
          Featured Products
        </Typography>
        <Typography
          sx={{
            fontSize: "24px",
            color: "text.main",
            fontWeight: "bold",
          }}
          component={"h3"}
        >
          THE BEST SERVICES
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            color: "text.secondary",
          }}
        >
          Problems trying to resolve the conflict between{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          alignItems: "center",
          justifyContent: "space-around",
          gap: {
            xs: "100px",
            lg: "16px",
          },
          mt: "64px",
        }}
      >
        {services.map((service) => (
          <Service
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </Box>
    </Box>
  );
}

function Service({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: JSX.Element;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "16px",
        maxWidth: "230px",
      }}
    >
      {icon}
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "bold",
          color: "text.main",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontSize: "14px",
          color: "text.secondary",
          textAlign: "center",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}

const services = [
  {
    title: "Easy Wins",
    description: "Get your best looking smile now!",
    icon: (
      <LocalLibraryIcon
        sx={{
          color: "primary.main",
          fontSize: "72px",
        }}
      />
    ),
  },
  {
    title: "Concrete",
    description:
      "Defalcate is most focused in helping you discover your most beautiful smile",
    icon: (
      <MenuBookOutlinedIcon
        sx={{
          color: "primary.main",
          fontSize: "72px",
        }}
      />
    ),
  },
  {
    title: "Hack Growth",
    description: "Overcame any hurdle or any other problem.",
    icon: (
      <TrendingUpOutlinedIcon
        sx={{
          color: "primary.main",
          fontSize: "72px",
        }}
      />
    ),
  },
];
