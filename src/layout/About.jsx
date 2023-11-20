import {
  Box,
  Typography,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
  Avatar,
} from "@mui/material";
import ProfilePhoto from "../assets/main-photo.jpg";
import CallIcon from "@mui/icons-material/Call";

export default function About() {
  const theme = useTheme();
  const isPhone = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  const imageBox = (
    <Box
      sx={{
        alignSelf: "center",
        mt: isPhone ? "2rem" : "10rem",
        mb: "5rem",
      }}
    >
      <img
        src={ProfilePhoto}
        alt="profile-photo"
        style={{
          height: isPhone ? "35rem" : "40rem",
          width: isPhone ? "35rem" : "40rem",
          borderRadius: "50%",
          filter: `drop-shadow(0 0px 10px ${theme.palette.secondary.main})`,
        }}
      />
    </Box>
  );

  return (
    <Box
      id="about"
      component="section"
      sx={{
        height: isPhone ? "85vh" : "100vh",
        display: "flex",
        flexDirection: isPhone ? "column" : "row",
        alignItems: "center",
        justifyContent: isPhone ? "start" : "center",
        gap: "5rem",
        padding: isPhone ? "3rem" : "0 5rem",
        scrollMarginTop: "calc(5rem + 64px)", // Header + Padding
      }}
    >
      <Stack
        sx={{
          maxWidth: isPhone ? undefined : "50%",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Typography variant="h1" lineHeight="1" mb={1}>
          Software Engineer & Web Application Developer
        </Typography>
        <Typography
          variant="body1"
          marginBottom="3rem"
          lineHeight="1"
          maxWidth="90%"
        >
          Creating web solutions with a passion for
          technology.
        </Typography>
        {isPhone && imageBox}
        <Button
          // fullWidth
          variant="contained"
          href="#contact"
          startIcon={<CallIcon />}
          sx={{
            width: { xs: "75%", md: "20rem" },
            height: 50,
            alignSelf: isPhone ? "center" : "flex-start",
          }}
        >
          Contact Me
        </Button>
      </Stack>
      {!isPhone && imageBox}
    </Box>
  );
}
