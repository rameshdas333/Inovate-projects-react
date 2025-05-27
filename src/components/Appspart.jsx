import React from 'react';
import Container from './Container';
import BrandLogo from '../assets/BrandLogo.png'

const AppSpart = () => {

    const handleClick = () =>{
        console.log("ok ")
    }
    return (
        <div className='bg-[#F4FAFA] px-3 md:px-0 md:h-[740px]'>
            <Container>
                 <div className='md:flex  items-center justify-center'>
                    <div>
                        <p className='text-red-700'>Integrations</p>
                        <h1 className='text-header font font-bold font-chivo md:leading-14 text-3xl md:text-5xl w-auto md:w-[587px] pt-3 pb-5 '>Easily integrate with your favorite apps</h1>
                        <p className='w-auto md:w-[533px] pb-10'>App integration, in a general sense, is the process of bringing resources or capabilities from one application to another. As the world of apps continues to evolve, app integration is becoming expected in many contexts.</p>
  <button onClick={handleClick} className='px-8 md:px-12 py-5 rounded-xl md:rounded-2xl  bg-bluebutton text-white '>Get Started</button>                    
  
  </div>
                    <div className='md:pt-[124px]'>
                        <img src={BrandLogo} alt="" />
                    </div>
                 </div>
            </Container>
        </div>
    );
};

export default AppSpart;