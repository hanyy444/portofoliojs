import { 
    AppBar,
    Toolbar,
    Stack,
    Button,
    useMediaQuery,
    useTheme,
    Typography
} from '@mui/material'
import SideNavbar from './SideNavbar'

import useScroll from '../utils/useScroll'
import hexToRgbA from '../utils/hexToRgba'

const NAV_LINKS = ['experience', 'skills', 'projects', 'contact']

export default function Navbar({ setOpenResume }) {
    const theme = useTheme()
    const isPhone = useMediaQuery('(max-width: 60em)')
    const scrollPosition = useScroll()

    const renderedNav = () => {
        if (isPhone)
            return <SideNavbar links={NAV_LINKS} setOpenResume={setOpenResume}/>

       return (
           <Stack component="nav" spacing={4} direction="row">
                {
                    NAV_LINKS.map(link => (
                        <Button 
                            key={link}
                            variant="text"
                            href={`#${link}`}
                            onClick={() => setOpenResume(false)}
                            sx={{
                                fontSize: '1.5rem',
                                color: theme.palette.primary.main,
                                '&:hover': { color: theme.palette.secondary.main}
                            }}
                        >
                            {link}
                        </Button>
                    ))
                } 
                <Button 
                    variant="text"
                    onClick={() => setOpenResume(true)}
                    sx={{
                        fontSize: '1.5rem',
                        color: theme.palette.primary.main,
                        '&:hover': { color: theme.palette.secondary.main}
                    }}
                >
                    Resume
                </Button>
            </Stack>
        )
    }

    return (
        <AppBar 
            style={{ 
                background: scrollPosition > 0 
                ? hexToRgbA(theme.palette.background.default, 0.75) 
                : theme.palette.background.default
            }}
            >
            <Toolbar  sx={{ justifyContent: 'space-between',  mx: isPhone ? undefined : '4rem'}}>
                <Button href="#about" onClick={() => setOpenResume(false)}>
                    <Typography>
                        Ahmed Hany
                    </Typography>
                </Button>
                {renderedNav()}
            </Toolbar>
        </AppBar>
    )
}
