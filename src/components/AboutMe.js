"use client";

import {
  Box,
  Typography,
  useMediaQuery,
  useTheme
} from "@mui/material";

export default function AboutMe() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
    id="aboutme"
      sx={{
        backgroundColor: theme.palette.background.paper,
        width: "100%",
        minHeight: "92vh",
        px: isMobile ? 2 : 10,
        // py: 4,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        alignItems: "center",
        justifyContent: isMobile ? "space-around" : "",
        // gap: 6,
      }}
    >
      {/* Left Text Section */}

      {/* Right Visual Section */}
      <Box
        sx={{
          width: isMobile ? "100%" : "50%",
          textAlign: "center",
        }}
      >
        <img
          src="/Portfolio Website.png"
          alt="Hero Image"
          style={{ width: "100%", height: "auto" }}
        />
      </Box>
      <Box sx={{ width: isMobile ? "100%" : "50%" }}>
        {/* <Typography
            variant="h6"
            fontWeight={600}
            sx={{ color: theme.palette.text.headings, mb: 1 }}
          >
            Hey, I am Sapeksh
          </Typography> */}

        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight={700}
          sx={{ color: theme.palette.text.headings, mb: 2 }}
        >
          About Me
        </Typography>

        <Typography
          variant="h6"
          fontWeight={500}
          sx={{ color: theme.palette.text.secondary, mb: 4 }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius
          faucibus massa sollicitudin amet augue. Nibh metus a semper purus
          mauris duis. Lorem eu neque, tristique quis duis. Nibh scelerisque ac
          adipiscing velit non nulla in amet pellentesque.
        </Typography>
      </Box>
    </Box>
  );
}
