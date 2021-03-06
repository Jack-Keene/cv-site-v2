import React from 'react';
import './index.css';
import Navbar from './navigation/Navbar';
import About from './pages/About';
import Landing from './pages/Landing'
import Projects from './pages/ProjectsUpdate';
import Contact from './pages/Contact';
import Logos from './navigation/Logos';
import ExperienceUpdate from './pages/ExperienceUpdate';

function App() {
    return (
        <div>
            <Navbar />
            <Logos />
            <Landing />
            <About  />
            <ExperienceUpdate />
            <Projects />
            <Contact />
        </div>            
        );
}

export default App;