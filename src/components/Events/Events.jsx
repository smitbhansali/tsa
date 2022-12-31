import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import neutron from '../../assets/neutron.jpg'
import avatar from '../../assets/avatar.webp'
import './Events.css'

const Events = () => {
    const { ref: ref1, inView: isVisible1 } = useInView()
    return (
        <div className='flex flex-col w-full'>
            <div className='w-full'>
                <img src={neutron} alt="neutron" className='neutronimage' />
            </div>
            <div className='text-white text-9xl font-sans p-3 mb-96 ml-20 mt-20'>
                TSA <br /> Events
            </div>
            <div className='container1 flex flex-wrap justify-center items-center font-sans p-3'>
                <div ref={ref1} className='w-3/4 m-10 flex flex-row justify-center items-center glassmorphism'>
                    <div className={`${isVisible1 ? "animateImage" : ""}`}>
                        <img src={avatar} alt="avatar" width={1000} height={1000} />
                    </div>
                    <div className={`flex flex-col justify-start items-start ${isVisible1 ? "animateText" : ""}`}>
                        <div className='text-white text-5xl m-2'>
                            Event Name
                        </div>
                        <div className='text-white text-lg m-2'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo blanditiis placeat rem explicabo exercitationem harum quo beatae odio modi sit, sint cum rerum sed cupiditate quasi quos! Repellendus, dolorem minima?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Events