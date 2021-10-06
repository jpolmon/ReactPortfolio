import React from 'react';
import '../styles/reset.css';
import '../styles/style.css';

export default function ContactMe() {
    return (
        <section id="contact-me">
        <h2>Contact Me</h2>
        <ul>
            <li> 
                <a href="tel:832-785-7447">832-785-7447</a>
            </li>
            <li>
                <a href="mailto:jonathan.olmon@gmail.com">jonathan.olmon@gmail.com</a>
            </li>
            <li>
                <a href="https://github.com/jpolmon" target="_blank" rel="noreferrer">GitHub</a>
            </li>
            <li>
                <a href="https://www.linkedin.com/in/jonathan-olmon-b3a0a5104/" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
        </ul>
    </section>
    )
}
