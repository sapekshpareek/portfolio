"use client";

import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

export default function AppointmentPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        minHeight: "100vh",
        px: isMobile ? 2 : 10,
        py: 6,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        textAlign: "center",
      }}
    >
      <Typography
        variant={isMobile ? "h4" : "h3"}
        fontWeight={700}
        mb={2}
        color={theme.palette.text.headings || theme.palette.text.primary}
      >
        Book an Appointment
      </Typography>

      <Typography
        variant="body1"
        mb={4}
        color={theme.palette.text.secondary}
        maxWidth={600}
      >
        Schedule a personalized consultation directly on my calendar. Choose a time that works best for you and let's connect!
      </Typography>

      {/* Embed Google Calendar Appointment iframe */}
      <Box sx={{ width: "100%" }}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/AcZssZ10oEqUOD7JnrfueFFzZjZ5KtyLp0G45cKwYlw=?gv=true"
          style={{
            border: 0,
            width: "100%",
            height: "1000px",
          }}
          frameBorder="0"
          title="Google Calendar Appointment Booking"
        ></iframe>
      </Box>
    </Box>
  );
}
