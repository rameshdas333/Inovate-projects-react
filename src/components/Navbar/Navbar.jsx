import { FaBars } from 'react-icons/fa6';
import logo from '../../assets/logo.png'
import Container from '../Container';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [menu,setMenu] = useState(false)
  const [navscroll,setNavscroll] = useState(false)
 const handleClick = () =>{
 setMenu(!menu)
 }


 useEffect(()=>{
  function scrollFunction(){
    console.log('ok')
    if(window.scrollY >200 ){
     setNavscroll(true)


    }else{
      setNavscroll(false)
    }
  }
  window.addEventListener("scroll",scrollFunction)
 },[])
    return (
// {`z-50 ${navscroll ? 'fixed  top-0 left-1/2 px-10 -translate-x-1/2 w-full bg-red-300 ':"" }  md:flex px-5 md:px-0 justify-between items-center py-5`
     <nav className={`z-50 w-full ${navscroll ? 'bg-red-400': ''} fixed top-0 left-0`}>
       <Container>
 <div className={` flex justify-between items-center  `} >
           <div className=' flex items-center justify-between'>
           <img className='h-14' src={logo} alt="" />
             <button className='z-50' onClick={handleClick} >
              <FaBars className=' text-2xl text-white md:hidden'/></button>
           </div>
           <div className=''>
           <ul className=' font-bold hidden hover:text-blue-500   md:flex gap-12 font-dmsans text-black '>
                <li><a href="#">Home</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Pages</a></li>
                <li><a href="#">Blog</a></li>
            </ul>
           </div>
           
           <div className='hidden md:flex  items-center gap-5'>
           <p className='text-black text-lg'><a href="">Login</a></p>
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
     </nav>
      
     
     
    );
};

export default Navbar;

