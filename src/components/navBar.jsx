
const NavBar = ()=>{
    return (
        <div className="z-5 text-white flex justify-between p-2 border-b-[1px] border-slate-100 sticky top-0 bg-slate-600/70  ">
            <div className="text-xl text-yellow-600 ">Wire</div>

            {/* if less than md */}

            <div className="md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {/* three lines  */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h8m-8 6h16" />
                </svg>
            </div>

            <ul className="flex justify-between gap-4 max-md:hidden">
                <li className="hover:border-b-2 border-b-purple-700">Home</li>
                <li className="hover:border-b-2 border-b-purple-700">About</li>
                <li className="hover:border-b-2 border-b-purple-700">Services</li>
                <li className="hover:border-b-2 border-b-purple-700">PortFolio</li>
                <li className="hover:border-b-2 border-b-purple-700">Blog</li>
            </ul>

            <div className="max-md:hidden">
                {/* dark/light  */}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    {/* half circle  */}
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4c4.97 0 9 4.03 9 9s-4.03 9-9 9a9 9 0 01-9-9 9 9 0 019-9z" />

                    {/* sun  */}
                </svg>
            </div>
        </div>
        
    )
}


export default NavBar 
