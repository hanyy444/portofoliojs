import { Link, Avatar, Typography } from '@mui/material'
// import MainPhoto from 'assets/imgs/main-photo.jpg'

export default function Logo() {
    return (
        <Link href="#about" color="inherit" underline='none' variant="h5" display="flex" alignItems="center" gap={2}> 
            {/* <Avatar src={MainPhoto} sx={{ display: 'inline-block' }}/> */}
            <Typography variant='h6' component="p"
                textTransform="uppercase" 
                fontWeight="800">Ahmed Hany</Typography>
        </Link>
    )
}
