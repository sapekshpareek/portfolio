import { Box, Typography, useTheme } from "@mui/material";

export default function Footer() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        background: theme.palette.background.default,
        color: theme.palette.text.primary,
        pt: 10,
        pb: 3,
        pr: 10,
        pl: 10,
        width: "100vw",
      }}
    >
      <Box
        sx={{
          // pt: 4,
          pb: 10,
          //   width: "",
          textAlign: "center",

          display: "flex",
          justifyContent: "space-between",
          borderBottom: `1px solid ${theme.palette.grey[500]}`,
        }}
      >
        <Box>Logo</Box>
        <Box sx={{ display: "flex", gap: 6 }}>
          <Typography>Home</Typography>
          <Typography>About</Typography>
          <Typography>Contact</Typography>
        </Box>
        <Box>Social Media</Box>
      </Box>
      <Box
        sx={{ pt: 4, pb: 3, display: "flex", justifyContent: "space-between" }}
      >
        <Typography variant="body2">Crafted with ❤️ by Sapeksh Pareek</Typography>
        <Typography variant="body2">Copyright © {new Date().getFullYear()}</Typography>
      </Box>
    </Box>
  );
}
