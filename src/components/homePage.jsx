import './homePage.css'
import {EnvelopeIcon}   from '@heroicons/react/24/solid'

const HomePage = ()=>{
    return (
        <div className="py-20 md:py-52 card relative  overflow-hidden">
            <img src='assets/me.png' alt='me' className='absolute top-0 z-[-1] imgme' />

            <div className="card float-right mx-2 md:w-3/6 bg-gray-700/30 p-2 rounded-sm ">
                <span className="text-gray-400">Hello,</span>
                <p className="text-2xl text-gray-200">I'm <span className="text-yellow-500 uppercase italic">Jonah</span></p>
                <div className="title">
                    <p className="text-3xl text-gray-100">Web Developer</p>
                    <p className="text-3xl text-gray-100">Freelancer</p>
                    <p className="text-3xl text-gray-100">Network engineer</p>
                    <p className="text-3xl text-gray-100">Electronics Engineer</p>
                </div>
                <p className="text-slate-500 ">"Crafting Web Experiences with Precision and Creativity"</p>
                <button className="bg-slate-300 rounded p-1 mt-2 flex "> 
                    <EnvelopeIcon className='w-6 h-6 fill-gray-700 mr-2' />
                    email 
                </button>
            </div>

    
        </div>
    )
}

export default HomePage 