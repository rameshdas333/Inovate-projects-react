import React from 'react';
import logo from '../assets/Logo.png'
import Container from './Container';

const Navbar = () => {
    return (
      
      
     
      <Container>


 <div className='z-50 flex justify-between items-center pt-8 '>
           <div>
           <img className='h-14' src={logo} alt="" />
           </div>
           <div className=''>
           <ul className=' font-bold flex gap-12 font-dmsans text-white '>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
           </div>
           <div className='flex items-center gap-5'>
           <p className='text-white text-lg'><a href="">Login</a></p>
           <button className='py-5 px-12 text-lg  font-medium bg-[#43E7DF] text-black rounded-[6px]  '>Register</button>
           </div>
        </div>

      </Container>  
     
    );
};

export default Navbar;