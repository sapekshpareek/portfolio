"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      sx={{
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        pt: 10,
        pb: 3,
        px: isMobile ? 2 : 10,
        width: "100%",
      }}
    >
      {/* Top Section */}
      <Box
        sx={{
          pb: isMobile ? 4 : 10,
          textAlign: isMobile ? "center" : "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          gap: isMobile ? 4 : 0,
          borderBottom: `1px solid ${theme.palette.grey[500]}`,
          flexWrap: "wrap",
        }}
      >
        {/* Logo */}
        <Box>
          <img
            src="/logo.png"
            alt="Logo"
            style={{ width: 120, height: "auto" }}
          />
        </Box>

        {/* Navigation (hidden on mobile) */}
        <Box
          sx={{
            display: isMobile ? "none" : "flex",
            gap: 6,
          }}
        >
          <Typography component="a" href="#home" sx={{ cursor: "pointer", textDecoration: "none", color: theme.palette.text.headings }}>
            Home
          </Typography>
          <Typography component="a" href="#myservices" sx={{ cursor: "pointer", textDecoration: "none", color: theme.palette.text.headings }}>
            My Services
          </Typography>
          <Typography component="a" href="#aboutme" sx={{ cursor: "pointer", textDecoration: "none", color: theme.palette.text.headings }}>
            About Me
          </Typography>
          <Typography component="a" href="#projects" sx={{ cursor: "pointer", textDecoration: "none", color: theme.palette.text.headings }}>
            My Projects
          </Typography>
          <Typography component="a" href="#myexperiences" sx={{ cursor: "pointer", textDecoration: "none", color: theme.palette.text.headings }}>
            My Experience
          </Typography>
          <Typography component="a" href="#clientfeedback" sx={{ cursor: "pointer", textDecoration: "none", color: theme.palette.text.headings }}>
            Client Feedback
          </Typography>
        </Box>

        {/* Social Media Icons */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: isMobile ? "center" : "flex-end",
          }}
        >
          <IconButton
            component="a"
            href="https://linkedin.com/in/sapekshpareek"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://github.com/sapekshpareek"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <GitHubIcon />
          </IconButton>
          <IconButton
            component="a"
            href="https://twitter.com/sapekshpareek"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <TwitterIcon />
          </IconButton>
        </Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          pt: isMobile ? 2 : 4,
          pb: isMobile ? 0 : 3,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          gap: isMobile ? 1 : 0,
        }}
      >
        <Typography variant="body2">
          © {new Date().getFullYear()} All rights reserved
        </Typography>
        <Typography variant="body2">
          Crafted with ❤️ by Sapeksh Pareek
        </Typography>
      </Box>
    </Box>
  );
}
