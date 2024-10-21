import React from 'react';
import ServicesCard from '../card/ServicesCard';
import { getServices } from '@/providers/getServices';

const Services = async() => {
    const data =await getServices()
    console.log(data.res)
    return (
        <div className='lg:mx-12'>
            <div className="services-title space-y-2 lg:w-[50%] mx-auto text-center my-6">
                <h2 className='text-primary font-bold'>Services</h2>
                <h2 className='text-3xl font-bold'>Our services area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-12'>
           { data.res.length > 0 &&
                data.res.map(service => <ServicesCard key={service._id} service={service}></ServicesCard>)
            }
           </div>
           <button className='btn btn-outline btn-primary mx-auto block mb-12'>More Services</button>
        </div>
    );
};

export default Services;