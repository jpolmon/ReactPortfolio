import React from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';


export default function PageContainer() {
    return (
        <div>
            <Header/>
            <Hero />
            <AboutMe/>
            <Projects/>
        </div>
    )
}