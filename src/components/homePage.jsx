import './homePage.css'

const HomePage = ()=>{
    return (
        <div className="">
            <div className="h-[90vh] md:w-3/5   relative  float-right flex ">
                <div className="cardContainer">
                    <div className="card">
                        <span className="text-gray-400">Hello,</span>
                        <p className="text-2xl text-gray-200">I'm <span className="text-yellow-500 uppercase italic">Jonah</span></p>
                        <p className="text-3xl text-gray-100">Web Developer</p>
                        <p className="text-slate-500 ">"Crafting Web Experiences with Precision and Creativity"</p>
                        <button className="bg-slate-300 rounded p-1 mt-2"> email </button>
                    </div>
                </div>
            </div>
            <img className='meImg absolute top-[-15px]  left-[-8rem] ' src="assets/me.png" alt="me" />
        </div>
    )
}

export default HomePage 