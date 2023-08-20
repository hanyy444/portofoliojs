import { useTheme } from "@mui/material"
import { SKILLS } from "../constants"
import { Box, Typography, Icon } from "@mui/material"
import Reveal from "../components/Reveal"

export default function Skills() {
    const theme = useTheme()
    const renderedSkills = SKILLS.map(skill => (
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
                        width: '3rem',
                        height: '3rem',
                        fill: theme.palette.secondary.main,
                    }}
                />
                {skill.name}
            </Typography>
        </Reveal>
    ))
    return (
        <Box
            id="skills"
            component="section"
            // height="100vh"
            gap="2rem"
            padding="5rem"
            sx={{ scrollMarginTop: '5rem' }}
        >
            {/* <Typography variant="h3">Skills</Typography> */}
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
    )
}
