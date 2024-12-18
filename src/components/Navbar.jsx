import React from 'react'
// import logo from "../assets/ravikumarLogo.webp"
import reactImg from '../assets/reactjs-removebg-preview.png'
import {FaGithub, FaInstagram, FaLinkedin, FaSquareXTwitter, FaTwitter, FaXTwitter} from 'react-icons/fa6'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'> 
            <a href='/' aria-label='Home'>
               <img src={reactImg} className='mx-2' width={50} height={33} alt='Logo'/>
                
            </a>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <a href="https://www.linkedin.com/in/shridhar-n-755027266"
               target='_blank'
               rel='noopener noreferrer'
               aria-label='LinkedIn'>
                <FaLinkedin />
            </a>
            <a href="https://www.linkedin.com/in/shridhar-n-755027266"
               target='_blank'
               rel='noopener noreferrer'
               aria-label='GitHub'>
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shridhar-n-755027266"
               target='_blank'
               rel='noopener noreferrer'
               aria-label='Instagram'>
                <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/in/shridhar-n-755027266"
               target='_blank'
               rel='noopener noreferrer'
               aria-label='Twitter'>
                <FaSquareXTwitter />
            </a>

        </div>
    </nav>
  )
}

export default Navbar