"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

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
      <Box sx={{ width: isMobile ? "100%" : "45%" }}>
        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.headings, mb: 1 }}
        >
          Hey, I am Sapeksh
        </Typography>

        <Typography
          variant={isMobile ? "h4" : "h3"}
          fontWeight={700}
          sx={{ color: theme.palette.text.headings, mb: 2 }}
        >
          I create{" "}
          <Box component="span" sx={{ color: theme.palette.secondary.main }}>
            websites
          </Box>{" "}
          for your business and brands!
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: theme.palette.text.secondary }}
        >
          Helping brands grow online through clean design and powerful tech.
        </Typography>
      </Box>

      {/* Right Visual Section */}
      <Box
        sx={{
          width: isMobile ? "100%" : "55%",
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
