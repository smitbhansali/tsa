import React from 'react'
import { FaEnvelope, FaInstagram, FaLinkedinIn, FaWhatsapp, FaPhoneAlt, FaFacebookF } from 'react-icons/fa'
import earth from '../../assets/earth.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='w-full'>
                <img src={earth} alt="earth" className='earthimage' />
            </div>
            <div className='text-white text-9xl font-sans p-3 mb-48'>
                The<br /> Space<br /> Association
            </div>
            <div className='container1 flex flex-col justify-start items-start text-white text-3xl font-sans p-3'>
                <span className='pl-6'>What is the space association?</span>
                <div className='text-white text-xl font-sans p-3 m-3 w-1/2'>
                    It is very important for the customer to pay attention to the adipiscing process. Life will never be different. Or do they not know that the wise man will rebuke the inflexibility of the born, whence the result is that the blinded inventor will often be surprised?
                </div>
            </div>
            <div className='bg-black flex flex-col justify-end items-end text-white text-3xl font-sans pt-40 p-3'>
                <span className='pr-52'>What is the space association?</span>
                <div className='text-white text-xl font-sans p-3 m-3 w-1/2'>
                    It is very important for the customer to pay attention to the adipiscing process. Life will never be different. Or do they not know that the wise man will rebuke the inflexibility of the born, whence the result is that the blinded inventor will often be surprised?
                </div>
            </div>
            <div className='flex flex-col justify-center items-center w-full bg-black pt-20'>
                <div className='text-white text-3xl m-3 p-3'>
                    Contact Us
                </div>
                <iframe
                    className='w-full h-96 m-3 p-3'
                    title='bvmaddress'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7105367330255!2d72.9216363148818!3d22.552513585193108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4e74c03b7749%3A0xab364c66fd4834c!2sBirla%20Vishvakarma%20Mahavidyalaya%20(BVM)!5e0!3m2!1sen!2sin!4v1648932714346!5m2!1sen!2sin" />
            </div>
            <hr />
            <div className='bg-black p-5 flex flex-row justify-evenly items-center'>
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
            <hr />
            <div className='p-3 bg-black text-white flex justify-center items-center text-sm'>
                © 2022 The Space Association, BVM. All Rights Reserved.
            </div>
        </div>
    )
}

export default Home