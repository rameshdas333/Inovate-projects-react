import Container from './Container';
import Laptop from '../assets/laptop.png'
import laptopcard from '../assets/laptocard.png'
import laptopcard02 from '../assets/laptopcard02.png'

const Header = () => {
    return (
      <Container>

    <div className='mt-24 z-50 '>
        <h1 className='w-[796px] mx-auto leading-14 text-white text-center  text-6xl font-chivo font-bold'>Get your work done with Management Tool</h1>
        <p className='w-[467px] mt-5 mb-8 leading-8 text-white text-center mx-auto text-lg  '>The world's first project management platform that connects everything</p>

        <div className='relative text-center mx-auto'>
            <input className='bg-white outline-0   py-5 px-6 w-[480px] rounded-[6px] text-black ' type="text" placeholder='Your bussiness email' />
            <button className= 'bg-[#43E7DF]  top-1 right-[480px]   absolute px-7 rounded-[6px] py-4'>Try for free</button>
        </div>

          <div>
            <img className='absolute mx-auto pt-[98px] bg-center top-[731px] right-[148px]' src={Laptop} alt=""/>
          <img className='absolute  top-0 left-0 pt-[908px] pl-[1100px] ' src={laptopcard} alt="" />

            <img className='absolute left-10 top-[1100px] ' src={laptopcard02} alt="" />
          </div>

    </div>


      </Container>
    );
};

export default Header;