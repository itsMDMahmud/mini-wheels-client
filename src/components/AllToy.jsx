import React, { useEffect, useState } from "react";
import Toylist from "./Toylist";

const AllToy = () => {
  const [alltoys, setAlltoys] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/toylist")
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }, []);
  return (
    <div>
      {/* <h2>alltoy items: {alltoys.length}</h2> */}
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name & category</th>
              <th>Price and rating</th>
              <th>seller</th>
              <th className="">Details</th>
            </tr>
          </thead>
          <tbody>
               {
                alltoys.map(alltoy => <Toylist
                    key={alltoy._id}
                    alltoy={alltoy}
                ></Toylist>)
               }
          </tbody>          
        </table>
      </div>
    </div>
  );
};

export default AllToy;
