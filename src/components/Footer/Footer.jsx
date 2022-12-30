import React from 'react'
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='flex flex-col w-full'>
            <hr />
            <div className='bg-black p-5 flex flex-row justify-center items-center'>
                <div className='flex flex-row justify-evenly items-center w-3/4'>
                    <a href="mailto:">
                        <FaEnvelope className='fill-white' />
                    </a>
                    <a href="tel:+">
                        <FaPhoneAlt className='fill-white' />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='fill-white' />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className='fill-white' />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp className='fill-white' />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <FaFacebookF className='fill-white' />
                    </a>
                </div>
            </div>
            <hr />
            <div className='p-3 bg-black text-white flex justify-center items-center text-sm'>
                © 2022 The Space Association, BVM. All Rights Reserved.
            </div>
        </div>
    )
}

export default Footer