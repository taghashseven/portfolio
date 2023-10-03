
import {SunIcon}   from '@heroicons/react/24/solid'
import {MoonIcon}   from '@heroicons/react/24/solid'
import {Bars3Icon}   from '@heroicons/react/24/solid'


const NavBar = ()=>{
    return (
        <div className="z-5 text-white flex justify-between p-2 border-b-[1px] border-slate-100 sticky top-0 bg-slate-600/70  ">
            <div className="text-xl text-yellow-600 ">Wire</div>

            {/* if less than md */}


            <ul className="flex justify-between gap-4 max-md:hidden">
                <li className="hover:border-b-2 border-b-purple-700">Home</li>
                <li className="hover:border-b-2 border-b-purple-700">About</li>
                <li className="hover:border-b-2 border-b-purple-700">Services</li>
                <li className="hover:border-b-2 border-b-purple-700">PortFolio</li>
                <li className="hover:border-b-2 border-b-purple-700">Blog</li>
            </ul>

            <Bars3Icon className='md:hidden w-6 h-6 '/>


            <SunIcon  className='w-6 h-6 '/>
            <MoonIcon  className='max-md:hidden w-6 h-6 hidden'/>
            
        </div>
        
    )
}


export default NavBar 
