// src/components/Navbar.js
"use client"; // ensure client-side for hooks

import { Box, Button, Typography, useTheme } from "@mui/material"; // import useTheme!

export default function Navbar({ toggleColorMode, mode }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        // p: 2,
        pt: 2,
        pb: 2,
        pr:10,
        pl: 10,
        alignItems: "center",
      }}
    >
      <Box>
        <Typography sx={{ color: theme.palette.text.primary }}>
           Logo
        </Typography>
      </Box>
      <Box sx={{ display: "flex", gap: 6 }}>
        <Typography sx={{ color: theme.palette.text.primary }}>
          Home
        </Typography>
        <Typography sx={{ color: theme.palette.text.primary }}>
          About
        </Typography>
        <Typography sx={{ color: theme.palette.text.primary }}>
          Contact
        </Typography>
      </Box>
      <Box>
        <Button
          onClick={toggleColorMode}
          sx={{ color: theme.palette.text.primary }}
        >
          {mode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </Box>
    </Box>
  );
}
