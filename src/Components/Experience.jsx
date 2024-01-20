import React from 'react'
import html from '../assests/HTML5_logo_and_wordmark.svg.png'
import javascript from '../assests/Unofficial_JavaScript_logo_2.svg.png'
import react from '../assests/React.png'
import css from '../assests/css.png'
import Nodejs from '../assests/nodejs.png'
import mysql from '../assests/mysql.png'


const Experience = () => {
  const tech=[
    {
      id:1,
      src:html,
      title:"HTML",
      style:"shadow-orange-500"
    },
    {
      id:2,
      src:css,
      title:"CSS",
      style:"shadow-sky-500"
    },
    {
      id:3,
      src:javascript,
      title:"JAVASCRIPT",
      style:"shadow-yellow-500"
    },
    {
      id:4,
      src:mysql,
      title:"Mysql",
      style:"shadow-blue-500"
    },
    {
      id:5,
      src:react,
      title:"React",
      style:"shadow-purple-500"
    },
    {
      id:6,
      src:Nodejs,
      title:"Nodejs",
      style:"shadow-green-500"
    }
  ];
  return (
    <div name="EXPERIENCE" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
          <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
            <p className='py-6 text-xl'>These are the technologies I have worked with</p>
          </div>
          <div className='w-full grid grid-col-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

{
  tech.map(({id,src,title,style})=>{
    return(
      <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg  ${style}`}>
      <img src={src} alt="" className='w-20 mx-auto'/>
      <p className='mt-4'>{title}</p>
    </div>
    )
  })
}
           
          </div>
        </div>
    </div>
  )
}

export default Experience