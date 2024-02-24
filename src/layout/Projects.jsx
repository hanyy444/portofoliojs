import { lazy, useState } from "react";
import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import hexToRgba from "../utils/hexToRgba";

import { PROJECTS } from "../constants";

const MuiModal = lazy(() => import("../components/Modal"));
const Project = lazy(() => import("../components/Project"));
const Reveal = lazy(() => import("../components/Reveal"));

export default function Projects() {
  const theme = useTheme();
  const isPhone = useMediaQuery(
    theme.breakpoints.down("sm")
  );
  const [open, setOpen] = useState(false);
  const [project, setProject] = useState({
    image: "",
    name: "",
    description: "",
    bgcolor: "",
    tools: [],
    github: "",
    demo: "",
  });

  const hoverStyle = !isPhone
    ? {
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: hexToRgba(
            theme.palette.secondary.main,
            0.4
          ), // Gray overlay color
          borderRadius: "0.5rem",
        },
        "& button": { opacity: 1 },
      }
    : {};

  const renderedProjects = PROJECTS.map(
    (project, index) => (
      <Reveal key={`${project.name}-${index}`}>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{
            outline: 0,
            width: isPhone ? "75%" : "40rem",
            marginX: "auto",
            padding: ".2rem",
            borderRadius: ".5rem",
            cursor: "pointer",
            position: "relative", // To make the overlay relative to this container
            "&:hover": hoverStyle,
          }}
          onClick={() => {
            setOpen(true);
            setProject(project);
          }}
        >
          {!isPhone && (
            <Button
              variant="contained"
              color="secondary"
              sx={{
                position: "absolute",
                color: "white",
                opacity: 0,
                transition: "opacity 0.5s",
                "&:hover": {
                  background:
                    theme.palette.primary.contrastText,
                },
              }}
            >
              More Details
            </Button>
          )}
          <img
            src={project.image}
            alt={project.name}
            loading="lazy"
            style={{
              border: "none",
              width: "100%",
              borderRadius: ".5rem",
              boxShadow: `rgba(17, 17, 26, 0.3) 0px 8px 24px,
                              rgba(17, 17, 26, 0.3) 0px 16px 56px,
                              rgba(17, 17, 26, 0.3) 0px 24px 80px`,
            }}
          />
        </Box>
      </Reveal>
    )
  );

  return (
    <Stack
      id="projects"
      component="section"
      sx={{
        display: "flex",
        alignItems: "center",
        scrollMarginTop: "9rem",
        padding: isPhone ? "3rem" : "0 5rem",
      }}
    >
      <Typography
        variant="h4"
        marginBottom="2rem"
        textAlign="center"
        color={theme.palette.primary.main}
      >
        Projects
      </Typography>
      <MuiModal open={open} setOpen={setOpen}>
        <Project project={project} />
      </MuiModal>
      <Box
        sx={{
          display: "flex",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            padding: "5rem 0",
            gap: 2,
          }}
        >
          {renderedProjects}
        </Box>
      </Box>
    </Stack>
  );
}
