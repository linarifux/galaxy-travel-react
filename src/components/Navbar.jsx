import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'

import './navbar.css'

const Navbar = () => {
    const [menuActive, setMenuActive] = useState(false)

    const handleClick = () => {
        setMenuActive(!menuActive)
    }

    const [navColor, setNavColor] = useState(false)

    const changeNavColor = () => {
        if(window.scrollY >= 100){
            setNavColor(true)
        }else{
            setNavColor(false)
        }
    }

    window.addEventListener('scroll', changeNavColor)

    return (
        <div className={navColor ? 'header header-bg' : 'header'}>
            <Link to={'/'}><h1>GALAXY TRAVEL</h1></Link>
            <ul className={menuActive ? 'nav-menu active' : 'nav-menu'}>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/pricing'}>Pricing</Link>
                </li>
                <li>
                    <Link to={'/training'}>Training</Link>
                </li>
                <li>
                    <Link to={'/contact'}>Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {menuActive ? <FaTimes size={20} style={{ color: '#fff' }} /> : <FaBars size={20} style={{ color: '#fff' }} />}
            </div>
        </div>
    )
}

export default Navbar