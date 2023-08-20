import { useState } from 'react'
import { Box, Button, Typography, useMediaQuery, useTheme } from "@mui/material"
import { PROJECTS } from "../constants"
import MuiModal from "../components/Modal"
import Project from '../components/Project'
import hexToRgba from '../utils/hexToRgba'
import Reveal from '../components/Reveal'

export default function Projects() {
    const theme = useTheme()
    const isPhone = useMediaQuery('(max-width: 500px)')
    const [open, setOpen] = useState(false);
    const [project, setProject] = useState({
        image: '',
        name: '',
        description: '',
        bgcolor: '',
        tools: [],
        github: '',
        demo: ''
    });

    const renderedProjects = PROJECTS.map((project, index) => (
        <Reveal key={`${project.name}-${index}`}>
            <Box 
                bgcolor={theme.palette.primary.light}
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                    padding: ".2rem",
                    borderRadius: ".5rem",
                    cursor: 'pointer',
                    position: 'relative', // To make the overlay relative to this container
                    '&:hover': {
                        '&::before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: hexToRgba(theme.palette.primary.main, .5), // Gray overlay color
                            borderRadius: '0.5rem',
                        },
                        '& button': { opacity: 1 }
                    },
                }}
                onClick={() => {
                    setOpen(true)
                    setProject(project)
                }}
            >
                <Button 
                    variant="contained"
                    color="primary"
                    sx={{
                        position: "absolute",
                        color: 'white',
                        opacity: 0, 
                        transition: 'opacity 0.5s'
                    }}
                >
                    More Details
                </Button>
                <img 
                    src={project.image}
                    alt={project.name}
                    width={isPhone ? "100%" : "450rem"}
                    style={{
                        aspectRatio: "2/1",
                        borderRadius: ".5rem",
                        boxShadow: `rgba(17, 17, 26, 0.1) 0px 8px 24px, 
                            rgba(17, 17, 26, 0.1) 0px 16px 56px, 
                            rgba(17, 17, 26, 0.1) 0px 24px 80px`,                 
                    }}
                />
            </Box>
        </Reveal>

    ))

    return (
        <Box id="projects" component="section" padding="5rem" sx={{ scrollMarginTop: "5rem" }}>
            <Typography variant="h4" marginBottom="2rem" textAlign="center">Projects</Typography>
            <MuiModal open={open} setOpen={setOpen}>
                <Project project={project}/>
            </MuiModal>
            <Box 
                display="flex" 
                justifyContent="center"
                alignItems="center" 
                flexWrap="wrap"
                gap="1rem"
            >
                {renderedProjects}
            </Box>
        </Box>
    )
}
