

const PortfolioCard = (props )=>{
    return (
        <div className='bg-slate-900/70 rounded-md flex max-md:flex-col p-2 shadow-sm  shadow-blue-300/50 flex-1  '>
          <img src="assets/me.png" alt="portfolio" className='w-32 h-32 text-center' />
          <div className='bg-slate-700/30 flex-1 px-2  '>
            {/* title  */}
            <h1 className='uppercase text-md italic'>{props.title}</h1>
            {/* description  */}
            <p className=''>{props.description} </p>
            {/* link  */}
            <div>
              <a  href="link" className='text-lg'>link</a>
            </div>
            <button className="bg-yellow-800 px-4 rounded mt-4 ">VIEW</button>
          </div>    
          
          
        </div>
      )
}


export default PortfolioCard 