import React, { useEffect, useState } from "react";
import Toylist from "./Toylist";
import useTitle from "../hooks/useTitle";

const AllToy = () => {
  useTitle('All Toys');
  const [alltoys, setAlltoys] = useState([]);
  const [visible, setVisible] = useState(20);

  const [searchText, setSearchText] =useState("");

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 20);
  }
  
  useEffect(() => {
    fetch("http://localhost:5000/toylist")
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }, []);

  const handleSearch = () => {
    fetch(`http://localhost:5000/toysearchTitle/${searchText}`)
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }

  // useEffect(() => {
  //   fetch(`http://localhost:5000/toysearchTitle/${searchText}`)
  //     .then((res) => res.json())
  //     .then((data) => setAlltoys(data));
  // }, []);



  return (
    <div>
      <div class="max-w-md mx-auto my-5">
        <div class="flex items-center">
          <input type="text" onChange={(event) => setSearchText(event.target.value)}
          placeholder="Search" class="w-full px-4 py-2 mr-2 rounded-lg border-2 border-gray-300 focus:border-blue-500 focus:outline-none" />
          <button onClick={handleSearch} class="px-4 py-2 bg-[#1a2836] text-white rounded-lg hover:bg-gray-600">Search</button>
        </div>
      </div>

      <div className="overflow-x-auto w-full">
       
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name & category</th>
              <th>Price & rating</th>
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
                <div className="text-center">
                  <button className="btn btn-error mx-auto my-5" onClick={showMoreItems}>See more</button>
                </div>
                
            }
            
      </div>
    </div>
  );
};

export default AllToy;
