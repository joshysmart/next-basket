import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AccessAlarmOutlinedIcon from "@mui/icons-material/AccessAlarmOutlined";
import TimelineIcon from "@mui/icons-material/Timeline";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Image, { StaticImageData } from "next/image";
import featuredPostOne from "../assets/images/featured-one.webp";
import featuredPostTwo from "../assets/images/featured-two.webp";
import featuredPostThree from "../assets/images/featured-three.webp";

export default function FeaturedPosts() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "32px",
        py: {
          xs: "80px",
          lg: "112px",
        },
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
            fontSize: "14px",
            fontWeight: "bold",
            color: "primary.main",
          }}
        >
          Practice Advice
        </Typography>
        <Typography
          sx={{
            fontSize: "40px",
            color: "text.main",
            fontWeight: "bold",
            maxWidth: {
              xs: "240px",
              lg: "100%",
            },
            textAlign: "center",
            lineHeight: "1.2",
          }}
          component={"h3"}
        >
          Featured Posts
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: {
            xs: "column",
            lg: "row",
          },
          gap: {
            xs: "32px",
            lg: "16px",
          },
        }}
      >
        {posts.map((post) => (
          <PostCard
            comments={post.comments}
            date={post.date}
            description={post.description}
            image={post.image}
            title={post.title}
            key={post.title}
          />
        ))}
      </Box>
    </Box>
  );
}

interface IPostCardProps {
  title: string;
  description: string;
  date: string;
  comments: number;
  image: StaticImageData;
}

function PostCard({
  title,
  description,
  date,
  comments,
  image,
}: IPostCardProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.10)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "300px",
        }}
      >
        <Image
          src={image}
          alt="post"
          width={200}
          height={0}
          style={{ width: "100%", height: "100%" }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          padding: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            gap: "16px",
            alignItems: "center",
            fontSize: "12px",
            color: "text.secondary",
          }}
        >
          <Typography
            sx={{
              color: "primary.main",
            }}
          >
            Google
          </Typography>
          <Typography>Trending</Typography>
          <Typography>New</Typography>
        </Box>
        <Typography
          sx={{
            fontSize: "20px",
            color: "text.main",
            maxWidth: "250px",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "14px",
            maxWidth: "280px",
            color: "text.secondary",
          }}
        >
          {description}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "16px",
          }}
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              color: "text.secondary",
            }}
          >
            <AccessAlarmOutlinedIcon
              sx={{
                color: "primary.main",
                fontSize: "16px",
              }}
            />{" "}
            {date}
          </Typography>
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              fontSize: "12px",
              color: "text.secondary",
            }}
          >
            <TimelineIcon
              sx={{
                color: "success.main",
                fontSize: "16px",
              }}
            />
            {comments} {comments > 1 ? "comments" : "comment"}
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{
              fontSize: "14px",
              fontWeight: "bold",
              textTransform: "capitalize",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "text.secondary",
            }}
          >
            Learn More
            <ArrowForwardIosIcon
              sx={{
                color: "primary.main",
                fontSize: "16px",
              }}
            />
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

const posts: IPostCardProps[] = [
  {
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 2,
    image: featuredPostOne,
  },
  {
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 12,
    image: featuredPostTwo,
  },
  {
    title: "Loudest à la Madison #1 (L'integral)",
    description:
      "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    date: "22 April 2021",
    comments: 10,
    image: featuredPostThree,
  },
];
