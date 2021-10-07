import React, { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import ContactMe from './pages/ContactMe';

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe')
    
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Projects') {
            return <Projects />;
        }
        return;
    }
    
    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header handlePageChange={handlePageChange} />
            <Hero />
            {renderPage()}
        </div>
    )
}