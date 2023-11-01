import { useState , useEffect} from 'react'
import './homePage.css'
import {EnvelopeIcon}   from '@heroicons/react/24/solid'

const HomePage = ()=>{

    const [title, setTitle] = useState([
        'Web Developer',
        'Freelancer',
        'Network engineer',
        'Electronics '
    ])



    return (
        <div className="py-20 md:py-52 card relative  overflow-hidden  ">
            <img src='assets/me.png' alt='me' className='absolute top-0 z-[-1] imgme' />

            <div className="card float-right mx-2  md:w-3/6 md:mr-8 bg-gray-700/30 p-2 rounded-sm text-green-800 ">
                <span className="text-gray-400">Hello,</span>
                <p className="text-2xl  dark:text-gray-200">I'm <span className="dark:text-purple-500  uppercase italic">Jonah</span></p>
                    
                {/* typing effect */}
            <p className='text-2xl dark:text-gray-300'>{title[1]}</p>
                <p className="dark:text-slate-500 ">"Crafting Web Experiences with Precision and Creativity"</p>
                <button className="bg-slate-300 rounded p-1 mt-2 flex email"> 
                    <EnvelopeIcon className='w-6 h-6 dark:fill-gray-700 mr-2 ' />
                    email me
                </button>
                
            </div>

    
        </div>
    )
}

export default HomePage 