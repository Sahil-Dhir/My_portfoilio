import React from 'react'

const About = () => {
  return (
    <div name="ABOUT" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-l mt-20'> Im a  full-stack developer is a developer or engineer and I can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets.</p>
      <br/>
      <p className='text-l mt-10'>
        Design and develop website using react node express and also have a good Knowledge of Tailwind Css
      </p>
        </div>
    </div>
  )
}

export default About