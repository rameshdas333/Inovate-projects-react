import React from 'react';
import Container from './Container';

const PricingPart = () => {
    return (
        <div>
            <Container>
                <div className='text-center'>
                    <h1 className='text-[44px] mx-auto text-center font-chivo font-bold w-[624px]'>Pricing Designed To Fit Your Business</h1>
                    <p className='font-bold text-2xl text-[#3639A4] pb-[77px]'>Monthly</p>
                </div>

                {/*  */}

<div className='grid grid-cols-3 gap-[30px]'>
<div className="group rounded-2xl hover:bg-bluebutton w-[450px] px-15 py-10 shadow-2xl">
  <div className="group-hover:text-white ">
    {/* image image image */}
       <div className='text-center '>
        <svg  className='mx-auto' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_3_476)">
<path d="M19.7145 19.2682C22.3615 19.2682 24.6534 18.3188 26.5266 16.4456C28.3991 14.5727 29.3488 12.2812 29.3488 9.63377C29.3488 6.98729 28.3994 4.69543 26.5263 2.82195C24.6531 0.9494 22.3612 0 19.7145 0C17.0671 0 14.7755 0.9494 12.9026 2.82226C11.0298 4.69512 10.0801 6.98699 10.0801 9.63377C10.0801 12.2812 11.0298 14.573 12.9026 16.4459C14.7761 18.3184 17.068 19.2682 19.7145 19.2682ZM14.5604 4.47967C15.9974 3.0426 17.6832 2.34405 19.7145 2.34405C21.7454 2.34405 23.4315 3.0426 24.8689 4.47967C26.3059 5.91704 27.0048 7.60314 27.0048 9.63377C27.0048 11.665 26.3059 13.3508 24.8689 14.7882C23.4315 16.2256 21.7454 16.9241 19.7145 16.9241C17.6838 16.9241 15.998 16.2253 14.5604 14.7882C13.123 13.3511 12.4241 11.665 12.4241 9.63377C12.4241 7.60314 13.123 5.91704 14.5604 4.47967Z" fill="#2290F5" className='group-hover:fill-white'/>
<path d="M36.5725 30.7582C36.5185 29.9788 36.4092 29.1286 36.2484 28.2308C36.0861 27.3262 35.877 26.4711 35.6268 25.6896C35.368 24.8818 35.0167 24.084 34.5819 23.3196C34.1311 22.5261 33.6013 21.8352 33.0068 21.2667C32.3852 20.6719 31.6241 20.1937 30.744 19.8448C29.8669 19.4979 28.8949 19.3221 27.8552 19.3221C27.4469 19.3221 27.052 19.4896 26.2893 19.9861C25.82 20.2922 25.271 20.6462 24.6582 21.0378C24.1342 21.3716 23.4243 21.6844 22.5476 21.9676C21.6922 22.2444 20.8236 22.3848 19.9661 22.3848C19.1092 22.3848 18.2406 22.2444 17.3846 21.9676C16.5088 21.6847 15.7986 21.3719 15.2756 21.0381C14.6686 20.6502 14.1192 20.2962 13.6429 19.9858C12.8808 19.4893 12.4859 19.3218 12.0776 19.3218C11.0376 19.3218 10.0659 19.4979 9.18914 19.8452C8.30962 20.1934 7.54821 20.6716 6.92596 21.267C6.33148 21.8358 5.80169 22.5264 5.35125 23.3196C4.91699 24.084 4.56543 24.8815 4.30664 25.6899C4.0567 26.4714 3.84766 27.3262 3.6853 28.2308C3.52417 29.1274 3.41522 29.9779 3.36121 30.7591C3.30811 31.523 3.28125 32.318 3.28125 33.1212C3.28125 35.2092 3.94501 36.8996 5.2539 38.1462C6.54662 39.3764 8.25683 40.0001 10.3372 40.0001H29.5974C31.6772 40.0001 33.3874 39.3764 34.6804 38.1462C35.9896 36.9005 36.6534 35.2095 36.6534 33.1209C36.6531 32.3149 36.6259 31.5199 36.5725 30.7582ZM33.0642 36.4479C32.21 37.2609 31.076 37.6561 29.5971 37.6561H10.3372C8.85802 37.6561 7.72399 37.2609 6.87011 36.4482C6.0324 35.6508 5.6253 34.5622 5.6253 33.1212C5.6253 32.3717 5.65002 31.6316 5.69946 30.9212C5.74768 30.2242 5.84625 29.4585 5.99243 28.6449C6.13677 27.8414 6.32049 27.0873 6.539 26.4046C6.74865 25.75 7.0346 25.1018 7.38921 24.4774C7.72765 23.8823 8.11706 23.3718 8.54674 22.9604C8.94866 22.5756 9.45525 22.2606 10.0522 22.0244C10.6042 21.8059 11.2247 21.6863 11.8982 21.6683C11.9803 21.7119 12.1264 21.7952 12.3633 21.9496C12.8451 22.2637 13.4006 22.6219 14.0146 23.0141C14.7067 23.4554 15.5984 23.8539 16.6638 24.1979C17.753 24.55 18.8638 24.7289 19.9664 24.7289C21.069 24.7289 22.1801 24.55 23.2687 24.1982C24.335 23.8536 25.2264 23.4554 25.9195 23.0135C26.5478 22.6119 27.0877 22.264 27.5695 21.9496C27.8064 21.7955 27.9525 21.7119 28.0346 21.6683C28.7085 21.6863 29.3289 21.8059 29.8812 22.0244C30.4779 22.2606 30.9844 22.5759 31.3864 22.9604C31.816 23.3715 32.2055 23.882 32.5439 24.4777C32.8988 25.1018 33.1851 25.7503 33.3944 26.4043C33.6132 27.0879 33.7972 27.8417 33.9413 28.6446C34.0872 29.4597 34.186 30.2257 34.2343 30.9215V30.9221C34.284 31.6298 34.309 32.3695 34.3093 33.1212C34.309 34.5625 33.9019 35.6508 33.0642 36.4479Z" fill="#2290F5" className='group-hover:fill-white'/>
</g>
<defs>
<clipPath id="clip0_3_476">
<rect width="39.9999" height="40" fill="white"/>
</clipPath>
</defs>
          </svg>
        <p className='group-hover:text-white text-2xl font-chivo font-bold text-bluebutton leading-9 pt-8 pb-1'>Personal</p>
        <h1 className='group-hover:text-white text-[44px] font-bold font-chivo text-[#2C2643]'>$10/mth</h1>
        <p className='group-hover:text-white text-lg text-[#2C2643] pb-10 pt-3 font-dmsans font-medium'>Annual pricing (save 20%)</p>
       </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>Calendar View</span>

      </li>
       <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>Custom Templates</span>
      </li>
     <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>list view</span>

       
      </li>
     <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>board view</span>

       
      </li>
     <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>Assignees & Due Dates</span>

       
      </li> 
    </ul>
    <div className="mt-6">
      <button className="group-hover:text-white group-hover:bg-secondary1 btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
<div className="group rounded-2xl hover:bg-bluebutton w-[450px] px-15 py-10 shadow-2xl">
  <div className="group-hover:text-white ">
    {/* image image image */}
       <div className='text-center '>
        <svg  className='mx-auto' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_3_476)">
