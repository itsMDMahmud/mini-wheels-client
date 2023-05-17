import React from 'react';
import Lottie from 'lottie-react'
import errorAnimation from '../../../src/assets/errorpage.json'
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='error-page'>
             <Lottie className='error-animation' animationData={errorAnimation} loop={true}></Lottie>
             <div  className='error-btn-div'>
             <Link to="/"><button className="btn btn-error">Go to home</button></Link>
             </div>
            
            
        </div>
    );
};

export default ErrorPage;