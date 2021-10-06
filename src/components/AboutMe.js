import React from 'react';
import '../styles/reset.css';
import '../styles/style.css';

export default function AboutMe() {
    return (
        <section id="about-me">
        <h2>About Me</h2>

            <section class="about-me-body">
                
                <img src="assets/images/profile-pic-flat.jpg" alt="My profile picture"/>
                
                <p>Welcome to my portfolio! I am an aspiring Software Developer who is kickstarting their career through a coding bootcamp. So far I have learned the basics of web disign utilizing HTML, CSS, and JavaScript. In addition to basic design and funcitonality I have learned how to implement information from public API's as well as utilize the browsers local storage to maintain persistent page elements based on user inputs. I plan to continue to develop my skills throughout the course so that I am able to be a competative candidate for developer positions after graduation.</p>
                <p id="rec">Outside of software development I have several hobbys that I spend my free time doing. I have had a life-long passion for cars, which has lead to many great experiences. I also compete in Olympic style weightlifting to help blow off some steam after a long day of coding.</p>
            </section>
    </section>
    )
}
