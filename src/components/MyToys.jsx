import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import MyToysList from "./MyToysList";
import useTitle from "../hooks/useTitle";

const MyToys = () => {
  useTitle('My Toys');
  const { user } = useContext(AuthContext);
//   console.log(user?.email);
//   const navigate = useNavigate();
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    fetchData();
  }, [sortOrder]);

  const fetchData = async () => {
    try {
      const url = `http://localhost:5000/mytoys?email=${user?.email}&sort=${sortOrder}`;
      const response = await fetch(url);
      const data = await response.json();
      setMyToys(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSortAscending = () => {
    setSortOrder('asc');
  };

  const handleSortDescending = () => {
    setSortOrder('desc');
  };

  // const url = `http://localhost:5000/mytoys?email=${user?.email}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => {
  //         setMyToys(data)}
  //     );
  // }, [url]);


  const handleDelete = _id => {
    const proceed = confirm('Are you sure you want to delete?');
    if (proceed) {
        fetch(`http://localhost:5000/mytoys/${_id}`, {
            'method': 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
                alert('Deleted Successfull');
                const remaining = myToys.filter(myToy => myToy._id !== _id);
                setMyToys(remaining);
            }
        })
    }
  }


  return (
    <div className="my-20">
      <div className="text-center">
      <button className="btn mx-3" onClick={handleSortAscending}>Ascending</button>
      <button className="btn mx-3" onClick={handleSortDescending}>Descending</button>
      {/* Render the toy list */}
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
              <th className="">edit / close</th>
            </tr>
          </thead>
          <tbody>
            {myToys.map((myToy) => (
              <MyToysList 
                key={myToy._id} 
                myToy={myToy}
                user={user}
                handleDelete={handleDelete}
              ></MyToysList>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;
