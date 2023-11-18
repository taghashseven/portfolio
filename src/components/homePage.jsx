import { useState } from 'react'
import './homePage.css'
import {EnvelopeIcon}   from '@heroicons/react/24/solid'
import Typewriter from 'typewriter-effect'

const HomePage = ()=>{

    const [title, setTitle] = useState(' ')

    return (
        <div className="py-20 md:py-52 card relative  overflow-hidden p-4 pr-8" id='home'>
            <img src='assets/me.png' alt='me' className='absolute top-0 z-[-1] imgme' />

            <div className="card float-right mx-2  md:w-3/6 md:min-w-[500px] text-xl md:mr-8 bg-gray-700/30 p-2 rounded-sm text-green-800 max-md:w-full">
                <span className="text-gray-400">Hello,</span>
                <p className="text-2xl  dark:text-gray-200">I'm <span className="dark:text-purple-500  uppercase italic">Jonah</span></p>
                <Typewriter className='text-2xl  dark:text-gray-200'
                options={{
                    autoStart: true,
                    loop: true,
                }}

                onInit={(typewriter) => {
                    typewriter.typeString('Web developer')
                    .callFunction(() => {
                        setTitle('Building responsive websites')
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(()=> setTitle(''))
                    .typeString('Network engineer')
                    .callFunction(() => {
                        setTitle('Unbreakable bonds, keeping you securely connected')
                    })
                    .pauseFor(2500)
                    .deleteAll()
                    .callFunction(()=> setTitle(''))
                    .typeString('Automation and Embedded Systems')
                    .callFunction(()=>{
                        setTitle('Realiasation of the hardware')
                    })
                    .pauseFor(4500)
                    .callFunction(()=> setTitle(''))
                    .start();
                }}
                />

                {/* typing effect */}
         
                <p className="dark:text-slate-500 h-6 text-lg">{title}</p>
                <button className="bg-slate-300 rounded p-1 mt-2 flex email"> 
                    <EnvelopeIcon className='w-6 h-6 dark:fill-gray-700 mr-2 ' />
                    email me
                </button>
                
            </div>

    
        </div>
    )
}

export default HomePage 