// src/components/ClientFeedback.js
"use client";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ClientFeedbackCard from "./shared/ClientFeedbackCard";

const feedbacks = [
  {
    rating: 5,
    description:
      "Sapeksh was excellent to work with—he delivered a great UI experience and the codebase was well-structured.",
    name: "Ananya Sharma",
    role: "Marketing Head, Zenith Corp",
    avatar: "/avatar1.jpg",
  },
  {
    rating: 4,
    description:
      "Quick delivery, and the site worked flawlessly on mobile and desktop. Will hire again!",
    name: "Rohit Jain",
    role: "Founder, UrbanEdge",
    avatar: "/avatar2.jpg",
  },
  {
    rating: 5,
    description:
      "Very professional and responsive. Understood the requirements perfectly and delivered a great product.",
    name: "Meera Patel",
    role: "Product Manager, CodeVerse",
    avatar: "/avatar3.jpg",
  },
];

export default function ClientFeedback() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
    id="clientfeedback"
      sx={{
        background: theme.palette.background.default,
        py: 6,
        width: "100%",
        px: isMobile ? 2 : 10,
      }}
    >
      <Typography
        variant="h3"
        fontWeight={600}
        mb={6}
        color={theme.palette.text.headings || theme.palette.text.primary}
        textAlign="center"
      >
        Client Feedback
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {feedbacks.map((feedback, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ClientFeedbackCard feedback={feedback} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
