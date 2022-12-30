import React from 'react'
import { FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa'
import blackhole from '../../assets/blackhole.jpg'
import avatar from '../../assets/avatar.webp'
import './Team.css'

const Team = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className='w-full'>
                <img src={blackhole} alt="blackhole" className='blackholeimage' />
            </div>
            <div className='text-white text-9xl font-sans p-3 mb-48'>
                Meet The <br /> Team
            </div>
            <div className='container1 flex flex-wrap justify-center items-center font-sans p-3'>
                <div className='w-1/4 m-10 flex flex-col justify-center items-center glassmorphism p-10 transition grayscale delay-200 hover:grayscale-0 duration-500'>
                    <div>
                        <img src={avatar} alt="avatar" width={200} height={200} className='rounded-full ' />
                    </div>
                    <div className='text-white text-3xl text-cyan-300 p-2' >
                        Smit Bhansali
                    </div>
                    <div className='text-white text-lg text-cyan-300 p-2' >
                        Developer
                    </div>
                    <div className='text-center text-white text-sm text-cyan-300 p-2' >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nam impedit vero ea. Ratione rerum dolorum alias, tenetur voluptatum eligendi? Vitae perspiciatis necessitatibus excepturi soluta! Eaque quo incidunt nihil adipisci.
                    </div>
                    <div className='p-2 flex justify-evenly items-center w-1/2'>
                        <a href="mailto:">
                            <FaEnvelope className='fill-cyan-300' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='fill-cyan-300' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='fill-cyan-300' />
                        </a>
                    </div>
                </div>
                <div className='w-1/4 m-10 flex flex-col justify-center items-center glassmorphism p-10 transition grayscale delay-200 hover:grayscale-0 duration-500'>
                    <div>
                        <img src={avatar} alt="avatar" width={200} height={200} className='rounded-full ' />
                    </div>
                    <div className='text-white text-3xl text-cyan-300 p-2' >
                        Smit Bhansali
                    </div>
                    <div className='text-white text-lg text-cyan-300 p-2' >
                        Developer
                    </div>
                    <div className='text-center text-white text-sm text-cyan-300 p-2' >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nam impedit vero ea. Ratione rerum dolorum alias, tenetur voluptatum eligendi? Vitae perspiciatis necessitatibus excepturi soluta! Eaque quo incidunt nihil adipisci.
                    </div>
                    <div className='p-2 flex justify-evenly items-center w-1/2'>
                        <a href="mailto:">
                            <FaEnvelope className='fill-cyan-300' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='fill-cyan-300' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='fill-cyan-300' />
                        </a>
                    </div>
                </div>
                <div className='w-1/4 m-10 flex flex-col justify-center items-center glassmorphism p-10 transition grayscale delay-200 hover:grayscale-0 duration-500'>
                    <div>
                        <img src={avatar} alt="avatar" width={200} height={200} className='rounded-full ' />
                    </div>
                    <div className='text-white text-3xl text-cyan-300 p-2' >
                        Smit Bhansali
                    </div>
                    <div className='text-white text-lg text-cyan-300 p-2' >
                        Developer
                    </div>
                    <div className='text-center text-white text-sm text-cyan-300 p-2' >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nam impedit vero ea. Ratione rerum dolorum alias, tenetur voluptatum eligendi? Vitae perspiciatis necessitatibus excepturi soluta! Eaque quo incidunt nihil adipisci.
                    </div>
                    <div className='p-2 flex justify-evenly items-center w-1/2'>
                        <a href="mailto:">
                            <FaEnvelope className='fill-cyan-300' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='fill-cyan-300' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='fill-cyan-300' />
                        </a>
                    </div>
                </div>
                <div className='w-1/4 m-10 flex flex-col justify-center items-center glassmorphism p-10 transition grayscale delay-200 hover:grayscale-0 duration-500'>
                    <div>
                        <img src={avatar} alt="avatar" width={200} height={200} className='rounded-full ' />
                    </div>
                    <div className='text-white text-3xl text-cyan-300 p-2' >
                        Smit Bhansali
                    </div>
                    <div className='text-white text-lg text-cyan-300 p-2' >
                        Developer
                    </div>
                    <div className='text-center text-white text-sm text-cyan-300 p-2' >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nam impedit vero ea. Ratione rerum dolorum alias, tenetur voluptatum eligendi? Vitae perspiciatis necessitatibus excepturi soluta! Eaque quo incidunt nihil adipisci.
                    </div>
                    <div className='p-2 flex justify-evenly items-center w-1/2'>
                        <a href="mailto:">
                            <FaEnvelope className='fill-cyan-300' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='fill-cyan-300' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='fill-cyan-300' />
                        </a>
                    </div>
                </div>
                <div className='w-1/4 m-10 flex flex-col justify-center items-center glassmorphism p-10 transition grayscale delay-200 hover:grayscale-0 duration-500'>
                    <div>
                        <img src={avatar} alt="avatar" width={200} height={200} className='rounded-full ' />
                    </div>
                    <div className='text-white text-3xl text-cyan-300 p-2' >
                        Smit Bhansali
                    </div>
                    <div className='text-white text-lg text-cyan-300 p-2' >
                        Developer
                    </div>
                    <div className='text-center text-white text-sm text-cyan-300 p-2' >
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus nam impedit vero ea. Ratione rerum dolorum alias, tenetur voluptatum eligendi? Vitae perspiciatis necessitatibus excepturi soluta! Eaque quo incidunt nihil adipisci.
                    </div>
                    <div className='p-2 flex justify-evenly items-center w-1/2'>
                        <a href="mailto:">
                            <FaEnvelope className='fill-cyan-300' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='fill-cyan-300' />
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <FaLinkedinIn className='fill-cyan-300' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Team