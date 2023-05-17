import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Navbar = () => {

  const {user, logOut} = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
    .then()
    .catch(error => console.log(error))
  }
  // console.log(user);

  const navItems =  <>
        <li><Link to='/' className=' text-xl'>Home</Link></li>
        <li><Link to='/alltoys' className=' text-xl'>All Toys</Link></li>
        {user?.email ? 
        <>
          <li><Link to='/add' className=' text-xl'>Add Toy</Link></li>
        <li><Link to='/mytoys' className=' text-xl'>My Toys</Link></li>
        </> : <></>
        
        }               
        <li><Link to='/blog' className='text-xl'>Blog</Link></li>
    </>
  return (
        <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <Link to='/' className="btn btn-ghost normal-case text-5xl font-bold"><h1>Mini Wheels</h1></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">
      {user?.email ? 
      <>
      <img className='w-8 rounded-full' src={user?.photoURL} alt="img" title={user.displayName} />
      <Link onClick={handleLogOut}><a className="btn bg-[#1a2836] primary-btn ml-2">logout</a></Link>
      </> :
      <Link to='login'><a className="btn bg-[#1a2836] primary-btn">Login</a></Link>
    }
  </div>
</div>
    );
};

export default Navbar;