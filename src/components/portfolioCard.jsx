

const PortfolioCard = (props )=>{
    return (
        <div className='bg-slate-900/70 rounded-md flex max-md:flex-col p-2 shadow-md shadow-blue-900/50 max-w-[30rem]'>
          <img src="assets/me.png" alt="portfolio" className='w-32 h-32 text-center' />
          <div className=''>
            {/* title  */}
            <h1 className='text-xl font-semibold'>{props.title}</h1>
            {/* description  */}
            <p className=''>{props.description} </p>
            {/* link  */}
            <div>
              <a  href="link" className='text-lg'>link</a>
            </div>
  
          </div>
          
        </div>
      )
}


export default PortfolioCard 