
import Container from './Container';
import { FaStar } from "react-icons/fa6";
import AboutUsSlider from './AboutUsSlider';




const AboutUs = () => {



    return (
       
        <div className='mt-40  bg-[#F4FAFA]'>
            
            <Container>
              <div className='  md:flex py-40  items-center'>
                  <div className='md:w-1/2'>
                    <h1 className=' pb-[5px] w-[594px]  text-header font-bold text-3xl md:text-[46px] font-chivo'>What they are talking about us?</h1>
                    <p className='pb-10 w-[503px] text-base md:text-lg text-para font-dmsans'>testimonials are evidence of customers talking about your product or service in their own words. At their best, they are authentic, descriptive.</p>
                   <div className='py-4'>
                     <button className=' px-12 py-5 text-white rounded-[6px] bg-bluebutton  md:mb-20' >Get Started</button>
                   </div>
<div className='md:flex gap-8 items-center'>

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

            

           {/*  */}

           {/* <div className='relative px-15 py-12 rounded-[20px] drop-shadow-[0_4px_4px_0_rgba(0,0,0,0.25)] bg-white'>
            <div className=' absolute -top-[80px] rounded-full bg-amber-400 w-[124px]  h-[124px]'></div>
            <p className='text-[22px] pb-[37px] font-dmsans text-para leading-[44px]  w-[667px]'>“Wow. Amazing company amazing Expert Manager. They know how to get things done when it comes to online trading. </p>
            <p className='text-2xl font-chivo font-bold leading-[36px] text-header'>Robert Fox</p>
            <div>
              <div className='text-base font-dmsans '>Digital Marketer</div>
              <div></div>
            </div>
           </div> */}

           <div className='md:w-1/2'>
            <AboutUsSlider></AboutUsSlider>
           </div>

               
       
              </div>
            </Container>
        </div>
    );
};

export default AboutUs;