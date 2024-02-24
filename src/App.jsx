import "./App.css";
import { lazy, useEffect, useState } from "react";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
// import CssBaseline from "@mui/material/CssBaseline";
import Loader from "./components/Loader";
// import Spinner from "./components/Spinner";
import { Box, useTheme } from "@mui/material";

import Navbar from "./layout/Navbar";
import About from "./layout/About";
import Experience from "./layout/Experience";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import Reveal from "./components/Reveal";

import Background from "../src/assets/imgs/background6.svg";

const Resume = lazy(() => import("./layout/Resume"));
import Sides from "./layout/Sides";
import Footer from "./layout/Footer";

function App() {
  const theme = useTheme();
  const isTablet = useMediaQuery(
    theme.breakpoints.down("lg")
  );

  const [openResume, setOpenResume] = useState(false);

  // preload time is relative to the animation duration + delay
  const [preLoading, setPreLoading] = useState(true);
  const [isBackgroundLoading, setIsBackgroundLoading] =
    useState(false);

  useEffect(() => {
    const backgroundImage = new Image();
    backgroundImage.onload = () =>
      setIsBackgroundLoading(false);
    backgroundImage.src = Background;
    const preload = () =>
      setTimeout(() => setPreLoading(false), 1500);
    preload();
    return () => clearTimeout(preload);
  }, []);

  const params = new URLSearchParams(
    window.location.search
  );

  const showExperience =
    params.get("showExperience") === "true" || true;

  const showResume =
    params.get("showResume") === "true" || false;
  console.log(isBackgroundLoading);
  return (
    <Box
      className="app"
      sx={{
        height: preLoading ? "100vh" : "100%",
        overscrollBehavior: "none",
        overflowY: "hidden",
        background:
          preLoading || isBackgroundLoading
            ? "#182833"
            : `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundPosition: "32%",
        padding: 0,
      }}
    >
      {/* <CssBaseline /> */}
      {preLoading ? (
        <>
          <Loader />
        </>
      ) : (
        <>
          <Navbar
            setOpenResume={setOpenResume}
            showExperience={showExperience}
            showResume={showResume}
          />
          {/* <Suspense fallback={<Spinner />}> */}
          {openResume && showResume ? (
            <Resume />
          ) : (
            <Stack
              component="main"
              sx={{
                paddingTop: "5rem",
                gap: "10rem",
              }}
            >
              <Reveal>
                <About />
              </Reveal>
              {showExperience && <Experience />}
              <Skills />
              <Projects />
              <Reveal>
                <Contact />
                {!isTablet ? <Sides /> : <Footer />}
              </Reveal>
            </Stack>
          )}
          {/* </Suspense> */}
        </>
      )}
    </Box>
  );
}

export default App;
