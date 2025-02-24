"use client";
import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import ProjectCard from "./shared/ProjectCard";

export default function Projects() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const projects = [
    {
      imgUrl: './chronicle.png',
      liveUrl: 'https://the-chronicle.vercel.app/',
      githubUrl: 'https://github.com/sapekshpareek/chronicle',
      title: "The Chronicle",
      description: "Chronicle is a modern news web app offering a sleek, clean UI with dark and light themes. Powered by three APIs: NewsAPI, TheNewsAPI, and GNews API, it provides up-to-date news with seamless navigation. Users can select their preferred API and enjoy personalized news dashboards optimized for both mobile and desktop devices.",
    },
    {
      imgUrl: './Portfolio Website.png',
      liveUrl: 'https://sapekshpareek.vercel.app/',
      githubUrl: 'https://github.com/sapekshpareek/Portfolio-Website',
      title: "Mobile App Development",
      description: "Cross-platform mobile applications for iOS and Android.",
    },
    {
      imgUrl: './Portfolio Website.png',
      liveUrl: 'https://sapekshpareek.vercel.app/',
      githubUrl: 'https://github.com/sapekshpareek/Portfolio-Website',
      title: "UI/UX Design",
      description: "Clean, user-friendly designs focused on user experience.",
    },
  ];

  return (
    <Box
    id="projects"
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
        My Projects
      </Typography>

      <Grid container spacing={4} justifyContent={'space-between'}>
        {projects.map((project, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ProjectCard
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
              liveUrl={project.liveUrl}
              githubUrl={project.githubUrl}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
