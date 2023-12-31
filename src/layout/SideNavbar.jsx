import { useState } from "react";
import {
  Box,
  IconButton,
  Drawer,
  Stack,
  Button,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export default function SideNavbar({
  links,
  setOpenResume,
  showResume,
}) {
  const theme = useTheme();
  const [navOpen, setNavOpen] = useState(false);

  const renderedLinks = links.map((link) => (
    <Button
      key={link}
      onClick={() => {
        setNavOpen(false);
        setOpenResume(false);
      }}
      size="large"
      variant="text"
      href={`#${link}`}
      sx={{
        fontSize: "2rem",
        color: theme.palette.primary.main,
        "&:hover": {
          color: theme.palette.secondary.main,
          background: "none",
        },
      }}
    >
      {link}
    </Button>
  ));

  return (
    <>
      <IconButton
        edge="start"
        onClick={() => setNavOpen(true)}
      >
        <MenuIcon
          fontSize="large"
          htmlColor={theme.palette.secondary.main}
          sx={{
            fill: theme.palette.primary.main,
          }}
        />
      </IconButton>
      <Drawer
        anchor="right"
        open={navOpen}
        elevation={10}
        onClose={() => setNavOpen(false)}
      >
        <Box
          p={4}
          width="25rem"
          textAlign="center"
          role="presentation"
          sx={{
            background: theme.palette.background.default,
          }}
          height="100%"
        >
          <Stack
            component="nav"
            height="100%"
            alignItems="center"
            justifyContent="space-evenly"
          >
            {renderedLinks}
            {showResume && (
              <Button
                onClick={() => {
                  setNavOpen(false);
                  setOpenResume(true);
                }}
                size="large"
                variant="text"
                sx={{
                  fontSize: "2rem",
                  color: theme.palette.primary.main,
                  "&:hover": {
                    color: theme.palette.secondary.main,
                    background: "none",
                  },
                }}
              >
                Resume
              </Button>
            )}
          </Stack>
        </Box>
      </Drawer>
    </>
  );
}
