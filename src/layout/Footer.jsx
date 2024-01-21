import { Stack, Typography, useTheme } from "@mui/material";
import Socials from "../components/Socials";
import { FOOTER } from "../constants";

export default function Footer() {
  const theme = useTheme();
  return (
    <Stack id="footer" padding="5rem" gap="1rem" mt={-5}>
      <Socials
        direction="row"
        color={theme.palette.primary.contrastText}
      />
      <Typography
        textAlign="center"
        color={theme.palette.primary.contrastText}
        variant="body2"
        component="p"
        fw={800}
      >
        {FOOTER.copyright}
      </Typography>
    </Stack>
  );
}
