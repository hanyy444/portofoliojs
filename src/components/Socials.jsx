import {
  Link,
  Stack,
  Tooltip,
  Typography,
  useTheme,
} from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";
import useScroll from "../utils/useScroll";

const SOCIALS = [
  {
    id: 0,
    name: "Github",
    href: "https://github.com/hanyy444",
    Icon: GitHub,
  },
  {
    id: 1,
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ahmed-hany-914b811a1/",
    Icon: LinkedIn,
  },
];
export default function Socials({ color, direction }) {
  const theme = useTheme();
  const scrollPosition = useScroll();

  return (
    <Stack
      gap={2}
      direction={direction}
      justifyContent="center"
      sx={{ padding: 0 }}
    >
      {SOCIALS.map((social) => (
        <Tooltip
          title={
            <Typography
              variant="body2"
              sx={{
                color: theme.palette.primary.main,
              }}
            >
              {social.name}
            </Typography>
          }
          arrow
          followCursor
          key={social.id}
          placement="right"
        >
          <Link
            variant="body2"
            href={social.href}
            rel="noopener"
            target="_blank"
          >
            <social.Icon
              sx={{
                cursor: "pointer",
                width: "3rem",
                height: "3rem",
                fill:
                  scrollPosition > 1700
                    ? color
                    : theme.palette.primary.main,
                "&:hover": {
                  fill: theme.palette.secondary.main,
                },
              }}
            />
          </Link>
        </Tooltip>
      ))}
    </Stack>
  );
}
