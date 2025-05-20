import React from 'react';
import Container from './Container';





const Reviewpart = () => {
    return (
        <div className=' ' >
        
             <Container>
             
            <div className='bg-cover bg-center bg-[url(./assets/customerimg.png)] flex justify-between rounded-2xl'>
                <div></div>
                <div className=''>
                    <h1 className='pt-[85px] pb-[64px] w-[554px] text-[44px] font-bold text-white'>Trusted by 35,000+ happy customers.</h1>
                     <div className='flex justify-between gap-3'>
                        <div className=''>
                            <h1 className='text-white text-[44px] font-white font-chivo'>720+</h1>
                            <p className='pb-[85px]  w-[176px] text-lg font-dmsans text-white'>Over 500 business powered with us</p>
                        </div>
                        <div>
                            <h1 className='text-white text-[44px] font-white font-chivo'>4.9</h1>
                            <p className='pb-[85px]  w-[176px] text-lg font-dmsans text-white'>Rating on google play and app store</p>
                        </div>
                        <div className='pr-[70px]'>
                             <h1 className='text-white text-[44px] font-white font-chivo'>200+</h1>
                            <p className='pb-[85px]   w-[176px] text-lg font-dmsans text-white'>Easily integrate with your favorite apps</p>
                        </div>
                     </div>
                </div>
              </div>
                

              

            </Container>
        
           
            
          
        </div>
    );
};

export default Reviewpart;