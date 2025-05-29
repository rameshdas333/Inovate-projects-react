import React from 'react';

import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa6";
import "slick-carousel/slick/slick-theme.css";





const AboutUsSlider = () => {


    var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll:1,
    arrows:false,
  };
    return (
        <div className='  w-[687px]  '>
              
             <Slider {...settings}>
            
     
        <div className='relative rounded-[20px]  px-15 py-12bg-white shadow-md '>
                  <div className='absolute -top-[100px]  border-2 border-[#f1ebeb] bg-[#C4C4C4] w-[124px] h-[124px] rounded-full'></div>
                  <p  className='pt-10 text-2xl text-para  leading-[44px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                  <h3 className='text-2xl font-bold font-chivo pb-2'>Robert Fox</h3>
                  <div className='flex justify-between'>
                    <p className='text-base'>Digital Marketer</p>
                    <p className='flex text-yellow-400 text-2xl '>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                  </div>


                  {/*  */}
          </div>
     
        <div className='relative  rounded-[20px]  px-15 py-12bg-white shadow-md '>
                  <div className='absolute -top-[100px]  border-2 border-[#f1ebeb] bg-[#C4C4C4] w-[124px] h-[124px] rounded-full'></div>
                  <p  className='pt-10 text-2xl text-para  leading-[44px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                  <h3 className='text-2xl font-bold font-chivo pb-2'>Robert Fox</h3>
                  <div className='flex justify-between'>
                    <p className='text-base'>Digital Marketer</p>
                    <p className='flex text-yellow-400 text-2xl '>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                  </div>


                  {/*  */}
          </div>
     
        <div className='relative  rounded-[20px]  px-15 py-12bg-white shadow-md '>
                  <div className='absolute -top-[100px]  border-2 border-[#f1ebeb] bg-[#C4C4C4] w-[124px] h-[124px] rounded-full'></div>
                  <p  className='pt-10 text-2xl text-para  leading-[44px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
                  <h3 className='text-2xl font-bold font-chivo pb-2'>Robert Fox</h3>
                  <div className='flex justify-between'>
                    <p className='text-base'>Digital Marketer</p>
                    <p className='flex text-yellow-400 text-2xl '>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </p>
                  </div>


                  {/*  */}
          </div>
     
    
     
        
      

          
        
     {/*  */}
       
      

          {/*  */}

        

              

                
      
      </Slider>
     
     
   
     </div>
        
    );
};

export default AboutUsSlider;