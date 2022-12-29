import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='flex flex-row justify-between items-center w-full glassmorphism sticky top-5 z-10'>
            <div className='text-white text-3xl m-5'>
                TSA
            </div>
            <div className='flex flex-row'>
                <div className='text-white text-xl m-5'>
                    Events
                </div>
                <div className='text-white text-xl m-5'>
                    Team
                </div>
                <div className='text-white text-xl m-5'>
                    Gallery
                </div>
                <div className='text-white text-xl m-5'>
                    Login
                </div>
                <div className='text-white text-xl m-5'>
                    Signup
                </div>
            </div>
        </div>
    )
}

export default Navbar