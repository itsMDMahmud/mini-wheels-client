import React, { useEffect, useState } from 'react';
import ReactTabRow from './ReactTabRow';

const ReactTab = () => {
  const [alltoys, setAlltoys] = useState([]);
  const [activeTab, setActiveTab] = useState('Toy SUV');

  useEffect(() => {
    fetch("http://localhost:5000/toylist")
      .then((res) => res.json())
      .then((data) => setAlltoys(data));
  }, []);

  const handleTabClick = (category) => {
    setActiveTab(category);
    console.log(category);
  };

  const filteredToys = alltoys.filter(toy => toy.categoryName === activeTab);
  console.log(filteredToys);
  //   console.log(toys);
  console.log(activeTab);

  return (
    <div>
      <div className="overflow-x-auto w-full space-y-5">
        <h2 className="text-center text-4xl font-semibold text-primary hidden md:flex justify-center">Shop By Category</h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-4">
          <button
            className={`border-b-2 border-transparent btn focus:outline-none ${activeTab === 'Toy SUV' ? 'btn-warning' : 'btn-primary'}`}
            onClick={() => handleTabClick('Toy SUV')}
          >
            SUV
          </button>
          <button
            className={`border-b-2 border-transparent btn focus:outline-none ${activeTab === 'Toy car' ? 'btn-warning' : 'btn-primary'}`}
            onClick={() => handleTabClick('Toy car')}
          >
            Classic
          </button>
          <button
            className={`border-b-2 border-transparent btn focus:outline-none ${activeTab === 'Toy truck' ? 'btn-warning' : 'btn-primary'}`}
            onClick={() => handleTabClick('Toy truck')}
          >
            Sports
          </button>
        </div>

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
                filteredToys.map(alltoy => <ReactTabRow
                  key={alltoy._id}
                  alltoy={alltoy}
                ></ReactTabRow>)
               }
          </tbody>          
        </table>
      </div>
    </div>
  );
};

export default ReactTab;