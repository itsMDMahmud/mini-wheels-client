import React from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const MyToysList = ({myToy, user, handleDelete}) => {
    const { _id, toyName,categoryName, sellerName, email, img, service, price, rating } = myToy;
    return (
        <tr>
                    
                    <td>
                      <div className="avatar">
                        <div className="rounded w-40 mask mask-squircle">
                          {img ? <img className='' src={img} alt="img"/> : <img src="https://i.ibb.co/vz8C4Qf/User-Avatar-in-Suit-PNG.png"/> }
                          
                        </div>
                      </div>
                    </td>
                    <th> 
                        <div className='text-3xl mb-3'>{toyName}</div> 
                        <div className='text-xl'><small>Category:</small> {categoryName}</div> </th>
                    <td className='text-center'>
                        <div className='text-2xl mb-3'>$ {price}</div>    
                        <div className='text-xl inline-flex gap-2'>
                        {rating} <Rating placeholderRating={rating}
              emptySymbol={<FaRegStar/>} readonly placeholderSymbol={<FaStar/>}  fullSymbol={<FaStar/>}/>
                        </div>
                    </td>  
                    <td>
                        <div className='text-2xl mb-3'>{sellerName}</div>
                        <div className='text-xl'>{email}</div>
                    </td>
                    <th className=''>
                        <Link to={`update/${_id}`}><button className="btn">Update</button></Link> 
                        
                        <button onClick={()=> handleDelete (_id)} className="btn btn-circle bg-[#da0808] text-white border-white align-middle ml-3">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                         
                    </th>
                  </tr>
    );
};

export default MyToysList;