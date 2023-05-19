import React from "react";
import ReactTab from "./ReactTab";
import { Tab, Tabs } from "@mui/material";

const Homepage = () => {
//     const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
  return (
    <div className="my-5">
      <div className="hero">
        <div id="slide6" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/hCCDrM5/7730137-1.jpg"
            className="w-full rounded-xl"
          />
          <div className="absolute h-full w-full rounded-xl  pt-24 pb-24 gap-5 bg-gradient-to-b from-[#151515] to-[rgba(21, 21, 21, 0)] align-middle">
            <h2 className="w-full text-white mobile:text-xl text-6xl  font-bold text-center">
            “Children are the living messages <br className="firstbreak" /> we send to a time we will not see.” <br className="firstbreak" /> 
            <small className="text-4xl">– John F. Kennedy</small>
            </h2>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-5"></div>
        </div>
      </div>
      <ReactTab/>
      {/* <ReactTab></ReactTab> */}
      {/* <div>
      <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example" centered >
        <Tab label="one">   <h2 className="text-5xl">button one</h2>      
        </Tab>
        
        <Tab label="two">         
        </Tab>
        
        <Tab label="three">         
        </Tab>

      </Tabs>
      </div> */}
    </div>
  );
};

export default Homepage;
