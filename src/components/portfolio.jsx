import React from 'react';
import Carsousel  from './Carousel.jsx';

const Portfolio = () => {


  return (
    <div className="dark:text-white p-4 bg-slate-900" id='portfolio'>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl  mb-4 font-mono font-light">PortFolio</h1>

        <hr  className='bg-white mb-4'/>
    
        <div className='tabs'>
          {/* tab inddex */}
          <div className="flex mb-4 divide-x-2  divide-gray-500">
            <button className="bg-slate-600/50 p-1 pr-4 ">Software projects</button>
            <button className="bg-slate-600/50  p-1 pr-4">Automation and Emebedded</button>
            <button className="bg-slate-600/50 p-1 pr-4"  >Electronics</button>
          </div>
            
            {/* card */}

          
          <div className='flex gap-10 wrap mb-4'>
            {/* <PortfolioCard title='automation'  description='all the automation projects'/>
            <PortfolioCard title='github'  description='my github repository , feel free to take a look'/> */}
            <Carsousel/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
