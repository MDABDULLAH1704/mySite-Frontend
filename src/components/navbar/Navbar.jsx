import React from 'react'
import './Navbar.css'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GiHamburgerMenu } from 'react-icons/gi'
import { FaTimes } from 'react-icons/fa'
import AOS from 'aos'
import 'aos/dist/aos.css'


const Navbar = () => {
    // For AOS Animation
    useEffect(() => {
        AOS.init({
            duration: 500
        });
    }, []);

    // Active Menu
    const [menu, setMenu] = useState("home")

    // Hamburger Icon will show or not
    const [show, setShow] = useState(false);

    // Fixing Navbar on Scroll 
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (

        <header className={isFixed ? 'fixed' : ''}>
            <div className='nav'>
                <div className='logo' onClick={() => { setMenu("home") }}>
                    <Link to='/' className='nav-Link'><i>MySite</i></Link>
                </div>

                {/* 1st Method */}

                {/* 2nd Method */}
                <div className={show ? "nav-menu showmenu" : "nav-menu"}>
                    <li onClick={() => setShow(!show)} data-aos="flip-right"><Link to='/' className='nav-menu-Link' >Home</Link></li>
                    <li onClick={() => setShow(!show)} data-aos="flip-right"><Link to='/about' className='nav-menu-Link' >About</Link></li>
                    <li onClick={() => setShow(!show)} data-aos="flip-right"><Link to='/blog' className='nav-menu-Link' >Blog</Link></li>
                    {/* <li onClick={() => setShow(!show)} data-aos="flip-right"><Link to='/shop' className='nav-menu-Link' >Shop</Link></li> */}
                    <li onClick={() => setShow(!show)} data-aos="flip-right"><Link to='/contact' className='nav-menu-Link' >Contact</Link></li>

                    <Link to='/login' className='login-Link'>
                        <button className='login' data-aos="fade-left" onClick={() => setShow(!show)}>
                            Login
                        </button>
                    </Link>
                    <Link to='/signup' className='login-Link'>
                        <button className='login' data-aos="fade-left" onClick={() => setShow(!show)}>
                            SignUp
                        </button>
                    </Link>
                </div>

                <div className="hamburger" onClick={() => setShow(!show)}>
                    {show === false ? <GiHamburgerMenu /> : <FaTimes />}
                </div>
            </div >
        </header>
    )
}

export default Navbar
