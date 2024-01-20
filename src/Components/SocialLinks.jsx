import React from 'react'
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs"


const SocialLinks = () => {
 const links=[
    {
        id:1,
        child:(
            <>
            Linkdin<FaLinkedin size={30}/>
            </>
        ),
        href:"http://linkedin.com/",
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
            Github<FaGithub size={30}/>
            </>
        ),
        href:"http://github.com/",
        
    },
    {
        id:3,
        child:(
            <>
            Mail<MdEmail size={30}/>
            </>
        ),
        href:"mailto:sahildhir552@gmail.com",
        
    },
    {
        id:4,
        child:(
            <>
            Resume<BsFillPersonLinesFill size={30}/>
            </>
        ),
        href:"/My resume (4).pdf",
        style:'rounded-br-md',
        download:true
    },
 ]

  return (
    <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
        <ul>
            {links.map(({child,id,href,style,download})=>{
                return(
 <li key={id} className={'flex justify-between items-center  w-40 h-14 px-4 bg-black ml-[-100px] hover:ml-[-10px] hover:rounded-xl duration-200'+""+style}>
 <a href={href} target='_blank' rel='noreferrer' download={download} className='flex justify-between  items-center w-full text-white'>
    {child}
 </a>
</li>
           ) })}
           
        </ul>
    </div>
  )
}

export default SocialLinks