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
      imgUrl: './wanderly.png',
      liveUrl: 'https://wanderly.onrender.com/listings',
      githubUrl: 'https://github.com/sapekshpareek/Wanderly',
      title: "Wanderly",
      description: "Wanderly is a full-featured accommodation booking platform inspired by Airbnb, offering a clean and responsive UI. Built with the MERN stack, it allows users to explore listings, search by filters, and book stays with ease. Designed for performance and accessibility across both mobile and desktop devices.",
    },
    {
      imgUrl: './python.png',
      // liveUrl: '#',
      githubUrl: 'https://github.com/sapekshpareek/EncryptEco',
      title: "Encrypt Eco",
      description: "EncryptEco optimizes AES encryption for better storage efficiency. By segmenting data, reducing encryption rounds, dynamically sizing blocks, and applying compression, it achieves up to 45% storage savings—ideal for large-scale or storage-limited applications, without compromising AES-level security.",
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
