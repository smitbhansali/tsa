import React from 'react'
import earth from '../../assets/earth.jpg'
import './Home.css'

const Home = () => {
    return (
        <div className='flex flex-col justify-start items-start w-full'>
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
            <div className='container2 flex flex-col justify-end items-end text-white text-3xl font-sans pt-40 p-3'>
                <span className='pr-52'>What is the space association?</span>
                <div className='text-white text-xl font-sans p-3 m-3 w-1/2'>
                    It is very important for the customer to pay attention to the adipiscing process. Life will never be different. Or do they not know that the wise man will rebuke the inflexibility of the born, whence the result is that the blinded inventor will often be surprised?
                </div>
            </div>
        </div>
    )
}

export default Home