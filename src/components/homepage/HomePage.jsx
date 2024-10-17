import React from 'react';
import Banner from './Banner';
import About from './About';

const HomePage = () => {
    return (
        <div className='mx-2'> 
            <Banner/>
            <About/>
        </div>
    );
};

export default HomePage;