import React, { useEffect, useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { useLoaderData, useParams } from 'react-router-dom';

const CarDetails = () => {

    const details = useLoaderData();
    console.log(details);
    const { _id, toyName,categoryName, sellerName, email, img,  description, price, rating } = details;
    

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className='lg:w-1/2'>
        <img src={img} className=' rounded-3xl ' />
    </div>
    <div className=' lg:w-1/2'>
      <h1 className="text-5xl font-bold mb-5">{toyName}</h1>
      <h2  className="text-xl font-bold mb-3"> <small>Category: </small>{categoryName}</h2>
      <h2  className="text-xl mb-3">
                        {rating} <Rating placeholderRating={rating}
              emptySymbol={<FaRegStar/>} readonly placeholderSymbol={<FaStar/>}  fullSymbol={<FaStar/>}/>
                        </h2>
      <h2  className="text-xl mb-3 font-bold">$ {price}</h2>
      <h2  className="text-xl mb-3">{sellerName}</h2>
      <h2  className="text-xl mb-3">{email}</h2>

      <p className="py-6 text-xl">{description}</p>
      
    </div>
  </div>
</div>
    );
};

export default CarDetails;