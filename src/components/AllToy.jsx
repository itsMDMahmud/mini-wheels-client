import React, { useEffect, useState } from "react";
import Toylist from "./Toylist";

const AllToy = () => {
  const [alltoys, setAlltoys] = useState([]);
  const [visible, setVisible] = useState(20);

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 20);
  }

  useEffect(() => {
    fetch("https://mini-wheels-server-five.vercel.app/toylist")
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
                alltoys.slice(0, visible).map(alltoy => <Toylist
                    key={alltoy._id}
                    alltoy={alltoy}
                ></Toylist>)
               }
          </tbody>          
        </table>
        
            {
                alltoys.length <= 20 ?
                <div className=" mb-5 ">
                <button className="btn hidden mx-auto" onClick={showMoreItems}>See more</button>
                </div> 
                :
                <button className="btn " onClick={showMoreItems}>See more</button>
            }
            
      </div>
    </div>
  );
};

export default AllToy;
