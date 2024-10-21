import React from 'react';

const CommonBanner = ({title, route}) => {
    return (
        <div className='h-[50vh] rounded-lg'
        style={{backgroundImage : `url(/assets/images/checkout/checkout.png)`, backgroundRepeat : 'no-repeat', backgroundPosition : 'center', backgroundSize : 'cover'}}
        >
            <div className='bg-black bg-opacity-30 h-full relative rounded-lg'>
            <h2 className='text-white font-semibold text-5xl pl-10 lg:pl-16 pt-36'>{title}</h2>
            <h2 className='text-white bg-primary transform -skew-x-12 p-4 w-56 text-center absolute bottom-0 left-[27%] lg:left-[42%]'>{route}</h2>
            </div>
        </div>
    );
};

export default CommonBanner;