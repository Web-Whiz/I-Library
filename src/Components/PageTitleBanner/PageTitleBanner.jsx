import React from 'react';


const PageTitleBanner = () => {
    return (
        <div className='relative w-full h-52'>
            <div className='w-full h-full'>
                <img className='w-full h-full' src='/banner01.jpg' alt="banner Image" />
            </div>
            <div className='absolute top-0 w-full h-full flex flex-col bg-[#000000a2] items-center justify-center text-white '>
                <h1 className='font-bold text-center text-3xl'>Contact Us</h1>
                <p className=' font-bold text-center text-lg'>Share your query and ideas with us!</p>
            </div>
        </div>
    );
};

export default PageTitleBanner;