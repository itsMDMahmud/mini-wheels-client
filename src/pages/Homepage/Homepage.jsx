import React, { useEffect } from "react";
import ReactTab from "./ReactTab";
import useTitle from "../../hooks/useTitle";
import AOS from 'aos';
import 'aos/dist/aos.css'; 

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
          <div className="absolute h-full w-full rounded-xl  pt-24 pb-24 gap-5 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] align-middle">
            <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" className="w-full text-white mobile:text-xl text-6xl  font-bold text-center">
            “Children are the living messages <br className="firstbreak" /> we send to a time we will not see.” <br className="firstbreak" /> 
            <small className="text-4xl">– John F. Kennedy</small>
            </h2>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5"></div>
        </div>
      </div >
      

      <div data-aos="fade-up" data-aos-duration="1000">
        <ReactTab/>
      </div>
      
    </div>
  );
};

export default Homepage;
