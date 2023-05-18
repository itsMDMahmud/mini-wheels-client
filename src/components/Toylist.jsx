import React from 'react';

const Toylist = ({alltoy}) => {
    // console.log(alltoy);

    const { _id, toyName,categoryName, sellerName, sellerEmail, img, service, price, quantity } = alltoy;

    return (
        <tr>
                    
                    <td>
                      <div className="avatar">
                        <div className="rounded w-12 h-12">
                          {img ? <img src={img} alt="img"/> : <img src="https://i.ibb.co/vz8C4Qf/User-Avatar-in-Suit-PNG.png"/> }
                          
                        </div>
                      </div>
                    </td>
                    <th> {toyName} </th>
                    <td>$ {price}</td>
                    <td>{quantity} /day</td>
                    <td><div>{sellerName}</div><div>{sellerEmail}</div></td>
                    <th><button>Available</button>
                      {/* { status === 'confirm' ? <span className="font-bold text-error" >Confirmed</span> :
                          <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">please confirm</button>} */}
                    </th>
                  </tr>
    );
};

export default Toylist;