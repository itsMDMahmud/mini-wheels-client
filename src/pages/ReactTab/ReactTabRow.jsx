import React from "react";
import { FaBeer, FaRegStar, FaStar } from "react-icons/fa";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const ReactTabRow = ({alltoy}) => {
    const {
        _id,
        toyName,
        categoryName,
        sellerName,
        email,
        img,
        service,
        price,
        rating,
      } = alltoy;

    return (
       <tr className="reactTab">
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
        <div className="text-2xl mb-3">$ {price}</div>
        <div className="text-xl inline-flex gap-2">
          {rating}{" "}
          <Rating
            placeholderRating={rating}
            emptySymbol={<FaRegStar />}
            readonly
            placeholderSymbol={<FaStar />}
            fullSymbol={<FaStar />}
          />
        </div>
      </td>
      <td>
        <div className="text-2xl mb-3">{sellerName}</div>
        <div className="text-xl">{email}</div>
      </td>
      <th className="">
        <Link to={`alltoys/details/${_id}`}>
          <button className="btn bg-[#1a2836]">Details</button>
        </Link>
      </th>
    </tr>
    );
};

export default ReactTabRow;