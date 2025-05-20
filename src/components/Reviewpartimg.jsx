import React from 'react';
import customerimg from '../assets/customerimg.png'
import Container from './Container';

const Reviewpartimg = ({children}) => {
    return (
        <div>
           <Container>
             <img src={customerimg} alt="" />
            {children}
           </Container>
        </div>
    );
};

export default Reviewpartimg;