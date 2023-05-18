import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CarDetails = () => {

    const details = useLoaderData();
    const { _id, toyName,categoryName, sellerName, sellerEmail, img, service, price, rating } = details;
    // console.log(details);
//   const [toyDetails, setToyDetails] = useState([]);

//   

//   const toyData = toyDetails.find((toy) => toy._id == _id);

    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row ">
    <div className='lg:w-1/2'>
        <img src={img} className=' rounded-3xl ' />
    </div>
    <div className=' lg:w-1/2'>
      <h1 className="text-4xl font-bold mb-5">{toyName}</h1>
      <h2  className="text-xl font-bold mb-3">{categoryName}</h2>
      <h2  className="text-xl mb-3">{rating}</h2>
      <h2  className="text-xl mb-3 font-bold">$ {price}</h2>
      <h2  className="text-xl mb-3">{sellerName}</h2>
      <h2  className="text-xl mb-3">{sellerEmail}</h2>

      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      {/* <button className="btn btn-outline btn-primary">boy now</button> */}
    </div>
  </div>
</div>
    );
};

export default CarDetails;