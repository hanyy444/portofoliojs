import {
  Box,
  Typography,
  Icon,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { SKILLS } from "../constants";
import Reveal from "../components/Reveal";

export default function Skills() {
  const theme = useTheme();
  const isPhone = useMediaQuery(
    theme.breakpoints.down("sm")
  );

  const renderedSkills = SKILLS.map((skill) => (
    <Reveal key={`skill-${skill.id}`}>
      <Typography
        key={skill.id}
        variant="body2"
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        gap="1rem"
      >
        <Icon
          component={skill.icon}
          style={{
            width: "3rem",
            height: "3rem",
            fill: theme.palette.secondary.main,
          }}
        />
        {skill.name}
      </Typography>
    </Reveal>
  ));
  return (
    <Box
      id="skills"
      component="section"
      // height="100vh"
      minHeight="40vh"
      gap="2rem"
      // padding="5rem"
      sx={{
        scrollMarginTop: "7rem",
        padding: isPhone ? "3rem" : "0 5rem",
      }}
    >
      <Typography
        variant="h4"
        marginBottom="3rem"
        textAlign="center"
      >
        Skills
      </Typography>
      <Box
        // height="100%"
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(20rem, 1fr))"
        justifyItems="center"
        gap="2rem"
      >
        {renderedSkills}
      </Box>
    </Box>
  );
}
