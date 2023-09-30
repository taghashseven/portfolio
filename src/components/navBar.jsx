
const NavBar = ()=>{
    return (
        <div className=" text-white flex justify-between p-2 border-b-2  sticky ">
            <div className="text-xl ">Wire</div>
            <ul className="flex justify-between gap-4">
                <li className="hover:border-b-2 border-b-purple-700">Home</li>
                <li className="hover:border-b-2 border-b-purple-700">About</li>
                <li className="hover:border-b-2 border-b-purple-700">Services</li>
                <li className="hover:border-b-2 border-b-purple-700">PortFolio</li>
                <li className="hover:border-b-2 border-b-purple-700">Contact</li>
                <li className="hover:border-b-2 border-b-purple-700">Blog</li>
            </ul>

            <div className="">
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
