"use client";
import { Box, Typography, useTheme } from "@mui/material";

export default function ServiceCard({ icon: Icon, title, description }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        borderRadius: 1,
        p: 4,
        // boxShadow: theme.shadows[3],
        textAlign: "center",
        transition: "transform 0.3s ease",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        maxWidth: 360, 
        // mx: "auto", 
        // "&:hover": {
        //   transform: "translateY(-5px)",
        //   boxShadow: theme.shadows[6],
        // },
      }}
    >
      <Icon sx={{ fontSize: 50, color: theme.palette.secondary.main, mb: 3 }} />
      <Typography variant="h5" fontWeight={600} gutterBottom mb={3}>
        {title}
      </Typography>
      <Typography
        variant="body2"
        color="text.secondary"
        sx={{
          overflowWrap: "break-word",
          textAlign: "justify",
        }}
      >
        {description}
      </Typography>
    </Box>
  );
}
