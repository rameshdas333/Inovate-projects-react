

import Laptop from '../assets/Laptop Screen.png'

const Bannerimg = ({children}) => {
    return (
        <div className='relative bg-cover bg-center bg-[url(./assets/BgShape.png)]  h-[1240px]'>

            <img className='absolute bg-center top-[731px] left-[148px]' src={Laptop} alt="" />
            {children}
        </div>
    );
};

export default Bannerimg; 