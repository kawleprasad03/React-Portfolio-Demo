import React from 'react'
import {CONTACT} from '../constants'
import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 
        initial={{y: -100, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 1}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h2>
        <div className='text-center tracking-tighter'>
            <motion.p 
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className='my-4'>{CONTACT.address}</motion.p>
            <motion.p 
            initial={{x: 100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className='my-4'>{CONTACT.phoneNo}</motion.p>
            <motion.p
            initial={{x: -100, opacity: 0}}
            whileInView={{x: 0, opacity: 1}}
            transition={{duration: 1}}
            className='my-4'>
                <a href="#" className='border-b'>{CONTACT.email}</a>
            </motion.p>
        </div>
    </div>
  )
}

export default Contact