import React from 'react';
import Container from './Container';





const ReviewPart = () => {
    return (
        <div className=' ' >
        
             <Container >
             
           <div className='px-3 md:px-0'>
             <div className=' w-full h-[468px] bg-cover bg-center bg-[url(./assets/customerImg.png)] flex justify-between rounded-2xl p-4 '>
                <div></div>
                <div className=''>
                    <h1 className='md:pt-[85px] md:pb-[64px] md:w-[554px] text-3xl  md:text-[44px] font-bold text-white'>Trusted by 35,000+ happy customers.</h1>
                     <div className='md:flex justify-between  md:gap-3'>
                        <div className=''>
                            <h1 className='text-white text-3xl pt-4 md:text-[44px] font-white font-chivo'>720+</h1>
                            <p className='md:pt-[85px] md:pb-[64px] text-lg font-dmsans text-white'>Over 500 business powered with us</p>
                        </div>
                        <div>
                            <h1 className='text-white text-3xl md:text-[44px]  font-white font-chivo'>4.9</h1>
                            <p className='md:pb-[85px]  md:w-[176px] text-lg font-dmsans text-white'>Rating on google play and app store</p>
                        </div>
                        <div className='md:pr-[70px]'>
                             <h1 className='text-white text-3xl md:text-[44px]  font-white font-chivo'>200+</h1>
                            <p className=' md:pt-[85px] md:pb-[64px] text-lg font-dmsans text-white'>Easily integrate with your favorite apps</p>
                        </div>
                     </div>
                </div>
              </div>
           </div>
                

              

            </Container>
        
           
            
          
        </div>
    );
};

export default ReviewPart;