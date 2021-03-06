import React from 'react';
import '../index.css'
import MatesGif from '../images/mates-lads-gif.gif'
import PortfolioGif from '../images/portfolio-gif.gif'
import Mates from '../images/mates.png'
import Portfolio from '../images/portfolio.png'
import AV from '../images/av.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import Rotate from '../components/Rotate';

import Bounce from 'react-reveal'


function Project(props) {
    return (
        <Bounce fraction={1} left={props.project.position==='left'} right={props.project.position==='right'}>
        <div className={'project project-' + props.project.position}>
            <img src={props.project.gif} alt="background"></img>
            <img src={props.project.image} className='static' alt="background"></img>
            <div className='info'>
                <h5>{props.project.number}</h5>
                <h2 >{props.project.name}</h2>
                <p>{props.project.description}</p>
                <h4>{props.project.tech}</h4>
                <div className='links'>
                    <a href={props.project.github} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faGithub} pull='right' size='1' /></a>
                    <a href={props.project.link} target='_blank' rel="noreferrer" ><FontAwesomeIcon icon={faExternalLinkAlt} pull='right' size='1' /></a>
                </div>
            </div>
        </div>
        </Bounce>
    )
}

function App() {

    const projects = [
        {
            number: "01.",
            code: "football",
            name: "Mates/Lads FC",
            image: Mates,
            gif: MatesGif,
            tech: "Python Flask PostgreSQL HTML CSS",
            github: "https://github.com/Jack-Keene/thursday-football",
            link: "https://mates-lads-fc.herokuapp.com",
            description: "This website was designed and built for a local football team using Flask and Postgres and hosted on Heroku. The site allows users to track fixtures and results, individual player stats and shows a league table.",
            position: "left"
        },
        {
            number: "02.",
            code: "autoview",
            name: "AutoView",
            image: AV,
            gif: AV,
            tech: "Python Flask PostgreSQL HTML Bootstrap",
            github: "https://github.com/Jack-Keene/autoview-v1",
            link: "https://autoview.herokuapp.com/",
            description: "AutoView is a dealer management system built using Flask, Postgres and Bootstrap. There are three levels of user access providing a different experience for customers, dealers and manufacturers.",
            position: "right"
        },
        {
            number: "03.",
            code: "portfolio",
            name: "Portfolio Website",
            image: Portfolio,
            gif: PortfolioGif,
            tech: "React.js HTML CSS",
            github: "https://github.com/Jack-Keene/cv-site-v2",
            link: "https://jackkeene.com/",
            description: "Personal website built in React.js",
            position: "left"
        }

    ]
    return (
        <div id="projects" className='section projects'>
            <Rotate text="PROJECTS"/>     
            <div className='projects-list'> 
                {projects.map((project, index) => (
                    <Project key={index} index={index} project={project} />
                ))}
            </div>
        </div>
    )
}

export default App;
