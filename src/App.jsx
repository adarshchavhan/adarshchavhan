import React, { useEffect, useState } from 'react'
import ThemeWrapper from './style/ThemeWrapper'
import Header from './components/Header';
import Hero from './components/Hero';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme")==='dark'?'dark':'light');

    const handleTheme = () => {
        setTheme(theme==='dark' ? 'light' : 'dark');
        localStorage.setItem('theme', theme==='dark' ? 'light' : 'dark');
    }

    useEffect(()=>{
        Aos.init({
            duration: 900,
            delay: 100
        })
    },[theme])

  return (
    <ThemeWrapper {...{theme}}>
        <Header {...{theme, handleTheme}} />
        <Hero/>
        <Skills/>
        <Projects/>
        <Contact/>
        <Footer/>
    </ThemeWrapper>
  )
}

export default App