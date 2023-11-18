import React from 'react';

const Portfolio = () => {


  return (
    <div className="dark:text-white p-4 dark:bg-slate-900" id='portfolio'>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl  mb-4 font-mono font-light">PortFolio</h1>

        <hr  className='bg-white mb-4'/>
    
        <div className='tabs'>
          <div className="flex mb-4 divide-x-2  divide-gray-500">
            <button className="bg-slate-600/50 p-1 pr-4 ">Software projects</button>
            <button className="bg-slate-600/50  p-1 pr-4">Automation and Emebedded</button>
            <button className="bg-slate-600/50 p-1 pr-4"  >Electronics</button>
          </div>
        </div>
            
            
      </div>
    </div>
  );
};

export default Portfolio;
