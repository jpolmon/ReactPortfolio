import React from 'react';
import '../styles/reset.css';
import '../styles/style.css';

export default function Links() {
    return (
        <section id="contact-me">
            <span class="anchor" id="contact-me-anchor"></span>
            <h2>Contact Me</h2>
            <ul>
                <li> 
                    <a href="tel:832-785-7447"><i class="fas fa-phone-square"></i></a>
                </li>
                <li>
                    <a href="mailto:jonathan.olmon@gmail.com"><i class="fas fa-envelope-square"></i></a>
                </li>
                <li>
                    <a href="https://github.com/jpolmon" target="_blank" rel="noreferrer"><i class="fab fa-github-square"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/jonathan-olmon-b3a0a5104/" target="_blank" rel="noreferrer"><i class="fab fa-linkedin"></i></a>
                </li>
            </ul>
        </section>
    )
}