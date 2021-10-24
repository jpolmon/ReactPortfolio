import React from 'react';
import '../../styles/reset.css';
import '../../styles/style.css';
import profileImg from '../../assets/images/profile-pic-flat.jpg'

export default function AboutMe() {
    return (
        <section id="about-me">
            <span className="anchor" id="about-me-anchor"></span>
            <h2>About Me</h2>

                <section className="about-me-body">
                    
                    <img src={profileImg} alt="Me sitting by my car"/>
                    
                    <p>Welcome to my portfolio! I am a full stack software developer looking to leverage project management experience in the oil and gas industry to build applications that better meet user needs. I recently earned a certificate in full stack development from Southern Methodist University bringing newly developed skills in JavaScript, React.js, SQL, MongoDB, and bringing it all together in the form of the MERN stack to produce responsive web design. In every project I aim to bring the high-level perspective gained in my time as a project manager as well as my passion for getting into the nitty-gritty details of a problem in order to find a solution. I am excited for the chance to demonstrate these skills as part of a goal-oriented team in a professional setting.</p>
                    <p id="rec">Outside of software development I have several hobbies that I spend my free time doing. I have had a life-long passion for cars, which has lead to many great experiences and friends. I also compete in Olympic-style weightlifting to help blow off some steam after a long day of coding.</p>
                </section>
        </section>
    )
}
