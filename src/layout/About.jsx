import {
  Box,
  Typography,
  Stack,
  Button,
  useTheme,
  useMediaQuery,
  // Avatar,
} from "@mui/material";
import ProfilePhoto from "../assets/main-photo.jpg";
import CallIcon from "@mui/icons-material/Call";
// import hexToRgbA from "../utils/hexToRgba";

export default function About() {
  const theme = useTheme();
  const isTablet = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const imageBox = (
    <Box
      sx={{
        alignSelf: "center",
        mt: isTablet ? "5rem" : "15rem",
        mb: "5rem",
      }}
    >
      <img
        src={ProfilePhoto}
        alt="profile-photo"
        style={{
          height: isTablet ? "35rem" : "45rem",
          width: isTablet ? "35rem" : "45rem",
          borderRadius: "50%",
          filter: `drop-shadow(0 1px 5px rgba(3, 3, 3, 0.5))`,
          boxShadow: `rgba(0, 0, 0, .1) 1px 1px 5px`,
        }}
      />
    </Box>
  );

  const aboutStyles = {
    height: isTablet ? "85vh" : "100vh",
    border: "none",
    display: "flex",
    flexDirection: isTablet ? "column" : "row",
    alignItems: isTablet ? "start" : "center",
    justifyContent: isTablet ? "start" : "center",
    gap: "5rem",
    padding: isTablet ? "64px 3rem 0 3rem" : "0 20rem",
    // mb: isTablet ? "20rem" : "0",
    scrollMarginTop: "calc(5rem + 64px)", // Header + Padding
  };

  return (
    <Box
      id="about"
      component="section"
      // className="background-image"
      sx={aboutStyles}
    >
      <Stack
        sx={{
          // maxWidth: isTablet ? undefined : "75%",
          width: "100%",
          alignItems: "flex-start",
          justifyContent: "center",
          gap: 2,
        }}
      >
        <Typography
          variant="h1"
          lineHeight="1.1"
          // mb={2}
          fontSize="6rem"
          sx={{
            // flexShrink: 0,
            textTransform: "uppercase",
            textShadow: "2px 2px 2px rgba(0,0,0,.2)",
            // backdropFilter: "blur(10px)",
          }}
        >
          Ahmed Hany,
        </Typography>
        <Typography
          variant="h1"
          lineHeight="1.1"
          // mb={2}
          fontSize="6rem"
          sx={{
            // flexShrink: 0,
            textTransform: "uppercase",
            textShadow: "2px 2px 2px rgba(0,0,0,.2)",
            // backdropFilter: "blur(10px)",
          }}
        >
          I&apos;m A Software Engineer
        </Typography>
        <Typography
          variant="body1"
          marginBottom={isTablet ? 0 : 4}
          // lineHeight="1.5"
          maxWidth="85%"
          fontSize="3rem"
          fontWeight={400}
          // color={theme.palette.primary.contrastText}
        >
          Creating web solutions with a passion for
          technology.
        </Typography>
        {isTablet && imageBox}
        <Button
          // fullWidth
          variant="contained"
          href="#contact"
          startIcon={<CallIcon />}
          sx={{
            background: theme.palette.primary.main,
            width: { xs: "60%", md: "25rem" },
            height: 60,
            alignSelf: isTablet ? "center" : "flex-start",
            // boxShadow: `${hexToRgbA(
            //   theme.palette.secondary.main,
            //   0.6
            // )} 1px 2px 2px 1px`,
          }}
        >
          Contact Me
        </Button>
      </Stack>
      {!isTablet && imageBox}
    </Box>
  );
}
