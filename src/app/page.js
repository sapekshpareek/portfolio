"use client";
import HeroSection from "@/components/HeroSection";
import MyServices from "@/components/MyServices";
import { Box, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();

  return (
    // <Container>
      <Box
        sx={{
          backgroundColor: theme.palette.background.paper,
          width: "100%",
          minHeight: "90vh",
        }}
      >
        <HeroSection />
        <MyServices />
      </Box>
    // </Container>
  );
}
