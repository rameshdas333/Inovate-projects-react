import React from 'react';
import Container from './Container';
import Logofooter from '../assets/Logofooter.png'
import { BsFillSendFill } from "react-icons/bs";
import { SiGoogle } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
    return (
        <div className='px-3'>
            <Container>
                <div className='rounded-2xl md:rounded-0 w-auto px-3 md:px-0 md:h-[316px] bg-cover bg-center bg-no-repeat bg-[url(./assets/CTA.png)]'>
                <div className='md:p-24 md:flex items-center  justify-between'>
                    <h1 className='md:w-[557px]  text-3xl md:text-[44px] font-bold font-chivo leading-[56px] text-white'>Don’t find the answer? contact us for any query.</h1>
                 <div className='pb-2 '> <button className='py-2 md:py-5 px-8 md:px-12 text-lg  font-medium bg-[#43E7DF] text-white rounded-[6px]  '>Register</button></div>
                </div>
                </div>





                {/*==========footer part footer part ====== */}

                <section className=' md:pt-[124px]'>

 
 
                    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10">

    <nav>
  <img className='md:w-[111px] text-header' src={Logofooter} alt="" />
  <p className='py-6 text-base text-para font-chivo w-[263px]'>Build a modern and creative website with Innovate.</p>
  <div className='flex items-center justify-center gap-2'>
    <a href="https://www.google.com"><SiGoogle /></a>
    <a href="https://x.com"> <FaXTwitter /></a>
    <a href="https://www.instagram.com"><FaInstagram /></a>
    <a href="https://www.linkedin.com"><FaLinkedin /></a>
   
    
  </div>
  </nav>
  
  <nav></nav>

  {/*  */}

 
      <nav className='text-para'>
    <h6 className="footer-title text-[#2C2643]">Landingpages</h6>
    <a className="link link-hover">Pricing</a>
    <a className="link link-hover">Benefits</a>
    <a className="link link-hover">Features</a>
  </nav>
  <nav className='text-para'>
    <h6 className="footer-title text-[#2C2643]">Company</h6>
    <a className="link link-hover">Privacy Policy</a>
    <a className="link link-hover">Terms & Conditions</a>
    <a className="link link-hover">Partners</a>
    <a className="link link-hover">Contact</a>
  </nav>
  <nav className='text-para'>
    <h6 className="footer-title text-[#2C2643]">Resources</h6>
    <a className="link link-hover">Guides and resources</a>
    <a className="link link-hover">Blog</a>
    <a className="link link-hover">Tools</a>
    <a className="link link-hover">Support</a>
  </nav>
  <form>
    <h6 className="footer-title text-[#2C2643]">Get Latest Updates</h6>
    <p className='pt-[18px] pb-8 text-base text-para font-dmsans w-[285px]'>Subscribe to our newsletter and get many interesting things every week</p>
    <fieldset className="w-80">
      <div className="join">
        <input
          type="text"
          placeholder="username@site.com"
          className="outline-0 overflow-0 input input-bordered join-item" />
        <button className="btn btn-primary join-item"><BsFillSendFill /></button>
      </div>
    </fieldset>
  </form>
</footer>

<div className='border-[#D2D2D2] mt-20 mb-6  border-b border-2  '></div>

<p className='md:pt-[24px] text-center md:text-start  pb-[30px] text-base text-para font-dmsans'>© 2024 Innovate - All Right Reserved</p>
 
                </section>
            </Container>
        </div>
    );
};

export default Footer;