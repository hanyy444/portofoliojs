import "./App.css";
import { lazy, useEffect, useState, Suspense } from "react";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Loader from "./components/Loader";
// import Spinner from "./components/Spinner";
import { Box, Typography, useTheme } from "@mui/material";

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
  const preload = () =>
    setTimeout(() => setPreLoading(false), 1500);

  useEffect(() => {
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

  return (
    <Box
      className="app"
      sx={{
        height: preLoading ? "100vh" : "100%",
        overscrollBehavior: "none",
        overflowY: "hidden",
        background: preLoading
          ? "#182833"
          : `url(${Background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundBlendMode: "overlay",
        backgroundPosition: "35%",
        // background: preLoading
        //   ? "rgb(51,51,51)"
        //   : "linear-gradient(180deg, rgba(8,22,40,1) 0%, rgba(23,51,67,1) 25%, rgba(52,102,135,1) 50%, rgba(62,136,186,1) 75%, rgba(91,150,191,1) 100%)",
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
              sx={{ paddingTop: "5rem", gap: "10rem" }}
            >
              <Reveal>
                <About />
              </Reveal>
              {showExperience && <Experience />}
              <Skills />
              <Projects />
              <Reveal>
                <Contact />
              </Reveal>
              <Reveal>
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
