import React from 'react';
import PortfolioCard  from './portfolioCard.jsx'

const Portfolio = () => {

  return (
    <div className="dark:text-white p-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-semibold mb-4">PortFolio</h1>
        
        <div className='flex gap-10'>
          <PortfolioCard title='reference notes' description='this is my blog page where i post all things i learn '/>
          <PortfolioCard title='automation'  description='all the automation projects'/>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
