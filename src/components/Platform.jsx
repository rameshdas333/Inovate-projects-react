
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
                 <div className='flex justify-between'>
                        <h1 className='w-[504px]  text-5xl font-bold font-chivo text-header'>How simple is it to use our platform?</h1>
                        <p className='font-dmsans text-lg text-[#645E76] w-[530px]'>This Innovate Con guide explores the most popular platforms and walks you through how to use them to grow your business.</p>
                        </div>
                <div className='pt-[116px] flex gap-[200px] '>
                   {
                    cards.map(card =>(
                        
                      
                               <div className='flex  flex-col '>
                            <img className=' mx-auto  w-[104px]' src={card.img} alt="" />
                            <h1 className='pt-6 pb-4 text-2xl text-header font-black'>{card.title}</h1>
                            <p className=' text-lg'>{card.description}</p>
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