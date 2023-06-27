import React from 'react'
import { useState, useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import '../assets/css/NavBar.css'

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('')
    const [scrolled, setScrolled] = useState(false)
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)

        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const updateActiveLink = (link) => {
        setActiveLink(link)
        setExpanded(expanded ? false : "expanded")
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""} expanded={expanded}>
            <Container>
                <Navbar.Brand href="/" className="brand" onClick={() => updateActiveLink('')}>CY</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}>
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('about')}>About</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('experience')}>Experience</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => updateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/2023cyang/" target="_blank" rel="noreferrer">
                                <img src={navIcon1} alt="LinkedIn" />
                            </a>
                            <a href="https://github.com/ElemelonWind" target="_blank" rel="noreferrer">
                                <img src={navIcon2} alt="GitHub" />
                            </a>
                            <a href="https://www.instagram.com/c.yang.2023/" target="_blank" rel="noreferrer">
                                <img src={navIcon3} alt="Instagram" />
                            </a>
                        </div>
                        <div className="button-container">
                            <button className="contact" onClick={() => console.log('connect')}>
                                <span>Contact</span>
                            </button>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar