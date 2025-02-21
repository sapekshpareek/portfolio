import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";

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
          // flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: isMobile ? "center" : "flex-start",
          gap: isMobile ? 4 : 0,
          borderBottom: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Box>Logo</Box>
        <Box
          sx={{
            display: isMobile ? "none" : "flex",
            gap: isMobile ? 2 : 6,
            // flexDirection: isMobile ? "column" : "row",
            // alignItems: "center",
          }}
        >
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Contact</Typography>
        </Box>
        <Box>Social Media</Box>
      </Box>

      {/* Bottom Section */}
      <Box
        sx={{
          pt: isMobile ? 2 : 4,
          pb: isMobile? 0 : 3,
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          textAlign: "center",
          gap: isMobile ? 1 : 0,
        }}
      >
        <Typography variant="body2">
          Copyright © {new Date().getFullYear()}
        </Typography>
        <Typography variant="body2">
          Crafted with ❤️ by Sapeksh Pareek
        </Typography>
      </Box>
    </Box>
  );
}
