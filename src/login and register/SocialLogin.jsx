import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {

    const {googleSignIn} = useContext(AuthContext);
    const handleGoogleSignIn = () => {
        googleSignIn()
        .then( result => {
            console.log(result.user)
        })
        .catch(error => console.log(error))
    }

    return (
        <div>
      <div className="divider">OR</div>
      <div className="text-center space-x-3">
        <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
        <FaGoogle /></button>
        <button className="btn btn-circle btn-outline"><FaGithub /></button>
      </div>
    </div>
    );
};

export default SocialLogin;