import Image from 'next/image';
import React from 'react';
import aboutImg1 from '../../../public/assets/images/about_us/person.jpg'
import aboutImg2 from '../../../public/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 lg:mx-12 my-20'>
             <div className='relative mb-20 w-full'>
                <Image className='h-[500px] rounded-lg' alt='about-img' src={aboutImg1} width={500} height={600}/>
                <div className='-bottom-16 right-24 absolute'><Image className='h-[300px] border-8 border-white rounded-lg' alt='about-img' src={aboutImg2} width={300} height={300}/></div>
             </div>
             <div className='space-y-8'>
                <h3 className='text-primary font-bold'>About Us</h3>
                <h2 className='text-5xl font-bold space-y-2'>We are qualified <br /> & of experience <br /> in this field</h2>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. <br /> <br />the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
                <button className='btn btn-primary'>Get More Info</button>
             </div>
        </div>
    );
};

export default About;