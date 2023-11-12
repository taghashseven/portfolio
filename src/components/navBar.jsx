import { Link } from 'react-router-dom'
import { useState } from 'react'
import {SunIcon}   from '@heroicons/react/24/solid'
import {MoonIcon}   from '@heroicons/react/24/solid'
import {Bars3Icon}   from '@heroicons/react/24/solid'
import './navBar.css' 

const NavBar = ()=>{

    const [isMenu, setIsMenu] = useState(false)
    
    // dark save in local storage
    const [isDark, setIsDark] = useState(localStorage.getItem('isDark') === 'true' ? true : false)
    if(isDark)
        document.documentElement.classList.add('dark')

    const toggleDarkMode = ()=>{
        if(isDark){
            document.documentElement.classList.remove('dark')
            setIsDark(false)
        }
        else{
            document.documentElement.classList.add('dark')
            setIsDark(true)
        }
        localStorage.setItem('isDark', isDark)
        console.log('pressed')
    }

    return (
        <>
            <div className="z-5 text-white flex justify-between p-2 border-b-[1px] dark:border-slate-100 sticky top-0 bg-slate-600/70 items-center  ">
                <div className="text-xl">
                    <img src="assets/logo3.svg" alt="logo" className='w-8 h-8 content-around' />
                </div>

                <ul className="flex justify-between gap-4 max-md:hidden ">
                    <a href = '#home' className="  ">Home</a>
                    <a href='#about' className=" ">About</a>
                    <a href='#service' className=" ">Services</a>
                    <a href='#portfolio' className=" ">PortFolio</a>
                    <a href='#blog' className=" ">Blog</a>
                </ul>

                <div className='flex'>
                    <Bars3Icon className='md:hidden w-6 h-6 mr-2' onClick={()=>setIsMenu(!isMenu)}/>
                    <SunIcon  className={'w-6 h-6 '+ (isDark ? '': 'hidden')} onClick={toggleDarkMode}/>
                    <MoonIcon  className={'w-6 h-6 '+ (isDark ? 'hidden': '')}  onClick={toggleDarkMode}/>
                </div>
                
            </div>
            {/* show menu in mobile  */}

            <ul className={" text-white gap-4 md:hiddendark:text-white flex flex-col items-center absolute  left-0 right-0 bg-slate-600/70 z-10 py-2 "+ (isMenu  ? '' : 'hidden')}
                onClick={()=>setIsMenu(!isMenu)}
            >
                <Link to = 'home' className="">Home</Link>
                <Link to = 'about' className="">About</Link>
                <Link to = 'service' className="">Services</Link>
                <Link to = 'portfolio' className="">PortFolio</Link>
                <Link to = 'blog' className="">Blog</Link>
            </ul>
    </>
    )
}


export default NavBar 