<path d="M19.7145 19.2682C22.3615 19.2682 24.6534 18.3188 26.5266 16.4456C28.3991 14.5727 29.3488 12.2812 29.3488 9.63377C29.3488 6.98729 28.3994 4.69543 26.5263 2.82195C24.6531 0.9494 22.3612 0 19.7145 0C17.0671 0 14.7755 0.9494 12.9026 2.82226C11.0298 4.69512 10.0801 6.98699 10.0801 9.63377C10.0801 12.2812 11.0298 14.573 12.9026 16.4459C14.7761 18.3184 17.068 19.2682 19.7145 19.2682ZM14.5604 4.47967C15.9974 3.0426 17.6832 2.34405 19.7145 2.34405C21.7454 2.34405 23.4315 3.0426 24.8689 4.47967C26.3059 5.91704 27.0048 7.60314 27.0048 9.63377C27.0048 11.665 26.3059 13.3508 24.8689 14.7882C23.4315 16.2256 21.7454 16.9241 19.7145 16.9241C17.6838 16.9241 15.998 16.2253 14.5604 14.7882C13.123 13.3511 12.4241 11.665 12.4241 9.63377C12.4241 7.60314 13.123 5.91704 14.5604 4.47967Z" fill="#2290F5" className='group-hover:fill-white'/>
<path d="M36.5725 30.7582C36.5185 29.9788 36.4092 29.1286 36.2484 28.2308C36.0861 27.3262 35.877 26.4711 35.6268 25.6896C35.368 24.8818 35.0167 24.084 34.5819 23.3196C34.1311 22.5261 33.6013 21.8352 33.0068 21.2667C32.3852 20.6719 31.6241 20.1937 30.744 19.8448C29.8669 19.4979 28.8949 19.3221 27.8552 19.3221C27.4469 19.3221 27.052 19.4896 26.2893 19.9861C25.82 20.2922 25.271 20.6462 24.6582 21.0378C24.1342 21.3716 23.4243 21.6844 22.5476 21.9676C21.6922 22.2444 20.8236 22.3848 19.9661 22.3848C19.1092 22.3848 18.2406 22.2444 17.3846 21.9676C16.5088 21.6847 15.7986 21.3719 15.2756 21.0381C14.6686 20.6502 14.1192 20.2962 13.6429 19.9858C12.8808 19.4893 12.4859 19.3218 12.0776 19.3218C11.0376 19.3218 10.0659 19.4979 9.18914 19.8452C8.30962 20.1934 7.54821 20.6716 6.92596 21.267C6.33148 21.8358 5.80169 22.5264 5.35125 23.3196C4.91699 24.084 4.56543 24.8815 4.30664 25.6899C4.0567 26.4714 3.84766 27.3262 3.6853 28.2308C3.52417 29.1274 3.41522 29.9779 3.36121 30.7591C3.30811 31.523 3.28125 32.318 3.28125 33.1212C3.28125 35.2092 3.94501 36.8996 5.2539 38.1462C6.54662 39.3764 8.25683 40.0001 10.3372 40.0001H29.5974C31.6772 40.0001 33.3874 39.3764 34.6804 38.1462C35.9896 36.9005 36.6534 35.2095 36.6534 33.1209C36.6531 32.3149 36.6259 31.5199 36.5725 30.7582ZM33.0642 36.4479C32.21 37.2609 31.076 37.6561 29.5971 37.6561H10.3372C8.85802 37.6561 7.72399 37.2609 6.87011 36.4482C6.0324 35.6508 5.6253 34.5622 5.6253 33.1212C5.6253 32.3717 5.65002 31.6316 5.69946 30.9212C5.74768 30.2242 5.84625 29.4585 5.99243 28.6449C6.13677 27.8414 6.32049 27.0873 6.539 26.4046C6.74865 25.75 7.0346 25.1018 7.38921 24.4774C7.72765 23.8823 8.11706 23.3718 8.54674 22.9604C8.94866 22.5756 9.45525 22.2606 10.0522 22.0244C10.6042 21.8059 11.2247 21.6863 11.8982 21.6683C11.9803 21.7119 12.1264 21.7952 12.3633 21.9496C12.8451 22.2637 13.4006 22.6219 14.0146 23.0141C14.7067 23.4554 15.5984 23.8539 16.6638 24.1979C17.753 24.55 18.8638 24.7289 19.9664 24.7289C21.069 24.7289 22.1801 24.55 23.2687 24.1982C24.335 23.8536 25.2264 23.4554 25.9195 23.0135C26.5478 22.6119 27.0877 22.264 27.5695 21.9496C27.8064 21.7955 27.9525 21.7119 28.0346 21.6683C28.7085 21.6863 29.3289 21.8059 29.8812 22.0244C30.4779 22.2606 30.9844 22.5759 31.3864 22.9604C31.816 23.3715 32.2055 23.882 32.5439 24.4777C32.8988 25.1018 33.1851 25.7503 33.3944 26.4043C33.6132 27.0879 33.7972 27.8417 33.9413 28.6446C34.0872 29.4597 34.186 30.2257 34.2343 30.9215V30.9221C34.284 31.6298 34.309 32.3695 34.3093 33.1212C34.309 34.5625 33.9019 35.6508 33.0642 36.4479Z" fill="#2290F5" className='group-hover:fill-white'/>
</g>
<defs>
<clipPath id="clip0_3_476">
<rect width="39.9999" height="40" fill="white"/>
</clipPath>
</defs>
          </svg>
        <p className='group-hover:text-white text-2xl font-chivo font-bold text-bluebutton leading-9 pt-8 pb-1'>Personal</p>
        <h1 className='group-hover:text-white text-[44px] font-bold font-chivo text-[#2C2643]'>$10/mth</h1>
        <p className='group-hover:text-white text-lg text-[#2C2643] pb-10 pt-3 font-dmsans font-medium'>Annual pricing (save 20%)</p>
       </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>Calendar View</span>
 
      </li>
       <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>Custom Templates</span>
      </li>
     <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>list view</span>

       
      </li>
     <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>board view</span>

       
      </li>
     <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>Assignees & Due Dates</span>

       
      </li> 
    </ul>
    <div className="mt-6">
      <button className="group-hover:text-white group-hover:bg-secondary1 btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
