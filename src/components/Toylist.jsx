import React from "react";
import { FaBeer, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const Toylist = ({ alltoy }) => {
  // console.log(alltoy);

  const {
    _id,
    toyName,
    categoryName,
    sellerName,
    email,
    img,
    quantity,
    price,
    rating,
  } = alltoy;

  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="rounded w-40 mask mask-squircle">
            {img ? (
              <img className="" src={img} alt="img" />
            ) : (
              <img src="https://i.ibb.co/vz8C4Qf/User-Avatar-in-Suit-PNG.png" />
            )}
          </div>
        </div>
      </td>
      <th>
        <div className="text-3xl mb-3">{toyName}</div>
        <div className="text-xl">
          <small>Category:</small> {categoryName}
        </div>{" "}
      </th>
      <td className="text-center">
        <div className="text-2xl ">$ {price}</div>
        <div className="text-xl inline-flex gap-2 my-2">
          {rating}{" "}
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            readonly
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
          />
        </div>
        <div className="text-2xl ">Qty: {quantity} </div>
      </td>
      <td>
        <div className="text-2xl mb-3">{sellerName}</div>
        <div className="text-xl">{email}</div>
      </td>
      <th className="">
        <Link to={`details/${_id}`}>
          <button className="btn">Details</button>
        </Link>
      </th>
    </tr>
  );
};

export default Toylist;
