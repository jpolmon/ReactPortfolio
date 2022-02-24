import React from 'react';
import '../../styles/reset.css';
import '../../styles/style.css';
import project1 from '../../assets/images/hospital.jpg';
import project2 from '../../assets/images/war-helper.jpg';
import project3 from '../../assets/images/homepage.jpg';
import project4 from '../../assets/images/weather.jpg';
import project5 from '../../assets/images/employee-manager.jpg';


export default function Projects() {
    return (
        <section id="work">
            <span className="anchor" id="work-anchor"></span>
            <h2>Work</h2>
            <section className="projects">
                <ul>
                    {/* Hospital Dahboard 620x400*/}
                    <li className="project-1 project">
                        <a href="https://youtu.be/p8kVEH_f748" target="_blank" rel="noreferrer"><img src={project1} alt="hospital dashboard project"/><span className="soon">Hospital Dashboard</span></a><br/><a className= "repo" href="https://github.com/jpolmon/HospitalDashboard" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                    {/* War Helper */}
                    <li className="project-2 project">
                        <a href="https://new-world-war-helper.herokuapp.com/" target="_blank" rel="noreferrer"><img src={project2} alt="war helper project"/><span className="soon">War Helper</span></a><br/><a className="repo repo-left" href="https://github.com/JeffM33/WarHelper" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                    {/* Website Homepage */}
                    <li className="project-3 project">
                        <a href="https://jpolmon.github.io/NewTabHomepage" target="_blank" rel="noreferrer"><img src={project3} alt="homepage project"/><span className="soon">New Tab Homepage</span></a><br/><a className= "repo repo-right" href="https://github.com/jpolmon/NewTabHomepage" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                    {/* Weather Dashboard */}
                    <li className="project-4 project">
                        <a href="https://jpolmon.github.io/WeatherDashboard/" target="_blank" rel="noreferrer"><img src={project4} alt="weather app project"/><span className="soon">Weather Dashboard</span></a><br/><a className="repo repo-left" href="https://github.com/jpolmon/WeatherDashboard" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                    {/* Employee Manager */}
                    <li className="project-5 project">
                        <a href="https://youtu.be/JPDCfV4Z2LU" target="_blank" rel="noreferrer"><img src={project5} alt="employee management project"/><span className="soon">SQL Employee Manager</span></a><br/><a className="repo repo-right" href="https://github.com/jpolmon/EmployeeManager" target="_blank" rel="noreferrer">Go to Repository</a>
                    </li>
                </ul>
            </section>
        </section>
    )
}
