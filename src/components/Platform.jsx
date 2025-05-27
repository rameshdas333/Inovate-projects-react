
import Container from './Container';
import icon from '../assets/icon.png'

const Platform = () => {

    const cards = [
        {
           img:icon,
           title:'Login or sign up to be able use our platform',
           description:'This quickstart shows you how to use Identity Platform to sign in a user with an email and password. '
        },
        {
           img:icon,
           title:'Login or sign up to be able use our platform',
           description:'This quickstart shows you how to use Identity Platform to sign in a user with an email and password. '
        },
        {
           img:icon,
           title:'Login or sign up to be able use our platform',
           description:'This quickstart shows you how to use Identity Platform to sign in a user with an email and password. '
        }
      
    ]
    return (
        <div>
            <Container>
               <div className='pt-[260px]'>
                 <div className='md:flex justify-between px-3 md:px-0 '>
                        <h1 className='w-auto md:w-[504px] text-4xl  md:text-5xl font-bold font-chivo text-header'>How simple is it to use our platform?</h1>
                        <p className='font-dmsans text-base  md:text-lg text-[#645E76] w-auto md:w-[530px] py-5 md:py-5'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                        </div>
                <div className='pt-2 px-3 md:px-0 md:pt-[116px] md:flex gap-[200px] '>
                   {
                    cards.map((card,idx) =>(
                        
                      
                               <div key={idx} className='md:flex  flex-col '>
                            <img className=' mx-auto  w-[104px]' src={card.img} alt="" />
                            <h1 className='pt-6 pb-4 md:text-2xl text-header font-black'>{card.title}</h1>
                            <p className='text-base md:text-lg'>{card.description}</p>
                        </div>
                        
                      
                        
                    ))
                   }
                </div>
               
               </div>

            </Container>
        </div>
    );
};

export default Platform;