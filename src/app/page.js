"use client";
import HeroSection from "@/components/HeroSection";
import { Box, useMediaQuery, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        minHeight: "90vh",
        width: "100%",
        // px: isMobile ? 2 : 10,
        // py: 2,
      }}
    >
      <HeroSection />
    </Box>
  );
}
