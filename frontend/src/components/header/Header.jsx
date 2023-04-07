import React, { useState } from 'react'
import './header.css'
import {FaBars, FaTimes} from 'react-icons/fa'


function Header() {

    const [nav, setNav] = useState(false) ;
    const links = [
        {
            id :1, 
            link: 'Home'
        },
        {
            id :2, 
            link: 'About'
        },
        {
            id :3, 
            link: 'Services'
        },
        {
            id :4, 
            link: 'Skills'
        },
        {
            id :5, 
            link: 'Projects'
        },
        {
            id :6, 
            link: 'Contact'
        },
    ]

    return (
        <header className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center">
            <h1 className="text-5xl font-signature cursor-pointer"><a href="/">Gokool</a></h1>
            <nav>
                <ul className="hidden md:flex space-x-6 ">
                    {links.map(({id, link}) => (
                        <li key={id} className='hover:scale-105 duration-200 hover:text-gray-400'><a href="/">{link}</a></li>                    
                    ))}
                </ul>

                <div onClick={() => setNav(!nav)}
                    className="cursor-pointer pr-4 z-10 text-white">
                    {nav ? <FaTimes size={30}/> : <FaBars size={30} />}
                </div>

            </nav>
        </header>
    );
}

export default Header;