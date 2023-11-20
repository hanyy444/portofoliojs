import "./App.css";
import { lazy, useEffect, useState, Suspense } from "react";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Loader from "./components/Loader";
import Navbar from "./layout/Navbar";
import About from "./layout/About";
import Experience from "./layout/Experience";
import Skills from "./layout/Skills";
import Projects from "./layout/Projects";
import Contact from "./layout/Contact";
import Reveal from "./components/Reveal";

const Resume = lazy(() => import("./layout/Resume"));
const Sides = lazy(() => import("./layout/Sides"));
const Footer = lazy(() => import("./layout/Footer"));

function App() {
  const isTablet = useMediaQuery("(max-width: 70em)");
  const [openResume, setOpenResume] = useState(false);

  const [preLoading, setPreLoading] = useState(true);
  const preload = () =>
    setTimeout(() => setPreLoading(false), 1200); // time is relative to the animation duration
  useEffect(() => {
    preload();
    return () => clearTimeout(preload);
  }, []);

  const params = new URLSearchParams(
    window.location.search
  );

  const showExperience = params.get("showExperience")
    ? params.get("showExperience") === "true"
    : true;

  const showResume = params.get("showResume")
    ? params.get("showResume") === "true"
    : false;

  return preLoading ? (
    <>
      <CssBaseline />
      <Loader />
    </>
  ) : (
    <div className="app">
      <CssBaseline />
      <Navbar
        setOpenResume={setOpenResume}
        showExperience={showExperience}
        showResume={showResume}
      />
      <Suspense>
        {openResume && showResume ? (
          <Resume />
        ) : (
          <Stack component="main">
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
      </Suspense>
    </div>
  );
}

export default App;
