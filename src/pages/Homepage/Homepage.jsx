import React, { useEffect } from "react";
import useTitle from "../../hooks/useTitle";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import ReactTab from "../ReactTab/ReactTab";
import Slider from "./Slider";
import Contact from "./Contact";
import CustomerReview from "./CustomerReview";

const Homepage = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  
  useTitle('Home');
  return (
    <div className="my-5">
      <div className="hero">
        <div data-aos="fade-down" data-aos-duration="1000" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/hCCDrM5/7730137-1.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute h-full w-full rounded-xl pt-5 md:pt-24 pb-24 gap-5 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] align-middle">
            <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="w-full text-white text-2xl md:text-6xl  font-bold text-center">
            “Children are the living messages <br className="firstbreak" /> we send to a time we will not see.” <br className="firstbreak" /> 
            <small className="md:text-4xl text-xl">– John F. Kennedy</small>
            </h2>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5"></div>
        </div>
      </div >
      

      <div className="mt-20" data-aos="fade-up" data-aos-duration="1000">
        <ReactTab/>        
      </div>
      
      <div className="mt-20" data-aos="fade-up" data-aos-duration="1000">
          <Slider/>
      </div>
      <div className="form-and-review">
      <div >
        <div className="mt-20" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="text-5xl font-semibold text-center">Contact form</h2>
          <p className="text-xl font-semibold text-center mt-3">Feel free to contact us</p>
        </div>
        <Contact/>
      </div>
      <div className="mt-20" data-aos="fade-up" data-aos-duration="1000">
        <div>
          <h2 className="text-5xl font-semibold text-center">Customer Review</h2>
          <p className="text-xl font-semibold text-center mt-3">You can review us</p>
        </div>
        <CustomerReview/>
      </div>
      </div>
    </div>
  );
};

export default Homepage;
