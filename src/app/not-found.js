"use client";

import { Box, Button, Typography, useTheme } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
    const theme = useTheme();
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        px: 3,
      }}
    >
      <Typography variant="h1" fontWeight={700} fontSize={{ xs: 80, sm: 120 }}>
        404
      </Typography>
      <Typography variant="h5" mb={2}>
        Oops! Page not found.
      </Typography>
      <Typography variant="body1" mb={4} color="text.secondary">
        The page you are looking for might have been removed or doesn’t exist.
      </Typography>

      <Button
        variant="contained"
        component={Link}
        href="/"
        color="secondary"
        sx={{ px: 4, py: 2, borderColor: theme.palette.secondary.main }}
      >
        Go Home
      </Button>
    </Box>
  );
}
