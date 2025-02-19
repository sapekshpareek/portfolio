// src/components/Navbar.js
"use client"; // ensure client-side for hooks

import { Box, Button, Typography, useTheme } from "@mui/material"; // import useTheme!

export default function Navbar({ toggleColorMode, mode }) {
  const theme = useTheme(); // ✅ Grab the theme object

  return (
    <Box
      sx={{
        background: theme.palette.secondary.light, // now defined
        display: "flex",
        justifyContent: "space-between",
        width: "100vw",
        p: 2,
      }}
    >
      <Box>
        <Typography sx={{ color: theme.palette.primary.contrastText }}>
          Brand Logo
        </Typography>
      </Box>
      {/* Example toggle button; adjust as needed */}
      <Box>
        <Button
          onClick={toggleColorMode}
          sx={{ color: theme.palette.common.white }}
        >
          {mode === "dark" ? "Light Mode" : "Dark Mode"}
        </Button>
      </Box>
    </Box>
  );
}
