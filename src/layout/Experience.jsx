import { Box, 
    Typography, 
    Icon,
    List,
    ListItem,
    ListItemText,
    useMediaQuery
 } from "@mui/material"
import { EXPERIENCES } from "../constants"
import ChevronRightIcon from '@mui/icons-material/ChevronRight'

import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Reveal from "../components/Reveal";

export default function Experience(){
    const isPhone = useMediaQuery('(max-width: 60em)')

    const renderedJobTasks = (tasks) => tasks.map(task => (
        <ListItem key={task} sx={{width: isPhone ? undefined : '75%'}}>
            <ChevronRightIcon />
                <ListItemText 
                    primary={
                        <Typography variant="body2" fontSize="2rem">
                            {task}
                        </Typography>
                    } 
                    sx={{ paddingLeft: '1rem' }}
                />
        </ListItem>
    ))

    const renderedExperiences = EXPERIENCES.map((experience, index) => (
        <TimelineItem key={experience.id}>
            <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
                <Box width="80%" marginLeft={(index % 2 !== 0 && !isPhone) ? "auto" : undefined}>
                    <Typography variant="h4">{experience.jobTitle} @ {experience.companyName}, Giza</Typography>
                    <Typography variant="body2">{experience.period}</Typography>
                    <List
                        sx={{
                            display:"flex",
                            flexDirection:  "column",
                            alignItems: (index % 2 === 0 || isPhone) ? 'flex-start' : 'flex-end'
                        }}
                    >
                        { renderedJobTasks(experience.jobTasks) }
                    </List>
                </Box>
            </TimelineContent>
        </TimelineItem>
    ))

    return (
        <Box 
            id="experience"
            component="section"
            // height="100vh"
            // padding="2rem"
            margin="5rem 0"
            sx={{ 
                scrollMarginTop: "5.6rem",
            }} // box + inner list margin
        >
            <Reveal>
                <Timeline 
                    position={isPhone ? "right" : "alternate"}
                    sx={isPhone ? ({ // left alignment
                        [`& .${timelineItemClasses.root}:before`]: {
                            flex: 0,
                            padding: 0,
                        },
                    }) : {}}
                >
                    {renderedExperiences}
                </Timeline>
            </Reveal>

        </Box>
    )
}