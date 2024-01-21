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
            fill: theme.palette.secondary.light,
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
      gap="5rem"
      // marginY="15rem"
      marginBottom={10}
      // padding="5rem"
      sx={{
        scrollMarginTop: "9rem",
        padding: isPhone ? "3rem" : "0 10rem",
      }}
    >
      <Typography
        variant="h4"
        marginBottom="4rem"
        textAlign="center"
        color={theme.palette.primary.main}
      >
        Skills
      </Typography>
      <Box
        // height="100%"
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(15rem, 1fr))"
        justifyItems="center"
        gap={10}
      >
        {renderedSkills}
      </Box>
    </Box>
  );
}
