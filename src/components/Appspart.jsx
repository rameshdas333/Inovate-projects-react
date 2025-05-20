import React from 'react';
import Container from './Container';
import BrandLogo from '../assets/BrandLogo.png'

const Appspart = () => {
    return (
        <div className='bg-[#F4FAFA] h-[740px]'>
            <Container>
                 <div className='flex  items-center justify-center'>
                    <div>
                        <p className='text-red-700'>Integrations</p>
                        <h1 className='text-header font font-bold font-chivo leading-14 text-5xl w-[587px] pt-3 pb-5 '>Easily integrate with your favorite apps</h1>
                        <p className='w-[533px] pb-10'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
  <button className=' px-12 py-5 rounded-2xl  bg-bluebutton text-white '>Get Started</button>                    
  
  </div>
                    <div className='pt-[124px]'>
                        <img src={BrandLogo} alt="" />
                    </div>
                 </div>
            </Container>
        </div>
    );
};

export default Appspart;