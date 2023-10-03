import { Link } from 'react-router-dom'
import { useState } from 'react'
import {SunIcon}   from '@heroicons/react/24/solid'
import {MoonIcon}   from '@heroicons/react/24/solid'
import {Bars3Icon}   from '@heroicons/react/24/solid'
import './navBar.css' 

const NavBar = ()=>{

    const [isDark, setIsDark] = useState(false)
    const [isMenu, setIsMenu] = useState(false)


    return (
        <>
            <div className="z-5 text-white flex justify-between p-2 border-b-[1px] border-slate-100 sticky top-0 bg-slate-600/70 items-center  ">
                <div className="text-xl text-yellow-600 ">
                    <img src="assets/logo3.svg" alt="logo" className='w-8 h-8 content-around' />
                </div>

                

                <ul className="flex justify-between gap-4 max-md:hidden ">
                    <Link to = 'home' className="hover:border-b-2 border-b-purple-700">Home</Link>
                    <Link to = 'about' className="hover:border-b-2 border-b-purple-700">About</Link>
                    <Link to = 'service' className="hover:border-b-2 border-b-purple-700">Services</Link>
                    <Link to = 'portfolio' className="hover:border-b-2 border-b-purple-700">PortFolio</Link>
                    <Link to = 'blog' className="hover:border-b-2 border-b-purple-700">Blog</Link>
                </ul>

                <div className='flex'>
                    <Bars3Icon className='md:hidden w-6 h-6 mr-2' onClick={()=>setIsMenu(!isMenu)}/>
                    <SunIcon  className='w-6 h-6 '/>
                    <MoonIcon  className='max-md:hidden w-6 h-6 hidden'/>
                </div>
                
            </div>
            {/* show menu in mobile  */}

            <ul className={"mobile_url gap-4 md:hidden text-white flex flex-col items-center absolute  left-0 right-0 bg-slate-600/90 z-10 py-2 "+ (isMenu  ? '' : 'hidden')}
                onClick={()=>setIsMenu(!isMenu)}
            >
                <Link to = 'home' className="hover:border-b-2 border-b-purple-700">Home</Link>
                <Link to = 'about' className="hover:border-b-2 border-b-purple-700">About</Link>
                <Link to = 'service' className="hover:border-b-2 border-b-purple-700">Services</Link>
                <Link to = 'portfolio' className="hover:border-b-2 border-b-purple-700">PortFolio</Link>
                <Link to = 'blog' className="hover:border-b-2 border-b-purple-700">Blog</Link>
            </ul>
    </>
    )
}


export default NavBar 
