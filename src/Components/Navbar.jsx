import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {
    const[Nav,setNav]=useState(false)
    const links=[
        {
            id:1,
            link:"HOME",
        },
        {
            id:2,
            link:"ABOUT",
        },
        
        {
            id:3,
            link:"EXPERIENCE",
        },
        {
            id:4,
            link:"CONTACT",
        },

    ];
  return (
    <div className='flex w-full h-20 bg-black text-white justify-between items-center fixed px-4'>

        <div>
            <h1 className='font-bold font-signature text-5xl'>Sahil Dhir</h1>
        </div>
        <ul className='hidden md:flex'>

    {links.map(({id,link})=>{
        return(
            <li
             key={id}
              className='px-4 cursor-pointer capitalize font-medium text-gray-200 hover:scale-95 duration-150'>
             <Link to={link} smooth duration={500}>{link}</Link>   
              </li>
        )

    })}

        </ul>
        <div onClick={()=>setNav(!Nav)} className='cursor-pointer pr-4 z-10 md:hidden'>
            {Nav ?<FaTimes size={30}/>:<FaBars size={30}/>}
        </div>  
        {Nav && (
             <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text-gray-200'>
             {links.map(({id,link})=>{
             return(
                 <li
                  key={id}
                   className='px-4 cursor-pointer capitalize py-6 text-4xl hover:scale-90'>
                     <Link
                     onClick={()=>setNav(!Nav)}
                     to={link}
                      smooth duration={500}>{link}</Link>  
                   </li>
             )
     
         })}
     
             </ul>
        )}
       
    </div>
  )
}

export default Navbar