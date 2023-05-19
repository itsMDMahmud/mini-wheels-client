import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Add_A_Toy = () => {

    const {user} = useContext(AuthContext);

    const handleAddtoy = event => {
        event.preventDefault();
        const form = event.target;
        const toyName = form.toyName.value;
        const categoryName = form.category.value;
        const img = form.url.value; 
        const price = form.price.value; 
        const sellerName = user?.displayName;
        const sellerEmail = user?.email;
        const quantity = form.quantity.value;    
        const details = form.details.value;    
    
        const addAToy = {
            toyName,
            categoryName,
            sellerName,
            sellerEmail,
            img,
            price,
            quantity,
            details,
        }
        console.log(addAToy);
    
        fetch('http://localhost:5000/toylist/', {
            method: 'post',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(addAToy)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if (data.insertedId) {
                alert('added successfully')
            }
        })
      }

    return (
        <div>
        <h2 className='my-5 text-4xl font-semibold text-center text-[#1a2836]' >Add a toy..</h2>
        <form onSubmit={handleAddtoy} >
        <div className="card-body">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <div className="form-control">          
            <input type="text" defaultValue =''  placeholder="Toy Name" name="toyName" className="input input-bordered" />
          </div>
          <div className="form-control">          
            <input type="text" defaultValue ='' required placeholder="Toy Category" name="category" className="input input-bordered" />
          </div>
          <div className="form-control">          
            <input type="text" defaultValue ='' required placeholder="Image URL" name="url" className="input input-bordered" />
          </div>
          <div className="form-control">          
            <input type="text" defaultValue ='' required placeholder="Price" name="price" className="input input-bordered" />
          </div>
          <div className="form-control">          
            <input type="text" defaultValue ={user?.displayName} readOnly placeholder="Seller Name" name="sellerName"  className="input input-bordered" />
          </div>
          <div className="form-control">          
          <input type="email" defaultValue = {user?.email} readOnly placeholder="Seller Email" name="sellerEmail" className="input input-bordered"/>          
          </div>
          <div className="form-control">          
            <input type="text" placeholder="Available quantity" required name="quantity" className="input input-bordered" />
          </div>
          <div className="form-control">          
            <input type="text" defaultValue ='' placeholder="Shop Name" name="shopName" className="input input-bordered" />
          </div>               
          </div>
          <div className="form-control mt-5">          
          <textarea type="text" placeholder="Add toy details" required name="details" className="input input-bordered md:h-40"/>
          
          </div>
          <div className="form-control mt-6">
            <button className="btn font-bold text-3xl bg-[#1a2836]">Add Item</button>
          </div>
        </div>
        </form>
      </div>
    );
};

export default Add_A_Toy;