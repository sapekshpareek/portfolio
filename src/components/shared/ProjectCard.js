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
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: theme.shadows[6],
        },
      }}
    >
      {/* Image with full border radius */}
      <Box
        component="img"
        src={imgUrl}
        alt={title}
        sx={{
          width: "100%",
          height: "auto",
          borderRadius: 2, // Applies full border radius
          objectFit: "cover",
        }}
      />

      <Typography
        variant="h5"
        fontWeight={600}
        mt={2}
        mb={3}
        color={theme.palette.text.headings}
      >
        {title}
      </Typography>

      <Typography
        variant="subtitle2"
        color={theme.palette.text.secondary}
        textAlign={"justify"}
        mb={3}
      >
        {description}
      </Typography>

      {/* Buttons */}
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          color="secondary"
          variant="outlined"
          disabled={!liveUrl}
          href={liveUrl || "#"}
          target="_blank"
          sx={{
            color: theme.palette.secondary.main,
            borderColor: theme.palette.secondary.main,
          }}
        >
          Live Preview
        </Button>
        <Button
          variant="outlined"
          color="black"
          disabled={!githubUrl}
          href={githubUrl || "#"}
          target="_blank"
          sx={{
            color: theme.palette.text.secondary,
            borderColor: theme.palette.text.secondary,
          }}
        >
          Github
        </Button>
      </Box>
    </Box>
  );
}
