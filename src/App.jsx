import "./App.css";
import { lazy, useEffect, useState, Suspense } from "react";
import Stack from "@mui/material/Stack";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Loader from "./components/Loader";
import Spinner from "./components/Spinner";
import { useTheme } from "@mui/material";

const Navbar = lazy(() => import("./layout/Navbar"));
const About = lazy(() => import("./layout/About"));
const Experience = lazy(() =>
  import("./layout/Experience")
);
const Skills = lazy(() => import("./layout/Skills"));
const Projects = lazy(() => import("./layout/Projects"));
const Contact = lazy(() => import("./layout/Contact"));
const Reveal = lazy(() => import("./components/Reveal"));

const Resume = lazy(() => import("./layout/Resume"));
const Sides = lazy(() => import("./layout/Sides"));
const Footer = lazy(() => import("./layout/Footer"));

function App() {
  const theme = useTheme();
  const isTablet = useMediaQuery(
    theme.breakpoints.down("md")
  );

  const [openResume, setOpenResume] = useState(false);

  const [preLoading, setPreLoading] = useState(true);
  const preload = () =>
    setTimeout(() => setPreLoading(false), 1000); // time is relative to the animation duration
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

  return preLoading ? (
    <>
      <CssBaseline />
      <Loader />
    </>
  ) : (
    <div className="app background-image">
      <CssBaseline />
      <Navbar
        setOpenResume={setOpenResume}
        showExperience={showExperience}
        showResume={showResume}
      />
      <Suspense fallback={<Spinner />}>
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
