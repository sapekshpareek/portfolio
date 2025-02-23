"use client";
import { Box, Button, Typography, useTheme } from "@mui/material";

export default function ProjectCard({ imgUrl, title, description, liveUrl, githubUrl }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        borderRadius: 2,
        p: 2,
        boxShadow: theme.shadows[3],
        textAlign: "center",
        maxWidth: 360,
        // mx: "auto",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: theme.shadows[6],
        },
      }}
    >
      {/* <Icon sx={{ fontSize: 50, color: theme.palette.primary.main, mb: 2 }} /> */}
      <Box sx={{ mb: 4 }}>
        <Box sx={{ borderRadius: 2, overflow: "hidden" }}>
          <img
            src={imgUrl}
            alt={title}
            style={{ maxWidth: "100%", height: "auto" }}
            // mb={4}
          />
        </Box>
        <Typography variant="h5" fontWeight={600} gutterBottom mb={3} mt={2} color={theme.palette.text.headings}>
          {title}
        </Typography>
        <Typography variant="subtitle2" color={theme.palette.text.secondary} textAlign={"justify"}>
          {description}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          color="secondary"
          variant="outlined"
          sx={{
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
          }}
          href={liveUrl} target="_blank"
        >
          Live Preview
        </Button>
        <Button variant="outlined" color="black"
        sx={{
          color: theme.palette.text.secondary,
          borderColor: theme.palette.text.secondary,
        }}
        href={githubUrl} target="_blank">Github</Button>
      </Box>
    </Box>
  );
}
