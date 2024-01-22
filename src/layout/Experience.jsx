import {
  Box,
  Typography,
  Icon,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { EXPERIENCES } from "../constants";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import Timeline from "@mui/lab/Timeline";
import TimelineItem, {
  timelineItemClasses,
} from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Reveal from "../components/Reveal";

export default function Experience() {
  const theme = useTheme();
  const isPhone = useMediaQuery("(max-width: 60em)");

  const renderJobTasks = (tasks) =>
    tasks.map((task) => (
      <ListItem
        key={task.subtitle || task}
        sx={{
          // width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "start",
        }}
      >
        <ListItemText
          primary={
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <ChevronRightIcon />
              <Typography
                variant="body2"
                fontSize="2rem"
                fontWeight={task.subtitle ? 800 : 400}
              >
                {task.subtitle || task}
              </Typography>
            </Box>
          }
        />

        {task.subtitle && (
          <List>
            {task.subTasks.map((subtask) => (
              <ListItem
                key={subtask}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "start",
                  gap: 1,
                }}
              >
                <ChevronRightIcon />
                <Typography variant="body2">
                  {subtask}
                </Typography>
              </ListItem>
            ))}
          </List>
        )}
      </ListItem>
    ));

  const renderedExperiences = EXPERIENCES.map(
    (experience, index) => (
      <TimelineItem key={experience.id}>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems:
                (index % 2 === 0 && !isPhone) || isPhone
                  ? "start"
                  : "end",
            }}
          >
            <Typography variant="h5" mb={1}>
              {experience.jobTitle} @{" "}
              {experience.companyName},{" "}
              {experience.location}
            </Typography>
            <Typography variant="body2">
              {experience.period}
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                "& li div ": {
                  display: "flex",
                  // alignItems:
                  //   index % 2 === 0 || isPhone
                  //     ? "flex-end"
                  //     : "flex-start",
                },
              }}
            >
              {renderJobTasks(experience.jobTasks)}
            </List>
          </Box>
        </TimelineContent>
      </TimelineItem>
    )
  );

  return (
    <Box
      id="experience"
      component="section"
      // height="100vh"
      // padding="5rem"
      marginTop={5}
      sx={{
        scrollMarginTop: "9rem",
        padding: isPhone ? "3rem" : "0 5rem",
      }} // box + inner list margin
    >
      <Typography
        variant="h4"
        marginBottom="5rem"
        textAlign="center"
        color={theme.palette.primary.main}
      >
        Experience
      </Typography>
      <Reveal>
        <Timeline
          position={isPhone ? "right" : "alternate"}
          sx={
            isPhone
              ? {
                  // left alignment
                  [`& .${timelineItemClasses.root}:before`]:
                    {
                      flex: 0,
                      padding: 0,
                    },
                }
              : {}
          }
        >
          {renderedExperiences}
        </Timeline>
      </Reveal>
    </Box>
  );
}