<div className="group rounded-2xl hover:bg-bluebutton w-[450px] px-15 py-10 shadow-2xl">
  <div className="group-hover:text-white ">
    {/* image image image */}
       <div className='text-center '>
        <svg  className='mx-auto' width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_3_476)">
<path d="M19.7145 19.2682C22.3615 19.2682 24.6534 18.3188 26.5266 16.4456C28.3991 14.5727 29.3488 12.2812 29.3488 9.63377C29.3488 6.98729 28.3994 4.69543 26.5263 2.82195C24.6531 0.9494 22.3612 0 19.7145 0C17.0671 0 14.7755 0.9494 12.9026 2.82226C11.0298 4.69512 10.0801 6.98699 10.0801 9.63377C10.0801 12.2812 11.0298 14.573 12.9026 16.4459C14.7761 18.3184 17.068 19.2682 19.7145 19.2682ZM14.5604 4.47967C15.9974 3.0426 17.6832 2.34405 19.7145 2.34405C21.7454 2.34405 23.4315 3.0426 24.8689 4.47967C26.3059 5.91704 27.0048 7.60314 27.0048 9.63377C27.0048 11.665 26.3059 13.3508 24.8689 14.7882C23.4315 16.2256 21.7454 16.9241 19.7145 16.9241C17.6838 16.9241 15.998 16.2253 14.5604 14.7882C13.123 13.3511 12.4241 11.665 12.4241 9.63377C12.4241 7.60314 13.123 5.91704 14.5604 4.47967Z" fill="#2290F5" className='group-hover:fill-white'/>
<path d="M36.5725 30.7582C36.5185 29.9788 36.4092 29.1286 36.2484 28.2308C36.0861 27.3262 35.877 26.4711 35.6268 25.6896C35.368 24.8818 35.0167 24.084 34.5819 23.3196C34.1311 22.5261 33.6013 21.8352 33.0068 21.2667C32.3852 20.6719 31.6241 20.1937 30.744 19.8448C29.8669 19.4979 28.8949 19.3221 27.8552 19.3221C27.4469 19.3221 27.052 19.4896 26.2893 19.9861C25.82 20.2922 25.271 20.6462 24.6582 21.0378C24.1342 21.3716 23.4243 21.6844 22.5476 21.9676C21.6922 22.2444 20.8236 22.3848 19.9661 22.3848C19.1092 22.3848 18.2406 22.2444 17.3846 21.9676C16.5088 21.6847 15.7986 21.3719 15.2756 21.0381C14.6686 20.6502 14.1192 20.2962 13.6429 19.9858C12.8808 19.4893 12.4859 19.3218 12.0776 19.3218C11.0376 19.3218 10.0659 19.4979 9.18914 19.8452C8.30962 20.1934 7.54821 20.6716 6.92596 21.267C6.33148 21.8358 5.80169 22.5264 5.35125 23.3196C4.91699 24.084 4.56543 24.8815 4.30664 25.6899C4.0567 26.4714 3.84766 27.3262 3.6853 28.2308C3.52417 29.1274 3.41522 29.9779 3.36121 30.7591C3.30811 31.523 3.28125 32.318 3.28125 33.1212C3.28125 35.2092 3.94501 36.8996 5.2539 38.1462C6.54662 39.3764 8.25683 40.0001 10.3372 40.0001H29.5974C31.6772 40.0001 33.3874 39.3764 34.6804 38.1462C35.9896 36.9005 36.6534 35.2095 36.6534 33.1209C36.6531 32.3149 36.6259 31.5199 36.5725 30.7582ZM33.0642 36.4479C32.21 37.2609 31.076 37.6561 29.5971 37.6561H10.3372C8.85802 37.6561 7.72399 37.2609 6.87011 36.4482C6.0324 35.6508 5.6253 34.5622 5.6253 33.1212C5.6253 32.3717 5.65002 31.6316 5.69946 30.9212C5.74768 30.2242 5.84625 29.4585 5.99243 28.6449C6.13677 27.8414 6.32049 27.0873 6.539 26.4046C6.74865 25.75 7.0346 25.1018 7.38921 24.4774C7.72765 23.8823 8.11706 23.3718 8.54674 22.9604C8.94866 22.5756 9.45525 22.2606 10.0522 22.0244C10.6042 21.8059 11.2247 21.6863 11.8982 21.6683C11.9803 21.7119 12.1264 21.7952 12.3633 21.9496C12.8451 22.2637 13.4006 22.6219 14.0146 23.0141C14.7067 23.4554 15.5984 23.8539 16.6638 24.1979C17.753 24.55 18.8638 24.7289 19.9664 24.7289C21.069 24.7289 22.1801 24.55 23.2687 24.1982C24.335 23.8536 25.2264 23.4554 25.9195 23.0135C26.5478 22.6119 27.0877 22.264 27.5695 21.9496C27.8064 21.7955 27.9525 21.7119 28.0346 21.6683C28.7085 21.6863 29.3289 21.8059 29.8812 22.0244C30.4779 22.2606 30.9844 22.5759 31.3864 22.9604C31.816 23.3715 32.2055 23.882 32.5439 24.4777C32.8988 25.1018 33.1851 25.7503 33.3944 26.4043C33.6132 27.0879 33.7972 27.8417 33.9413 28.6446C34.0872 29.4597 34.186 30.2257 34.2343 30.9215V30.9221C34.284 31.6298 34.309 32.3695 34.3093 33.1212C34.309 34.5625 33.9019 35.6508 33.0642 36.4479Z" fill="#2290F5" className='group-hover:fill-white'/>
</g>
<defs>
<clipPath id="clip0_3_476">
<rect width="39.9999" height="40" fill="white"/>
</clipPath>
</defs>
          </svg>
        <p className='group-hover:text-white text-2xl font-chivo font-bold text-bluebutton leading-9 pt-8 pb-1'>Personal</p>
        <h1 className='group-hover:text-white text-[44px] font-bold font-chivo text-[#2C2643]'>$10/mth</h1>
        <p className='group-hover:text-white text-lg text-[#2C2643] pb-10 pt-3 font-dmsans font-medium'>Annual pricing (save 20%)</p>
       </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>Calendar View</span>





       
      </li>
       <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>Custom Templates</span>
      </li>
     <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>list view</span>

       
      </li>
     <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>board view</span>

       
      </li>
     <li className='flex  gap-1'>
        <div className= ' flex items-center  justify-center   rounded-full bg-[#F4EBFF] h-6 w-6'>
      <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
         </div>
        <span>Assignees & Due Dates</span>

       
      </li> 
    </ul>
    <div className="mt-6">
      <button className="group-hover:text-white group-hover:bg-secondary1 btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>

                </div>
                
            </Container>
        </div>
    );
};

export default PricingPart;