import { createTheme } from '@mui/material'

export const tokens = {
    black: {
        100: "#cccdd7",
        200: "#999baf",
        300: "#676986",
        400: "#34375e",
        500: "#010536",
        600: "#01042b",
        700: "#010320",
        800: "#000216",
        900: "#00010b"
    },
    'cool_gray': {
        default: '#8d99ae',
        100: '#1a1e25',
        200: '#343c4a',
        300: '#4f5b6f',
        400: '#697994',
        500: '#8d99ae',
        600: '#a4aebf',
        700: '#bbc2cf',
        800: '#d2d6df',
        900: '#e8ebef'
    },
    'anti-flash_white': {
        default: '#edf2f4',
        100: '#24353b',
        200: '#496a77',
        300: '#759bab',
        400: '#b1c6cf',
        500: '#edf2f4',
        600: '#f0f4f6',
        700: '#f4f7f8',
        800: '#f7fafa',
        900: '#fbfcfd'
    },
    'red_(pantone)': {
        default: '#ef233c',
        100: '#330409',
        200: '#660813',
        300: '#9a0c1c',
        400: '#cd0f26',
        500: '#ef233c',
        600: '#f25063',
        700: '#f57c8a',
        800: '#f8a8b1',
        900: '#fcd3d8'
    },
    'fire_engine_red': {
        default: '#d90429',
        100: '#2b0108',
        200: '#560210',
        300: '#810318',
        400: '#ac0420',
        500: '#d90429',
        600: '#fa1b40',
        700: '#fc5470',
        800: '#fd8da0',
        900: '#fec6cf'
    }
}

const primaryColor = '#333333'
const secondaryColor = '#3498db'
const backgroundColor = '#f8f8f8'

const themeOne = {
    palette: {
        primary: { main: primaryColor },
        secondary: { main: secondaryColor },
        background: {
            default: backgroundColor,
            paper: tokens.black[800]
        }
    },
    typography: {
        fontSize: 16,
        fontFamily: ['Passion One', 'sans-serif'].join(','),
        h1: {
            fontSize: '7rem',
            fontWeight: 900,
            color: primaryColor,
            fontFamily: 'Montserrat'
        },
        h2: { fontSize: '5rem', fontWeight: '600' },
        h3: { fontSize: '4rem', fontWeight: '800', color: secondaryColor },
        h4: {
            fontSize: '3rem',
            fontWeight: 600,
            fontFamily: ['PT Serif', 'sans-serif'].join(','),
            color: secondaryColor
        },
        h5: {
            fontSize: '2.5rem',
            fontWeight: 500,
            fontFamily: ['PT Serif', 'sans-serif'].join(','),
            color: secondaryColor
        },
        body1: {
            fontSize: '2.8rem',
            color: secondaryColor,
            fontFamily: ['PT Serif'].join(',')
        },
        body2: {
            fontSize: '1.8rem',
            color: primaryColor,
            fontWeight: 500,
            fontFamily: ['Lato', 'Passion One', 'sans-serif'].join(',')
        },
        button: {
            fontSize: '2rem',
            fontWeight: 800,
            fontFamily: ['Lato', 'Passion One', 'sans-serif'].join(','),
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1200,
            xl: 1920
        }
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: { backgroundColor: tokens.cool_gray[100] },
                arrow: { color: tokens.cool_gray[100] }
            }
        }
    }
}

const themeTwo = {
    palette: {
        primary: { main: tokens['anti-flash_white'][400] },
        secondary: { main: tokens['fire_engine_red'].default },
        background: {
            default: tokens.black[900],
            paper: tokens.black[800]
        }
    },
    typography: {
        fontSize: 16,
        fontFamily: ['Passion One', 'sans-serif'].join(','),
        h1: {
            fontSize: '7rem',
            fontWeight: '800',
            color: tokens['anti-flash_white'][400]
        },
        h2: { fontSize: '6rem', fontWeight: '600' },
        h3: { fontSize: '5rem', fontWeight: '800' },
        h4: {
            fontSize: '3rem',
            fontWeight: 600,
            fontFamily: ['Passion One', 'sans-serif'].join(','),
            color: tokens['fire_engine_red'].default
        },
        body1: {
            fontSize: '3rem',
            color: tokens['fire_engine_red'].default,
            fontWeight: 800
        },
        body2: {
            fontSize: '1.5rem',
            color: tokens['anti-flash_white'][400],
            fontWeight: 500
        },
        button: {
            fontSize: '2rem',
            fontFamily: ['Passion One', 'sans-serif'].join(',')
        }
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: { backgroundColor: tokens.cool_gray[100] },
                arrow: { color: tokens.cool_gray[100] }
            }
        }
    }
}

const themeThree = {
    palette: {
        primary: { main: '#E1E4EA' },
        secondary: { main: '#03B0F9' },
        background: {
            default: '#00030A',
            paper: tokens.black[800]
        }
    },
    typography: {
        fontSize: 16,
        fontFamily: ['Passion One', 'sans-serif'].join(','),
        h1: {
            fontSize: '6rem',
            fontWeight: '800',
            color: '#E1E4EA'
        },
        h2: { fontSize: '5rem', fontWeight: '600' },
        h3: { fontSize: '4rem', fontWeight: '800', color: '#03B0F9' },
        h4: {
            fontSize: '2.8rem',
            fontWeight: 600,
            fontFamily: ['Passion One', 'sans-serif'].join(','),
            color: '#03B0F9'
        },
        h5: {
            fontSize: '2.5rem',
            fontWeight: 500,
            fontFamily: ['Passion One', 'sans-serif'].join(','),
            color: '#03B0F9'
        },
        body1: {
            fontSize: '3.5rem',
            color: '#03B0F9',
            fontWeight: 800
        },
        body2: {
            fontSize: '1.7rem',
            color: '#E1E4EA',
            fontWeight: 500
        },
        button: {
            fontSize: '2rem',
            fontFamily: ['Passion One', 'sans-serif'].join(',')
        }
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 768,
            md: 992,
            lg: 1200,
            xl: 1920
        }
    },
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: { backgroundColor: tokens.cool_gray[100] },
                arrow: { color: tokens.cool_gray[100] }
            }
        }
    }
}

export const theme = createTheme(themeOne)
