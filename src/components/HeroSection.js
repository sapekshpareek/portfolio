"use client";

import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.background.default,
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
      <Box sx={{ width: isMobile ? "100%" : "50%" }}>
        <Typography
          variant="h6"
          fontWeight={600}
          sx={{ color: theme.palette.text.headings, mb: 1 }}
        >
          Hey, I am Sapeksh
        </Typography>

        <Typography
          variant={isMobile ? "h3" : "h2"}
          fontWeight={700}
          sx={{ color: theme.palette.text.headings, mb: 2 }}
        >
          I create{" "}
          <Box component="span" sx={{ color: theme.palette.secondary.main }}>
            websites
          </Box>{" "}
          for your businesses!
        </Typography>

        <Typography
          variant="h6"
          fontWeight={500}
          sx={{ color: theme.palette.text.secondary, mb: 4 }}
        >
          Helping brands grow online through clean design and powerful tech.
        </Typography>
        <Button
          variant="contained"
          sx={{
            p:2,
            background: theme.palette.secondary.main,
          }}>
            <Typography variant="button">Get In Touch</Typography></Button>
      </Box>

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
    </Box>
  );
}
