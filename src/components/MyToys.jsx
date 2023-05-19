import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
import MyToysList from "./MyToysList";

const MyToys = () => {
  const { user } = useContext(AuthContext);
//   console.log(user?.email);
//   const navigate = useNavigate();
  const [myToys, setMyToys] = useState([]);

  const url = `https://mini-wheels-server-five.vercel.app/mytoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
          setMyToys(data)}
      );
  }, [url]);


  const handleDelete = _id => {
    const proceed = confirm('Are you sure you want to delete?');
    if (proceed) {
        fetch(`https://mini-wheels-server-five.vercel.app/mytoys/${_id}`, {
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
    <div>
      
      <div className="overflow-x-auto w-full">
        <table className="table w-full text-center">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name & category</th>
              <th>Price and rating</th>
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
