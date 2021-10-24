import React from 'react';
import '../styles/reset.css';
import '../styles/style.css';

let aboutMe = '#about-me-anchor';
let work = '#work-anchor';
let contact = '#contact-me-anchor';
let resume = 'https://docs.google.com/document/d/1JwlKGPARHpQ0AW21FeEikw3oWNy3YIB53G2EzriqCxA/edit?usp=sharing'

export default function Header() {

    return (
        <div>
            <header>
                <h2>Jonathan Olmon</h2>        
                <nav>   
                    <ul>
                        <li> 
                            <a href={aboutMe}>About Me</a>
                        </li>
                        <li>
                            <a href={work}>Projects</a>
                        </li>
                        <li>
                            <a href={contact}>Contact Me</a>
                        </li>
                        <li>
                            <a href={resume} target="_blank" rel="noreferrer">Resume</a>
                        </li>
                    </ul>
                </nav> 
            </header>
        </div>
    )
}
