// src/components/ExperienceCard.js
"use client";

import { Box, Card, CardActionArea, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function ExperienceCard({ logo, role, duration, description, link }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Card
      elevation={3}
      sx={{
        mb: 3,
        borderRadius: 3,
        width: "100%",
        maxWidth: "900px",
        mx: "auto",
        background: theme.palette.background.default,
      }}
    >
      <CardActionArea
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: isMobile ? "flex-start" : "center",
          gap: 3,
          p: 3,
        }}
      >
        {/* Square logo */}
        <Box
          component="img"
          src={logo}
          alt="Company Logo"
          sx={{
            width: 64,
            height: 64,
            objectFit: "cover",
            borderRadius: 2,
          }}
        />

        <Box>
          <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5 }}>
            {role}
          </Typography>
          <Typography
            variant="body2"
            sx={{ mb: 1, color: theme.palette.text.secondary }}
          >
            {duration}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: theme.palette.text.primary }}
          >
            {description}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}
