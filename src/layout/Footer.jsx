import { Stack, Typography, useTheme } from '@mui/material'
import Socials from '../components/Socials'
import { FOOTER } from '../constants';

export default function Footer() {
    const theme = useTheme()
    return (
        <Stack id="footer" padding="5rem" gap="1rem">
            <Socials direction="row"/>
            <Typography textAlign="center" variant="body2">{FOOTER.copyright}</Typography>
        </Stack>
    )
}
