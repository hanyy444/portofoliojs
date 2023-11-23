import {
  Box,
  Typography,
  Icon,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
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
  const isPhone = useMediaQuery("(max-width: 60em)");

  const renderJobTasks = (tasks) =>
    tasks.map((task) => (
      <ListItem
        key={task}
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <ChevronRightIcon />
        <ListItemText
          primary={
            <Typography variant="body2" fontSize="2rem">
              {task}
            </Typography>
          }
          sx={{
            paddingLeft: "1rem",
          }}
        />
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
          // width="80%"
          // marginLeft={
          //   index % 2 !== 0 && !isPhone
          //     ? "auto"
          //     : undefined
          // }
          >
            <Typography variant="h5" mb={1}>
              {experience.jobTitle} @{" "}
              {experience.companyName}, Giza
            </Typography>
            <Typography variant="body2">
              {experience.period}
            </Typography>
            <List
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems:
                  index % 2 === 0 || isPhone
                    ? "flex-start"
                    : "flex-start",
                "& li div": {
                  display: "flex",
                  justifyContent:
                    index % 2 === 0 || isPhone
                      ? "flex-start"
                      : "flex-start",
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
      marginY={5}
      sx={{
        scrollMarginTop: "9rem",
        padding: isPhone ? "3rem" : "0 5rem",
      }} // box + inner list margin
    >
      <Typography
        variant="h4"
        marginBottom="3rem"
        textAlign="center"
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
