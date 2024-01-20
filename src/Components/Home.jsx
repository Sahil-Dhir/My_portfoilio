import React from 'react'
import SahilImg from '../assests/WhatsApp Image 2023-12-20 at 20.55.16_f18d235e.jpg'
import { HiArrowRight } from "react-icons/hi"; 
import {Link} from 'react-scroll'

const Home = () => {
  return (
    <div name="HOME" className="h-screen w-full bg-gradient-to-b from-black  to-gray-800">
    <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
    <div className='flex flex-col justify-center h-full text-white'>
        <h2 className='text-4xl sm:text-7xl'>I'm a Full Stack Developer</h2>
        <p className='text-gray-400  py-4 max-w-md'>
            I have good experience of building and designing website.
            Currently , I love to work with technologies like React ,Tailwind,Express-Node and Mysql
        </p>
        <div>
            <Link to='CONTACT' className= 'group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to border-blue-500 cursor-pointer'>
                Contact
                <span className='group-hover:rotate-90 duration-200'>
                    <HiArrowRight/>
                </span>
            </Link >
        </div>
    </div>
    <div>
        <img src={SahilImg} alt="my profile"  className='rounded-3xl md:w-full mx-auto w-2/3 h-auto max-w-lg ' />
    </div>
    </div>
   
    </div>
  )
}

export default Home