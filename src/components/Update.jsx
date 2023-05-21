import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import useTitle from '../hooks/useTitle';

const Update = () => {
    useTitle('Update');
    const updatesAllData = useLoaderData();
    // console.log(updatesAllData);
    const { _id, toyName, categoryName, img, service, price, quantity, rating, description } = updatesAllData;

    const {user} = useContext(AuthContext);

    const handleUpdate = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const categoryName = form.category.value;
        const img = form.url.value; 
        const price = form.price.value; 
        const sellerName = user?.displayName;
        const email = user?.email;
        const quantity = form.quantity.value;    
        const rating = form.rating.value;    
        const description = form.description.value;    
    
        const updateDetails = {
            toyName,
            categoryName,
            sellerName,
            email,
            img,
            price,
            quantity,
            description,
            rating,
        }
        // console.log(updateDetails);
    
        fetch(`https://mini-wheels-server-gamma.vercel.app/mytoys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updateDetails)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.matchedCount > 0) {
                alert('Updateded successfully')
            }
        })
      }

    return (
        <div>
        <h2 className='my-5 text-4xl font-semibold text-center text-[#1a2836]' >Update details</h2>
        <form onSubmit={handleUpdate} >
        <div className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="form-control">          
            <input type="text" defaultValue ={toyName}  placeholder="Toy Name" name="toyName" className="input input-bordered" />
          </div>
          <div className="form-control">          
            <input type="text" defaultValue ={categoryName} required placeholder="Toy Category" name="category" className="input input-bordered" />
          </div>
          <div className="form-control">          
            <input type="text" defaultValue ={img} required placeholder="Image URL" name="url" className="input input-bordered" />
          </div>
          <div className="form-control">          
            <input type="text" defaultValue ={price} required placeholder="Price" name="price" className="input input-bordered" />
          </div>
          <div className="form-control">          
            <input type="text" defaultValue ={user?.displayName} placeholder="Seller Name" name="sellerName"  className="input input-bordered" />
          </div>
          <div className="form-control">          
          <input type="email" defaultValue = {user?.email} readOnly placeholder="Seller Email" name="email" className="input input-bordered"/>          
          </div>
          <div className="form-control">          
            <input type="text" defaultValue={quantity} placeholder="Available quantity" required name="quantity" className="input input-bordered" />
          </div>
          <div className="form-control">          
            <input type="text" defaultValue ={rating} placeholder="Rating (1 - 5)*" required name="rating" className="input input-bordered" />
          </div>               
          </div>
          <div className="form-control mt-5">          
          <textarea type="text" defaultValue={description} placeholder="Add toy details" required name="description" className="input input-bordered md:h-40"/>
          
          </div>
          <div className="form-control mt-6">
            <button className="btn font-bold text-3xl bg-[#1a2836]">update</button>
          </div>
        </div>
        </form>
      </div>
    );
};

export default Update;