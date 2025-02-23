"use client";
import AboutMe from "@/components/AboutMe";
import HeroSection from "@/components/HeroSection";
import MyExperience from "@/components/MyExperiences";
import MyServices from "@/components/MyServices";
import Projects from "@/components/Projects";
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
        <AboutMe />
        <Projects />  
        <MyExperience />
      </Box>
    // </Container>
  );
}
