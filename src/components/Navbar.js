// src/components/Navbar.js
"use client";

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function Navbar({ toggleColorMode, mode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // small screens

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        px: isMobile ? 2 : 10,
        py: 2,
        boxShadow: "0px 4px 60px rgba(0, 0, 0, 0.1)",  
        zIndex: 10,
        position: "relative",
      }}
    >
      <Box>
        <Typography sx={{ color: theme.palette.text.primary, fontWeight: 600 }}>
          Logo
        </Typography>
      </Box>
      <Box
        sx={{
          display: isMobile ? "none" : "flex",
          gap: 6,
        }}
      >
        <Typography sx={{ color: theme.palette.text.primary }}>Home</Typography>
        <Typography sx={{ color: theme.palette.text.primary }}>
          About
        </Typography>
        <Typography sx={{ color: theme.palette.text.primary }}>
          Contact
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Button
          variant="outlined"
          onClick={toggleColorMode}
          sx={{
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
          }}
        >
          {mode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </Box>
    </Box>
  );
}
