import React from 'react';
import Container from './Container';
import Elementimg from '../assets/elements.png'
import icon2 from '../assets/icon (2).png'

const Features = () => {
    return (
        <div className='mt-[164px]'>
            <Container>
                <div className='flex justify-between'>
                    <img src={Elementimg} alt="elements.logo" />
                    <div>
                        <h1 className='w-[553px] text-5xl font-bold text-header'>We provide features for your Business</h1>
                        <div className='grid grid-cols-2 pt-[64px] gap-12 items-center justify-between '>
                            <div>
                                <img className='w-[80px]' src={icon2} alt="icon (2).png" />
                                <h1 className='text-lg font-bold font-chivo'>Fast and Easy to use</h1>
                                <p className=''>Easily to convert API with just a few clicks</p>
                            </div>
                            <div>
                                <img className='w-[80px]' src={icon2} alt="icon (2).png" />
                                <h1 className='text-lg font-bold font-chivo'>Fast and Easy to use</h1>
                                <p className=''>Easily to convert API with just a few clicks</p>
                            </div>
                            <div className=''>
                                <img className='w-[80px]' src={icon2} alt="icon (2).png" />
                                <h1 className='text-2xl font-bold font-chivo'>Fast and Easy to use</h1>
                                <p className='text-para text-lg font-dmsans '>Easily to convert API with just a few clicks</p>
                            </div>
                            <div className='pt-10'>
                            <button className=' px-12 py-5 rounded-2xl  bg-bluebutton text-white '>Get Started</button>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Features;