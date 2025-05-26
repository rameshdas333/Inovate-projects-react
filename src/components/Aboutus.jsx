import React from 'react';
import Container from './Container';
import { FaStar } from "react-icons/fa6";
import AboutusSlider from './AboutusSlider';


const Aboutus = () => {



    return (
       
        <div className='mt-40   h-[880px] bg-[#F4FAFA]'>
            
            <Container>
              <div className=' flex justify-center gap-[109px] items-center'>
                  <div className=''>
                    <h1 className='pt-[204px] pb-[5px] w-[594px] text-header font-bold text-[46px] font-chivo'>What they are talking about us?</h1>
                    <p className='pb-10 w-[503px] text-lg text-para font-dmsans'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
                    <button className=' px-12 py-5 text-white rounded-[6px] bg-bluebutton mb-20' >Get Started</button>
<div className='flex gap-8 items-center'>

  <div className="flex  space-x-[-15px]">
    <div className="w-12 h-12 bg-gray-300 border-[2px] border-amber-50 rounded-full"></div>
    <div className="w-12 h-12 bg-gray-300 border-[2px] border-amber-50 rounded-full"></div>
    <div className="w-12 h-12 bg-gray-300 border-[2px] border-amber-50 rounded-full"></div>
    <div className="w-12 h-12 bg-gray-300 border-[2px] border-amber-50 rounded-full"></div>
  </div>

    <div>
    <div className='flex justify-around'>
      <p className='text-2xl font-chivo text-[#52C5B6]'>4.5</p>
      <span className='px-3'>|</span>
      <p className='flex text-yellow-400 text-2xl'>
        <FaStar  className='text-amber-300' />
        <FaStar  className='text-amber-300' />
        <FaStar  className='text-amber-300' />
        <FaStar  className='text-amber-300' />
        <FaStar  className='text-amber-300' />
        </p>
    </div>
    <p className='text-lg font-dmsans font-medium'>280k Total Review</p>
   </div>
    

  
                  </div>              
                </div>

                {/* about slider  */}
                                                      
                <AboutusSlider></AboutusSlider>
               
              
                {/*  */}
                
              
                {/*  */}
              </div>
            </Container>
        </div>
    );
};

export default Aboutus;