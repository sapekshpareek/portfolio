"use client";

import {
    Box,
    Fade,
    Paper,
    Typography,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";

export default function AppointmentSection() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scriptContainerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Inject stylesheet
    const link = document.createElement("link");
    link.href =
      "https://calendar.google.com/calendar/scheduling-button-script.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Inject script
    const script = document.createElement("script");
    script.src =
      "https://calendar.google.com/calendar/scheduling-button-script.js";
    script.async = true;
    script.onload = () => {
      if (window.calendar && scriptContainerRef.current) {
        window.calendar.schedulingButton.load({
          url: "https://calendar.google.com/calendar/appointments/AcZssZ10oEqUOD7JnrfueFFzZjZ5KtyLp0G45cKwYlw=?gv=true",
          color: "#5e3bee",
          label: "Book an Appointment",
          target: scriptContainerRef.current,
        });
        setLoaded(true);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        py: 8,
        px: isMobile ? 2 : 10,
        backgroundColor: theme.palette.background.paper,
      }}
    >
      <Typography
        variant="h3"
        fontWeight={600}
        textAlign="center"
        mb={4}
        color={theme.palette.text.headings || theme.palette.text.primary}
      >
        Book a Call
      </Typography>

      <Paper
        elevation={0}
        sx={{
          maxWidth: 600,
          margin: "0 auto",
          padding: isMobile ? 3 : 5,
          borderRadius: 3,
          border: `1px solid ${theme.palette.divider}`,
          background: theme.palette.background.default,
          textAlign: "center",
        }}
      >
        <Typography
          variant="body1"
          color={theme.palette.text.secondary}
          mb={3}
        >
          Let’s connect and talk about your next project. Schedule a meeting
          that works for you using the button below.
        </Typography>

        <Fade in={loaded}>
          <Box ref={scriptContainerRef} />
        </Fade>
      </Paper>
    </Box>
  );
}
