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
import hexToRgbA from "../utils/hexToRgba";

export default function About() {
  const theme = useTheme();
  const isPhone = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  const imageBox = (
    <Box
      sx={{
        alignSelf: "center",
        mt: isPhone ? "5rem" : "15rem",
        mb: "5rem",
      }}
    >
      <img
        src={ProfilePhoto}
        alt="profile-photo"
        style={{
          height: isPhone ? "35rem" : "30rem",
          width: isPhone ? "35rem" : "30rem",
          borderRadius: "50%",
          filter: `drop-shadow(0 1px 5px rgba(0, 0, 0, .5))`,
          boxShadow: `rgba(0, 0, 0, .1) 1px 1px 5px`,
        }}
      />
    </Box>
  );

  const aboutStyles = {
    height: isPhone ? "90vh" : "100vh",
    border: "none",
    display: "flex",
    flexDirection: isPhone ? "column" : "row",
    alignItems: isPhone ? "start" : "center",
    justifyContent: isPhone ? "start" : "center",
    gap: "5rem",
    padding: isPhone ? "5rem 3rem" : "0 10rem",
    scrollMarginTop: "calc(5rem + 64px)", // Header + Padding
  };

  return (
    <Box
      id="about"
      component="section"
      className="background-image"
      sx={aboutStyles}
    >
      <Stack
        sx={{
          // maxWidth: isPhone ? undefined : "75%",
          alignItems: "flex-start",
          justifyContent: "center",
          // gap: "1rem",
        }}
      >
        <Typography
          variant="h1"
          lineHeight="1.1"
          mb={2}
          fontSize="4.2rem"
          sx={{
            // flexShrink: 0,
            textTransform: "uppercase",
            textShadow: "2px 2px 2px rgba(0,0,0,.2)",
            backdropFilter: "blur(10px)",
          }}
        >
          Ahmed Hany, Software Engineer
        </Typography>
        <Typography
          variant="body1"
          marginBottom={isPhone ? 0 : 4}
          lineHeight="1.5"
          // maxWidth="70%"
          fontSize="2.5rem"
          fontWeight={400}
        >
          Creating web solutions with a passion for
          technology
        </Typography>
        {isPhone && imageBox}
        <Button
          // fullWidth
          variant="contained"
          href="#contact"
          startIcon={<CallIcon />}
          sx={{
            background: theme.palette.primary.main,
            width: { xs: "60%", md: "25rem" },
            height: 60,
            alignSelf: isPhone ? "center" : "flex-start",
            // boxShadow: `${hexToRgbA(
            //   theme.palette.secondary.main,
            //   0.6
            // )} 1px 2px 2px 1px`,
          }}
        >
          Contact Me
        </Button>
      </Stack>
      {!isPhone && imageBox}
    </Box>
  );
}
