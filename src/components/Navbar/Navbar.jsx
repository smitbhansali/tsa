import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center w-full glassmorphism sticky top-5 z-10'>
            <div className='text-white text-3xl m-5 cursor-pointer hover:text-cyan-300'>
                <Link to='/'>TSA</Link>
            </div>
            <div className='flex flex-row'>
                <div className='text-white text-xl m-5 cursor-pointer hover:text-cyan-300'>
                    <Link to='/events'>Events</Link>
                </div>
                <div className='text-white text-xl m-5 cursor-pointer hover:text-cyan-300'>
                    <Link to='/team'>Team</Link>
                </div>
                {/* <div className='text-white text-xl m-5 cursor-pointer hover:text-cyan-300'>
                    <Link to='/login'>Login</Link>
                </div>
                <div className='text-white text-xl m-5 cursor-pointer hover:text-cyan-300'>
                    <Link to='/signup'>Signup</Link>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar