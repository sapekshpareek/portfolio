"use client";

import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";

export default function Navbar({ toggleColorMode, mode }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box
      component="nav"
      sx={{
        backgroundColor: theme.palette.background.paper,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        px: isMobile ? 2 : 10,
        py: 2,
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Logo on left */}
      <Box sx={{maxHeight: '50px', display:"flex", justifyContent:"center", alignItems: "flex-start"}}>
        <Link href="/">
          <img src={"/logo.png"} alt="Logo" width={150} height={"auto"} />
        </Link>
      </Box>

      {/* Menu links - hidden on mobile */}
      {!isMobile && (
        <Box sx={{ display: "flex", gap: 6 }}>
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
      )}

      {/* Mode switch on right */}
      <Button
        variant="outlined"
        onClick={toggleColorMode}
        sx={{
          ml: isMobile ? "auto" : 0,
          color: theme.palette.secondary.main,
          borderColor: theme.palette.secondary.main,
          fontWeight: 500,
          textTransform: "none",
        }}
      >
        {mode === "dark" ? "Light Mode" : "Dark Mode"}
      </Button>
    </Box>
  );
}
