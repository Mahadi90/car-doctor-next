import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServicesCard = ({service}) => {
    const {title, img, description, price, _id} = service || {}
    const des = description.slice(0,100)
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure>
    <Image  className='h-60 w-auto' height={300} width={500} alt={title} src={img} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{des}........</p>
    <div className="card-actions justify-between items-center">
        <p className='text-primary font-bold'>Price : ${price}</p>
      <Link href={`/services/${_id}`}><button className="btn btn-primary">See More</button></Link>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;