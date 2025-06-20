import { FaBars } from 'react-icons/fa6';
import logo from '../../assets/logo.png'
import Container from '../Container';
import { useState } from 'react';

const Navbar = () => {
  const [menu,setMenu] = useState(false)
 const handleClick = () =>{
 setMenu(!menu)
 }
    return (

      <Container>
 <div className='z-50  md:flex px-5 md:px-0 justify-between items-center pt-8 '>
           <div className=' flex items-center justify-between'>
           <img className='h-14' src={logo} alt="" />
             <button className='z-50' onClick={handleClick} ><FaBars className=' text-2xl text-white md:hidden'/></button>
           </div>
           <div className=''>
           <ul className=' font-bold hidden  md:flex gap-12 font-dmsans text-white '>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
           </div>
           
           <div className='hidden md:flex  items-center gap-5'>
           <p className='text-white text-lg'><a href="">Login</a></p>
           <button className='py-5 px-12 text-lg  font-medium bg-[#43E7DF] text-black rounded-[6px]  '>Register</button>
           </div>
        </div>
                    {
        menu &&
         <div className='bg-red-400'>
         <p>bhfhfhkfhghk</p>
          </div>
      }
      </Container> 
      
     
     
    );
};

export default Navbar;

