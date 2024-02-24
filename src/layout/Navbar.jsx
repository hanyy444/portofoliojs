/* eslint-disable react/prop-types */
import { lazy } from "react";

import {
  AppBar,
  Toolbar,
  Stack,
  Button,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const SideNavbar = lazy(() => import("./SideNavbar"));

import useScroll from "../utils/useScroll";
import { Person } from "@mui/icons-material";

const NAV_LINKS = [
  "experience",
  "skills",
  "projects",
  "contact",
];

export default function Navbar({
  setOpenResume,
  showExperience,
  showResume,
}) {
  const theme = useTheme();
  const isPhone = useMediaQuery("(max-width: 60em)");
  const scrollPosition = useScroll();

  const renderedNav = () => {
    const links = NAV_LINKS.filter((link) => {
      if (link === "experience") return showExperience;
      if (link === "resume") return showResume;
      return true;
    });

    if (isPhone)
      return (
        <SideNavbar
          links={links}
          showResume={showResume}
          setOpenResume={setOpenResume}
        />
      );

    return (
      <Stack component="nav" spacing={4} direction="row">
        {links.map((link) => (
          <Button
            key={link}
            variant="text"
            href={`#${link}`}
            onClick={() => setOpenResume(false)}
            sx={{
              zIndex: 100,
              fontSize: "1.5rem",
              color:
                scrollPosition > 2600
                  ? theme.palette.primary.contrastText
                  : theme.palette.primary.light,
              transition: "color .5s ease",
              "&:hover": {
                background: "none",
                color: theme.palette.secondary.main,
              },
            }}
          >
            {link}
          </Button>
        ))}
        {showResume && (
          <Button
            variant="text"
            onClick={() => setOpenResume(true)}
            sx={{
              fontSize: "1.5rem",
              color: theme.palette.primary.main,
              "&:hover": {
                color: theme.palette.primary.contrastText,
              },
            }}
          >
            Resume
          </Button>
        )}
      </Stack>
    );
  };

  return (
    <AppBar
      // className="background-image"
      style={{
        zIndex: 1000,
        background: "transparent",
        // color:
        //   // "inherit",
        //   scrollPosition > 2200
        //     ? hexToRgbA(theme.palette.primary.main, 0.65)
        //     : `url("assets/imgs/background1.svg")`,
      }}
    >
      <Toolbar
        sx={{
          justifyContent: "space-between",
          mx: isPhone ? undefined : "4rem",
        }}
      >
        <Button
          href="#about"
          onClick={() => setOpenResume(false)}
          sx={{
            "&:hover": {
              background: "none",
              "& svg": {
                fill: theme.palette.secondary.main,
              },
            },
          }}
        >
          {/* <Typography> */}
          <Person
            fontSize="large"
            sx={{
              fill:
                scrollPosition > 2200
                  ? theme.palette.primary.contrastText
                  : theme.palette.primary.main,
              transition: "fill .5s ease",
            }}
          />
          {/* </Typography> */}
        </Button>
        {renderedNav()}
      </Toolbar>
    </AppBar>
  );
}
