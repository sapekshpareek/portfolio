"use client";

import { Box, Grid, Typography, useTheme } from "@mui/material";
import ExperienceCard from "./shared/ExperienceCard";

const experiences = [
  {
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHjpnI75Pi0Hw/company-logo_200_200/company-logo_200_200/0/1700837937026/yardsticklive_logo?e=1755129600&v=beta&t=lmF2hmViAq6g61ucLFl9VKs47xHr3RH22GHC-2PShms",
    role: "Full Stack Developer Intern",
    duration: "May 2024 – Nov 2024",
    description:
      "Worked on full-stack development using React, Next.js, and Node.js. Built RESTful APIs, integrated MongoDB, and automated backend tasks with Python. Deployed scalable apps using AWS.",
    link: "https://yardstick.live",
  },
  {
    logo: "https://media.licdn.com/dms/image/v2/D560BAQHDmIfYA5sY7w/company-logo_200_200/company-logo_200_200/0/1685777115831?e=1755129600&v=beta&t=UHOngdjEFIbV-8BvYOX01_ClcDlflhoV2tQlAEdH75I",
    role: "Software Engineering Intern",
    duration: "May 2022 – July 2022",
    description:
      "Built internal tools for data visualization using Angular and Firebase. Also developed static websites with HTML, CSS, and JavaScript to support internal documentation and UI prototypes.",
    link: "https://codsoft.in/",
  },
];

export default function MyExperience() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.background.paper,
        width: "100%",
        py: 6,
        px: { xs: 2, md: 10 },
      }}
    >
      <Typography
        variant="h3"
        fontWeight={600}
        mb={6}
        color={theme.palette.text.headings || theme.palette.text.primary}
        textAlign="center"
      >
        My Experience
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {experiences.map((exp, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ExperienceCard {...exp} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
