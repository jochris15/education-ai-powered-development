import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'

export const Layout = () => {
    const location = useLocation()
    const [currentSection, setCurrentSection] = useState('home')

    // Update current section based on route
    useEffect(() => {
        const path = location.pathname
        if (path === '/') {
            setCurrentSection('home')
        } else if (path.startsWith('/about')) {
            setCurrentSection('about')
        } else if (path.startsWith('/projects')) {
            setCurrentSection('projects')
        } else if (path.startsWith('/skills')) {
            setCurrentSection('skills')
        } else if (path.startsWith('/contact')) {
            setCurrentSection('contact')
        }
    }, [location])

    return (
        <div className="min-h-screen bg-yellow-300 font-mono">
            <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />
            <main>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}