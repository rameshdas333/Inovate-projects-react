import Container from './Container';
// import laptop from '../assets/laptop.png'
// import laptopCard from '../assets/laptoCard.png'
// import laptopCard02 from '../assets/laptopCard02.png'

const Header = () => {
    return (
      <Container>

    <div className='mt-24 z-50  relative'>
        <h1 className='md:w-[796px] mx-auto leading-12 md:leading-14 text-white text-center text-4xl  md:text-6xl font-chivo font-bold'>Get your work done with Management Tool</h1>
        <p className='md:w-[467px] mt-5 mb-8 leading-6 md:leading-8 text-white text-center mx-auto text-base md:text-lg  '>The world's first project management platform that connects everything</p>

        <div className='relative text-center mx-auto'>
            <input className='bg-white outline-0   py-5 px-6 md:w-[480px] rounded-[6px] text-black ' type="text" placeholder='Your bussiness email' />
            <button className= 'bg-[#43E7DF]  top-1 right-[480px]   absolute px-7 rounded-[6px] py-4'>Try for free</button>
        </div>

          <div className=''>
            {/*  laptop and side image section */}
         <div className='relative bg-cover bg-center mx-auto md:mt-[120px] bg-no-repeat w-auto md:w-[1200px] md:h-[637px] bg-[url(./assets/laptop.png)]'></div>
           <div className=' absolute right-16 top-[500px] bg-cover bg-center bg-no-repeat  w-[254px]
            h-[244px]  bg-[url(./assets/laptoCard.png)]'></div>
          <div className='absolute  left-[140px] top-[880px] bg-cover bg-center bg-no-repeat  w-[235px] h-[130px]  bg-[url(./assets/laptopCard02.png)]'></div>
          </div>

    </div>


      </Container>
    );
};

export default Header;