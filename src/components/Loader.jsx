import { Box, Typography, useTheme } from "@mui/material";

export default function Loader() {
  const theme = useTheme();

  return (
    <Box
      position="relative"
      height="100vh"
      width="100%"
      overflow="hidden"
      bgcolor={theme.palette.background.default}
    >
      <Typography
        variant="h2"
        component="p"
        sx={{
          width: "100rem",
          textAlign: "center",
          display: "inline-block",
          letterSpacing: "2px",
          color: theme.palette.primary.main,
          boxSizing: "border-box",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -100%)",
          animation:
            "spotlight 1.2s linear infinite alternate",
        }}
      >
        Ahmed Hany
      </Typography>
    </Box>
  );
}
