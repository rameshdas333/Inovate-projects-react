import React from 'react';
import Container from './Container';
import Elementimg from '../assets/elements.png'
import icon2 from '../assets/icon (2).png'

const Features = () => {
    return (
        <div className='mt-10 md:mt-[164px]'>
            <Container>
                <div className='px-3 md:px-0 md:flex justify-between'>
                    <img src={Elementimg} alt="elements.logo" />
                    <div>
                        <h1 className='w-auto md:w-[553px] text-3xl md:text-5xl font-bold text-header'>We provide features for your Business</h1>
                        <div className='grid md:grid-cols-2 pt-4 md:pt-[64px] gap-6 md:gap-12 items-center justify-between '>
                            <div>
                                <img className='w-auto md:w-[80px]' src={icon2} alt="icon (2).png" />
                                <h1 className='text-lg font-bold font-chivo'>Fast and Easy to use</h1>
                                <p className=''>Easily to convert API with just a few clicks</p>
                            </div>
                            <div>
                                <img className='w-auto md:w-[80px]' src={icon2} alt="icon (2).png" />
                                <h1 className='text-lg font-bold font-chivo'>Fast and Easy to use</h1>
                                <p className=''>Easily to convert API with just a few clicks</p>
                            </div>
                            <div className=''>
                                <img className='w-auto md:w-[80px]' src={icon2} alt="icon (2).png" />
                                <h1 className='text-2xl font-bold font-chivo'>Fast and Easy to use</h1>
                                <p className='text-para text-lg font-dmsans '>Easily to convert API with just a few clicks</p>
                            </div>
                            <div className='pt-2 md:pt-10'>
                            <button className='px-8 md:px-12 py-5 rounded-xl md:rounded-2xl  bg-bluebutton hover:bg-green-500 text-white '>Get Started</button>

                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Features;