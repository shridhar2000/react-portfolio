import React from 'react'
// import profilePic from '../assets/raviKumarProfile.webp'
// import myImgColor from '../assets/myimg_Color.png'
import { HERO_CONTENT } from '../constants'
import { motion } from 'framer-motion'
import myImg from '../assets/myimg_BW.png'

  const containerVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.5,
      },
    },
  }

  const childVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  }

const Hero = () => {
  return (
    <div className='pb-4 lg:mb-36'>
      <div className='flex flex-col items-center'>
        {/* Profile Picture */}
        <motion.img
          src={myImg}
          alt='Shridhar'
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          width={200}
          height={200}
          className='border border-stone-900 rounded-3xl mb-6'
        />

        {/* Motion Content */}
        <motion.div
          initial='hidden'
          animate='visible'
          variants={containerVariants}
          className='flex flex-col items-center space-y-4'
        >
          <motion.h2
            variants={childVariants}
            className='bg-gradient-to-r from-stone-100 to-stone-600 bg-clip-text text-4xl tracking-tight text-transparent'
          >
            Shridhar
          </motion.h2>
          <motion.span
            variants={childVariants}
            className='bg-gradient-to-r from-pink-300 via-slate-500
            to-purple-500 bg-clip-text text-4xl tracking-tight
            text-transparent xs-range:text-[28px]'
          >
            ReactJS Developer
          </motion.span>
          <motion.p
            variants={childVariants}
            className='max-w-full py-6 text-xl text-center'
          >
            {HERO_CONTENT}
          </motion.p>
          <motion.a
            variants={childVariants}
            href='/shridhar.react.pdf'
            target='_blank'
            rel='noopener noreferrer'
            download
            className='bg-white rounded-full px-6 py-3 text-sm text-stone-800'
          >
            Download Resume
          </motion.a>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero


