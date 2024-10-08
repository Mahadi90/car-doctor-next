
import Link from 'next/link';
import React from 'react';

const Banner = () => {
    return (
        <div className='lg:mx-12'>
            <div className="carousel w-full rounded-lg">
            {
                carosel.map((banner, index) => <div
                key={index} id={`slide${index +1}`} className="carousel-item relative w-full lg:h-[90vh] lg:py-0 py-4 bg-cover bg-top"
                style = {{
                    backgroundImage : `linear-gradient(45deg, rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`
                }}
                >
                    <div className= 'w-1/3 h-full flex items-center text-white ml-12 lg:ml-32'>
                        <div className='space-y-6'>
                        <h1 className='text-7xl font-bold'>{banner.title}</h1>
                        <p>{banner.desc}</p>
                        <button className='btn btn-primary mr-4'>Diccover More</button>
                        <button className='btn btn-primary btn-outline'>Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute flex right-8 space-x-6 bottom-4 lg:bottom-8">
                    <Link href={banner.prev} className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none">❮</Link>
                    <Link href={banner.next} className="btn btn-circle hover:bg-[#FF3811] hover:text-white hover:border-none">❯</Link>
                    </div>
                </div>)
            }

        </div>
        </div>
    );
};

const carosel = [
    {
        title: 'Affordable Price For Car Servicing',
        desc: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide2',
        prev: '#slide4'
    },
    {
        title: 'Affordable Price For Car Servicing',
        desc: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide3',
        prev: '#slide1'
    },
    {
        title: 'Affordable Price For Car Servicing',
        desc: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide4',
        prev: '#slide2'
    },
    {
        title: 'Affordable Price For Car Servicing',
        desc: 'There are many variations of passages of  available, but the majority have suffered alteration in some form',
        next: '#slide1',
        prev: '#slide3'
    },
]

export default Banner;