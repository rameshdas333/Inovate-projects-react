import Container from './Container';
import laptop from '../assets/laptop.png'
import laptopCard from '../assets/laptoCard.png'
import laptopCard02 from '../assets/laptopCard02.png'

const Header = () => {
    return (
      <Container>

    <div className='mt-24  '>
        <h1 className='md:w-[796px] mx-auto leading-12 md:leading-14 text-white text-center text-4xl  md:text-6xl font-chivo font-bold'>Get your work done with Management Tool</h1>
        <p className='md:w-[467px] mt-5 mb-8 leading-6 md:leading-8 text-white text-center mx-auto text-base md:text-lg  '>The world's first project management platform that connects everything</p>

        
          <div className='flex items-center justify-center'>
             <div className="join  ">
  <div className=''> 
    <label className="input  join-item">
  
      <input type="email" placeholder="mail@site.com" required />
    </label>
    <div className="validator-hint hidden">Enter valid email address</div>
  </div>
  <button className="btn bg-[#43E7D3] join-item">Try for free</button>
              </div>
          </div>
        

            {/*  laptop and side image section */}
          <div className='relative w-full mt-20'>
        {/* Laptop Image */}
        <img
          src={laptop}
          alt='Laptop'
          className='w-full max-w-5xl mx-auto h-auto pt-32 object-contain'
        />

        {/* Top-right User Card (laptopCard) */}
        <img
          src={laptopCard}
          alt='User Card'
          className='absolute md:top-[30%] top-40 right-0 md:right-[10%] w-[150px] sm:w-[200px] lg:w-[254px] h-auto'
        />

        {/* Bottom-left Team Card (laptopCard02) */}
        <img
          src={laptopCard02}
          alt='Team Card'
          className='absolute bottom-0 left-0 md:bottom-[1%] md:left-[15%] w-[140px] sm:w-[180px] lg:w-[235px] h-auto'
        />
      </div>

      

    </div>


      </Container>
    );
};

export default Header;



