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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="nav"
      sx={{
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        px: isMobile ? 2 : 10,
        py: 2,
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Logo on left */}
      <Typography
        variant="h6"
        fontWeight={700}
        color={theme.palette.text.primary}
      >
        Logo
      </Typography>

      {/* Menu links - hidden on mobile */}
      {!isMobile && (
        <Box sx={{ display: "flex", gap: 6 }}>
          <Typography sx={{ color: theme.palette.text.primary }}>Home</Typography>
          <Typography sx={{ color: theme.palette.text.primary }}>About</Typography>
          <Typography sx={{ color: theme.palette.text.primary }}>Contact</Typography>
        </Box>
      )}

      {/* Mode switch on right */}
      <Button
        variant="outlined"
        onClick={toggleColorMode}
        sx={{
          ml: isMobile ? "auto" : 0,
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
          fontWeight: 500,
          textTransform: "none",
        }}
      >
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </Box>
  );
}
