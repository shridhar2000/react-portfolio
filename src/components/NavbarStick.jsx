import React, { useState } from 'react';
import { IoMdMenu, IoMdClose } from 'react-icons/io';
import sriImg from '../assets/SRI_imgLogo.png'
// import logo from "../assets/ravikumarLogo.webp";
import{motion} from 'framer-motion'

const NavbarMenu = [
    {
        id: 1,
        title: 'Home',
        path: '/',
    },
    {
        id: 2,
        title: 'Technologies',
        path: '#Technologies',
    },
    {
        id: 3,
        title: 'Projects',
        path: '#Projects',
    },
    {
        id: 4,
        title: 'Experience',
        path: '#Experience',
    },
    {
        id: 5,
        title: 'Contact',
        path: '#contact-us',
    },
];

const NavbarStick = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="z-50">
            <div className="container py-4 flex items-center justify-between">
                {/* Logo Section */}
                <div>
                    <motion.img
                    whileInView={{ opacity: 1, y: 0 }}
                    initial= {{opacity: 0, y: -40}}
                    transition= {{duration: 0.5}}
                        src={sriImg}
                        className="mx-2 text-2xl flex items-center gap-2 font-bold"
                        width={90}
                        height={63}
                        alt="Logo"
                    />
                </div>

                {/* Desktop Menu */}
                <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial= {{opacity: 0, y: -40}}
                transition= {{duration: 0.5}}
                className="hidden lg:block">
                    <ul className="flex gap-5 items-center ">
                        {NavbarMenu.map((menu) => (
                            <li key={menu.id}>
                                <a
                                    href={menu.path}
                                    className="inline-block py-2 px-3 hover:text-secondary relative group"
                                >
                                    <div
                                        className="w-2 h-2 bg-secondary absolute mt-2 rounded-full left-1/2 -translate-x-1/2 top-1/2
                                    bottom-0 group-hover:block hidden"
                                    ></div>
                                    {menu.title}
                                </a>
                            </li>
                        ))}
                        {/* <button className="primary-btn">Contact Me</button> */}
                    </ul>
                </motion.div>

                {/* Mobile Menu Icon */}
                <motion.div 
                whileInView={{ opacity: 1, y: 0 }}
                initial= {{opacity: 0, y: -50}}
                transition= {{duration: 0.5}}
                className="lg:hidden">
                    <button onClick={toggleMenu} aria-label="Toggle Menu">
                        {isMenuOpen ? (
                            <IoMdClose className="text-4xl" />
                        ) : (
                            <IoMdMenu className="text-4xl" />
                        )}
                    </button>
                </motion.div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="lg:hidden bg-gray shadow-md">
                    <ul className="flex flex-col items-center gap-5 py-5">
                        {NavbarMenu.map((menu) => (
                            <motion.li 
                            whileInView={{ opacity: 1, x: 0 }}
                            initial= {{opacity: 0, x: 100}}
                            transition= {{duration: 1}}
                            key={menu.id}>
                                <a
                                    href={menu.path}
                                    className="text-lg hover:text-secondary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {menu.title}
                                </a>
                            </motion.li>
                        ))}
                        {/* <button className="primary-btn">Contact Me</button> */}
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavbarStick;
