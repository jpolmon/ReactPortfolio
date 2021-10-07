import React from 'react';
import '../../styles/reset.css';
import '../../styles/style.css';
import project1 from '../../assets/images/homepage.jpg';
import project2 from '../../assets/images/weather.jpg';
import project3 from '../../assets/images/pw-gen.jpg';
import project4 from '../../assets/images/project-4.jpg';
import project5 from '../../assets/images/project-5.jpg';


export default function Projects() {
    return (
        <section id="work">
            <span class="anchor" id="work-anchor"></span>
            <h2>Work</h2>
            <section class="projects">
                <ul>
                    <li class="project-1 project">
                        <a href="https://jpolmon.github.io/Project01" target="_blank" rel="noreferrer"><img src={project1} alt="homepage project"/><span class="soon">New Tab Homepage</span></a><br/><a class= "repo" href="https://github.com/jpolmon/Project01" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                    <li class="project-2 project">
                        <a href="https://jpolmon.github.io/WeatherHW06/" target="_blank" rel="noreferrer"><img src={project2} alt="weather app project"/><span class="soon">Weather Dashboard</span></a><br/><a class="repo repo-left" href="https://github.com/jpolmon/WeatherHW06" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                    <li class="project-3 project">
                        <a href="https://jpolmon.github.io/PWGenHW03/" target="_blank" rel="noreferrer"><img src={project3} alt="password generator project"/><span class="soon">Password Generator</span></a><br/><a class="repo repo-right" href="https://github.com/jpolmon/PWGenHW03" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                    <li class="project-4 project">
                        <a href="#"><img src={project4} alt="coming soon" rel="noreferrer"/><span class="soon">Coming Soon!</span></a>
                    </li>
                    <li class="project-5 project">
                        <a href="#"><img src={project5} alt="coming soon" rel="noreferrer"/><span class="soon">Coming Soon!</span></a>
                    </li>
                </ul>
            </section>
        </section>
    )
}
