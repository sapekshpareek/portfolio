"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function HeroSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        width: "100%",
        height: "90vh",
        px: isMobile ? 2 : 10,
        py: 4,
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography>Hey, I am Sapeksh</Typography>
        <Typography>I create website for your business and brands!</Typography>
        <Typography>lorem</Typography>
      </Box>
      <Box>Hero Section 2</Box>
    </Box>
  );
}
