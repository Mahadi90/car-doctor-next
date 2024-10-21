import CommonBanner from '@/components/shared/CommonBanner';
import { getServices, getServicesDetails } from '@/providers/getServices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';

const serviceDetailsPage =async ({params}) => {
    const service =await getServicesDetails(params.id)
    const services = await getServices()
    console.log(services)
    console.log(service)
    const {img, title, description, facility, price} = service.service || {}
   
    return (
        <div className='mx-2 lg:mx-12'>
            <CommonBanner title={'Services Details'} route={'Home/Service Details'}></CommonBanner>
            {/* single service details */}
            <div className='lg:flex gap-6 mt-20 mb-10'>
            
            <div className='lg:w-[70%] text-start space-y-8'>
              <Image className='h-[60vh] w-[100%] rounded-lg' src={img} alt={title} width={720} height={320} />
              <h3 className='text-5xl font-bold'>{title}</h3>
              <p className='text-gray-500 text-justify'>{description}</p>
              {/* facilities */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    facility.map((facilit, id) => <>
                    <div key={id} className='p-8 rounded-lg bg-gray-200 space-y-3'>
                        <h3 className='text-2xl font-bold'>{facilit.name}</h3>
                        <p className='text-gray-500 text-justify'>{facilit.details}</p>
                    </div>
                    </>)
                }
              </div>
              {/* steps */}
              <div className='space-y-4 mt-10'>
                <h3 className='text-5xl font-bold'>3 Simple Steps to Process</h3>
                <p className='text-gray-500 text-justify'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text</p>
                <div className='grid grid-cols-1 md:grid-cols-3 text-center gap-4'>
                    <div className='space-y-2 border-2 rounded-lg p-4'>
                        <h2 className='ml-[45%] lg:ml-[40%] bg-primary p-4 rounded-full w-12 h-12 text-white font-bold text-xl border-4 border-pink-200 flex items-center justify-center'>01</h2>
                        <h3 className='text-2xl font-semibold'>Step One</h3>
                        <p>It uses a dictionary of over 200 .</p>
                    </div>
                    <div className='space-y-2 border-2 rounded-lg p-4'>
                        <h2 className='ml-[45%] lg:ml-[40%] bg-primary p-4 rounded-full w-12 h-12 text-white font-bold text-xl border-4 border-pink-200 flex items-center justify-center'>02</h2>
                        <h3 className='text-2xl font-semibold'>Step Two</h3>
                        <p>It uses a dictionary of over 200 .</p>
                    </div>
                    <div className='space-y-2 border-2 rounded-lg p-4'>
                        <h2 className='ml-[45%] lg:ml-[40%] bg-primary p-4 rounded-full w-12 h-12 text-white font-bold text-xl border-4 border-pink-200 flex items-center justify-center'>03</h2>
                        <h3 className='text-2xl font-semibold'>Step Three</h3>
                        <p>It uses a dictionary of over 200 .</p>
                    </div>
                </div>
              </div>
            </div>
            <div className='lg:w-[30%]'> 
              
                <h5 className='my-8 text-5xl font-semibold'>Price : ${price}</h5>
                <button className='btn btn-primary w-full mb-4'>Proced to checkout</button>
                    <div className='bg-gray-200 p-4 px-8 space-y-4'>
                    <h3 className='text-3xl font-semibold'>Services</h3>
                     {
                        services.res.map((service) => <>
                        <div className='flex hover:bg-primary hover:text-white flex-grow-1 rounded-md bg-white items-center p-4' key={service._id}>
                         <h4 className='w-full'>{service.title}</h4>
                         <Link  href={`/services/${service._id}`}><FaArrowCircleRight/></Link>
                        </div>
                        </>)
                     }
                </div>
            </div>
            </div>
        </div>
    );
};

export default serviceDetailsPage;