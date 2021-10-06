import React from 'react';
import '../styles/reset.css';
import '../styles/style.css';

export default function Projects() {
    return (
        <section id="work">
            <h2>Work</h2>
            <section class="projects">
                <ul>
                    <li class="project-1 project">
                        <a href="https://jpolmon.github.io/Project01" target="_blank" rel="noreferrer"><img src="./assets/images/homepage.jpg" alt="Image for project 1"/><span class="soon">New Tab Homepage</span></a><br/><a class= "repo" href="https://github.com/jpolmon/Project01" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                    <li class="project-2 project">
                        <a href="https://jpolmon.github.io/WeatherHW06/" target="_blank" rel="noreferrer"><img src="./assets/images/weather.jpg" alt="Image for project 2"/><span class="soon">Weather Dashboard</span></a><br/><a class="repo repo-left" href="https://github.com/jpolmon/WeatherHW06" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                    <li class="project-3 project">
                        <a href="https://jpolmon.github.io/PWGenHW03/" target="_blank" rel="noreferrer"><img src="./assets/images/pw-gen.jpg" alt="Image for project 3"/><span class="soon">Password Generator</span></a><br/><a class="repo repo-right" href="https://github.com/jpolmon/PWGenHW03" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                    <li class="project-4 project">
                        <a href="#"><img src="./assets/images/project-4.jpg" alt="Image for project 4" rel="noreferrer"/><span class="soon">Coming Soon!</span></a>
                    </li>
                    <li class="project-5 project">
                        <a href="#"><img src="./assets/images/project-5.jpg" alt="Image for project 5" rel="noreferrer"/><span class="soon">Coming Soon!</span></a>
                    </li>
                </ul>
            </section>
        </section>
    )
}
