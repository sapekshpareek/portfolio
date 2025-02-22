"use client";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import WebIcon from "@mui/icons-material/Public";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ServiceCard from "./shared/ServiceCard";

export default function MyServices() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const services = [
    {
      icon: WebIcon,
      title: "Website Development",
      description: "Modern and responsive websites built using the latest technologies.",
    },
    {
      icon: PhoneAndroidIcon,
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: DesignServicesIcon,
      title: "UI/UX Design",
      description: "Clean, user-friendly designs focused on user experience.",
    },
  ];

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        width: "100%",
        px: isMobile ? 2 : 10,
        py: 6,
      }}
    >
      <Typography
        variant="h3"
        fontWeight={600}
        mb={6}
        color={theme.palette.text.headings || theme.palette.text.primary}
        textAlign="center"
      >
        My Services
      </Typography>

      <Grid container spacing={4} justifyContent={"space-between"}>
        {services.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ServiceCard
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
