import './App.css'
import { useEffect, useState } from 'react'
import { CssBaseline } from '@mui/material'
import Navbar from './layout/Navbar'
import About from './layout/About'
import Experience from './layout/Experience'
import Skills from './layout/Skills'
import Projects from './layout/Projects'
import Contact from './layout/Contact'
import Sides from './layout/Sides'
import Footer from './layout/Footer'
import Reveal from './components/Reveal'
import { Stack, useMediaQuery } from '@mui/material'
import Resume from './layout/Resume'
import Loader from './components/Loader'

function App() {
  const isTablet = useMediaQuery('(max-width: 70em)')
  const [openResume, setOpenResume] = useState(false)
  
  const [preLoading, setPreLoading] = useState(true)
  const preload = () => setTimeout(() => setPreLoading(false), 2000) // time is relative to the animation duration
  useEffect(() => {
    preload();
    return () => clearTimeout(preload)  
  }, [])


  
  return (
    preLoading ? (
      <>
        <CssBaseline/>
        <Loader />
      </>
    ) : (
      <div className='app'>
        <CssBaseline/>
        <Navbar setOpenResume={setOpenResume}/>
        {
          openResume ?
              <Resume />
            : (
              <Stack component="main">
                <Reveal>
                  <About/>
                </Reveal>
                <Experience />
                <Skills/>
                <Projects/>
                <Reveal>
                  <Contact/>
                </Reveal>
                <Reveal>
                  { !isTablet ? (<Sides/>) : (<Footer/>) }
                </Reveal>
              </Stack>
            )
        }
      </div>
    )
  )
}

export default App
