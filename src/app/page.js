"use client";
import { Box, useTheme } from "@mui/material";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        minHeight: "90vh",
        width: "100vw",
        pr: 10,
        pl: 10
      }}
    >
      Body
    </Box>
  );
}
