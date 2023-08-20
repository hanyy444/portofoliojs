import { Box, Typography, Stack, Button, useTheme, useMediaQuery } from "@mui/material"
import ProfilePhoto from '../assets/main-photo.jpg'
import CallIcon from '@mui/icons-material/Call'

export default function About() {
    const isPhone = useMediaQuery('(max-width: 70em)')

    return (
        <Box 
            id="about"
            component="section"
            height={isPhone ? "100%" : "100vh"}
            display="flex"
            flexDirection={ isPhone ? 'column' : 'row' }
            alignItems="center"
            justifyContent="center"
            gap="5rem"
            padding={isPhone ? "5rem" : "0 5rem"}
            sx={{ scrollMarginTop: "calc(5rem + 64px)" }} // Header + Padding
        >
            <Stack 
                maxWidth={isPhone ? undefined : '50%'}
                alignItems="flex-start" 
                justifyContent="center"
                gap="1rem"
            >
                <Typography variant="h1" lineHeight="1">
                    Software Engineer & Web Application Developer
                </Typography>
                <Typography variant="body1" marginBottom="4rem">
                    Creating web solutions with a passion for technology.
                </Typography>
                <Button 
                    variant="contained"
                    href="#contact"
                    startIcon={<CallIcon/>}
                    sx={{  width: '20rem' }}
                >
                    Contact Me
                </Button>
            </Stack>
            <Box mt="5rem">
                <img 
                    src={ProfilePhoto} 
                    alt="profile-photo" 
                    height="350rem" 
                    width="350rem"
                    style={{ borderRadius: '50%' }}
                />
            </Box>
        </Box>
    )
}
