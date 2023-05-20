import React from 'react';

const Slider = () => {
    return (
        <div className='max-w-screen-lg mx-auto'>
            <div className="carousel w-full ">
  <div id="item1" className="carousel-item w-full">    
    <img src="https://i.ibb.co/VChYRbW/2361289-1.jpg" className="w-full" />
  </div> 
  <div id="item2" className="carousel-item w-full">
    <img src="https://i.ibb.co/hDzC0jK/2341509-1.jpg" className="w-full" />
  </div> 
  <div id="item3" className="carousel-item w-full">
    <img src="https://i.ibb.co/LdjHpqc/1198096-1.jpg" className="w-full" />
  </div> 
  <div id="item4" className="carousel-item w-full">
    <img src="https://i.ibb.co/Vj9bn4M/215449-1.jpg" className="w-full" />
  </div>
</div> 
<div className="flex justify-center w-full py-2 gap-2">
  <a href="#item1" className="btn btn-xs">1</a> 
  <a href="#item2" className="btn btn-xs">2</a> 
  <a href="#item3" className="btn btn-xs">3</a> 
  <a href="#item4" className="btn btn-xs">4</a>
</div>
        </div>

    );
};

export default Slider;