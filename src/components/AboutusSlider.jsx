
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function AboutUsSlider() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows:false,
  };
  return (
 
     <>
       
        
         <Slider {...settings}>
     
       <div className='relative  px-10 py-12 rounded-[20px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white'>
            <div className=' absolute -top-[80px] rounded-full bg-amber-400 w-[124px]  h-[124px]'></div>
            <p className='text-base md:text-[22px] pb-[37px] font-dmsans text-para leading-[44px]  w-[667px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
            <p className='text-2xl font-chivo font-bold leading-[36px] text-header'>Robert Fox</p>
            
              <div className='text-base font-dmsans '>Digital Marketer</div>
            
           
           </div>
       <div className='relative  px-10 py-12 rounded-[20px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white'>
            <div className=' absolute -top-[80px] rounded-full bg-amber-400 w-[124px]  h-[124px]'></div>
            <p className='text-[22px] pb-[37px] font-dmsans text-para leading-[44px]  w-[667px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
            <p className='text-2xl font-chivo font-bold leading-[36px] text-header'>Robert Fox</p>
            
              <div className='text-base font-dmsans '>Digital Marketer</div>
            
           
           </div>
    
       
    </Slider>
        
       
     </> 
 
  );
}

export default AboutUsSlider;