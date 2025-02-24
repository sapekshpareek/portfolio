// src/components/shared/ClientFeedbackCard.js
"use client";
import { Avatar, Box, Paper, Rating, Typography, useTheme } from "@mui/material";

export default function ClientFeedbackCard({ feedback }) {
  const theme = useTheme();
  const borderColor = theme.palette.secondary.main;

  return (
    <Paper
      elevation={0}
      sx={{
        border: `1px solid ${borderColor}`,
        borderRadius: 3,
        p: 3,
        height: "100%",
        maxWidth: 360,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: theme.palette.background.default,
      }}
    >
      {/* Star Rating */}
      <Rating
        value={feedback.rating}
        readOnly
        size="small"
        sx={{
          color: borderColor,
        }}
      />

      {/* Description */}
      <Typography
        variant="body2"
        sx={{ mt: 2, mb: 3, color: theme.palette.text.secondary }}
      >
        {feedback.description}
      </Typography>

      {/* Profile Info */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mt: "auto",
        }}
      >
        <Avatar src={feedback.avatar} alt={feedback.name} />
        <Box>
          <Typography fontWeight={600}>{feedback.name}</Typography>
          <Typography variant="caption" color="text.secondary">
            {feedback.role}
          </Typography>
        </Box>
      </Box>
    </Paper>
  );
}
