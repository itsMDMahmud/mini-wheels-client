import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReactTab = () => {
  const [isButton1Disabled, setIsButton1Disabled] = useState(false);
  const [isButton2Disabled, setIsButton2Disabled] = useState(false);
  const [isButton3Disabled, setIsButton3Disabled] = useState(false);
  const [isButton4Disabled, setIsButton4Disabled] = useState(false);
  const [isButton5Disabled, setIsButton5Disabled] = useState(false);
  const [isButton6Disabled, setIsButton6Disabled] = useState(false);

  function handleClick1() {
    setIsButton1Disabled(true);
  }
  function handleClick2() {
    setIsButton2Disabled(true);
  }
  function handleClick3() {
    setIsButton3Disabled(true);
  }
  function handleClick4() {
    setIsButton4Disabled(true);
  }
  function handleClick5() {
    setIsButton5Disabled(true);
  }
  function handleClick6() {
    setIsButton6Disabled(true);
  }


  return (
    <div className="lg:my-20">
      <h2 className="mb-10 text-5xl text-center">Sub Categories</h2>
      <Tabs>
        <TabList>
          <Tab><h2 className="text-xl font-semibold">Toy SUV</h2></Tab>
          <Tab><h2 className="text-xl font-semibold">Toy Car</h2></Tab>
          <Tab><h2 className="text-xl font-semibold">Toy Truck</h2></Tab>          
        </TabList>
        {/* first category ----------------------------------- */}
        <TabPanel>
          <div className="overflow-x-auto w-full">
            <table className="table w-full text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name & category</th>
                  <th>Price & rating</th>
                  <th>seller</th>
                  <th className="">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="avatar">
                      <div className="rounded w-40 mask mask-squircle">
                        <img src="https://i5.walmartimages.com/asr/0a990681-dc1d-41cc-bb33-e534cd9f84ce.6242336e9b8b9b8d0e24d8b775d35ec4.jpeg" alt="img" />
                      </div>
                    </div>
                  </td>
                  <th>
                    <div className="text-3xl mb-3">Mercedes G Wagon</div>
                    <div className="text-xl">
                      <small>Category:</small> Toy SUV
                    </div>
                  </th>
                  <td className="text-center">
                    <div className="text-2xl mb-3">$ 200.00</div>
                    <div className="text-xl inline-flex gap-2">4.5 <FaStar/> </div>
                  </td>
                  <td>
                    <div className="text-2xl mb-3">Mr Bristol</div>
                    <div className="text-xl">bristol@gmail.com</div>
                  </td>
                  <th className="">
                    <button className="btn bg-[#eb4d4b]" disabled={isButton1Disabled} onClick={() => 
              handleClick1() }>favorite</button>
                  </th>
                </tr>
                {/* --------------------------------------------------  */}
                <tr>
                  <td>
                    <div className="avatar">
                      <div className="rounded w-40 mask mask-squircle">
                        <img src="https://i5.walmartimages.com/asr/c43dcf52-e2b2-4b90-aaac-f838b10a95e9.fb5a78f6e543f6a3f07847c93c05f524.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="img" />
                      </div>
                    </div>
                  </td>
                  <th>
                    <div className="text-3xl mb-3">Dodge Durango SRT</div>
                    <div className="text-xl">
                      <small>Category:</small> Toy SUV
                    </div>
                  </th>
                  <td className="text-center">
                    <div className="text-2xl mb-3">$ 220.00</div>
                    <div className="text-xl inline-flex gap-2">4.5 <FaStar/></div>
                  </td>
                  <td>
                    <div className="text-2xl mb-3">Mr Bristol</div>
                    <div className="text-xl">bristol@gmail.com</div>
                  </td>
                  <th className="">
                  <button className="btn bg-[#eb4d4b]" disabled={isButton2Disabled} onClick={() => 
              handleClick2() }>favorite</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
        {/* ------------------------------------------------------------------ */}
        <TabPanel>
        <div className="overflow-x-auto w-full">
            <table className="table w-full text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name & category</th>
                  <th>Price & rating</th>
                  <th>seller</th>
                  <th className="">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="avatar">
                      <div className="rounded w-40 mask mask-squircle">
                        <img src="https://i5.walmartimages.com/asr/0f021146-aa8f-4e79-a949-bbe3014b992a.8bbc77554fc0c41ba8860a9221f0f80a.jpeg" alt="img" />
                      </div>
                    </div>
                  </td>
                  <th>
                    <div className="text-3xl mb-3">Mercedes AMG s63</div>
                    <div className="text-xl">
                      <small>Category:</small> Toy Car
                    </div>
                  </th>
                  <td className="text-center">
                    <div className="text-2xl mb-3">$ 200.00</div>
                    <div className="text-xl inline-flex gap-2">4.5 <FaStar/> </div>
                  </td>
                  <td>
                    <div className="text-2xl mb-3">Andres leo</div>
                    <div className="text-xl">andres@gmail.com</div>
                  </td>
                  <th className="">
                  <button className="btn bg-[#eb4d4b]" disabled={isButton3Disabled} onClick={() => 
              handleClick3() }>favorite</button>
                  </th>
                </tr>
                {/* --------------------------------------------------  */}
                <tr>
                  <td>
                    <div className="avatar">
                      <div className="rounded w-40 mask mask-squircle">
                        <img src="https://i5.walmartimages.com/asr/d30e02bb-7c3c-4321-9b29-f1194c8abf03.018ede83b8534b76f14a5df5884b9430.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF" alt="img" />
                      </div>
                    </div>
                  </td>
                  <th>
                    <div className="text-3xl mb-3">Dodge challanger SRT</div>
                    <div className="text-xl">
                      <small>Category:</small> Toy car
                    </div>
                  </th>
                  <td className="text-center">
                    <div className="text-2xl mb-3">$ 239.00</div>
                    <div className="text-xl inline-flex gap-2">4.5 <FaStar/></div>
                  </td>
                  <td>
                    <div className="text-2xl mb-3">Andres leo</div>
                    <div className="text-xl">andres@gmail.com</div>
                  </td>
                  <th className="">
                  <button className="btn bg-[#eb4d4b]" disabled={isButton4Disabled} onClick={() => 
              handleClick4() }>favorite</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
        <TabPanel>
        <div className="overflow-x-auto w-full">
            <table className="table w-full text-center">
              {/* head */}
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name & category</th>
                  <th>Price & rating</th>
                  <th>seller</th>
                  <th className="https://i5.walmartimages.com/asr/38eeb986-58c4-4723-abb0-32e3c139d3bb.0af8f474a59f9bb8c36acf04672d17ac.jpeg">Details</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div className="avatar">
                      <div className="rounded w-40 mask mask-squircle">
                        <img src="https://i5.walmartimages.com/asr/38eeb986-58c4-4723-abb0-32e3c139d3bb.0af8f474a59f9bb8c36acf04672d17ac.jpeg" alt="img" />
                      </div>
                    </div>
                  </td>
                  <th>
                    <div className="text-3xl mb-3">Mercedes Truck</div>
                    <div className="text-xl">
                      <small>Category:</small> Toy truck
                    </div>
                  </th>
                  <td className="text-center">
                    <div className="text-2xl mb-3">$ 200.00</div>
                    <div className="text-xl inline-flex gap-2">4.5 <FaStar/> </div>
                  </td>
                  <td>
                    <div className="text-2xl mb-3">Brian pitt</div>
                    <div className="text-xl">brian@gmail.com</div>
                  </td>
                  <th className="">
                  <button className="btn bg-[#eb4d4b]" disabled={isButton5Disabled} onClick={() => 
              handleClick5() }>favorite</button>
                  </th>
                </tr>
                {/* --------------------------------------------------  */}
                <tr>
                  <td>
                    <div className="avatar">
                      <div className="rounded w-40 mask mask-squircle">
                        <img src="https://i5.walmartimages.com/asr/6bc85e52-3661-4d3d-830e-66dce142f56e.66413928ad2f6181142fc8da2beb99e7.jpeg" alt="img" />
                      </div>
                    </div>
                  </td>
                  <th>
                    <div className="text-3xl mb-3">Dodge Truck</div>
                    <div className="text-xl">
                      <small>Category:</small> Toy truck
                    </div>
                  </th>
                  <td className="text-center">
                    <div className="text-2xl mb-3">$ 189.00</div>
                    <div className="text-xl inline-flex gap-2">4.5 <FaStar/></div>
                  </td>
                  <td>
                    <div className="text-2xl mb-3">Brian pitt</div>
                    <div className="text-xl">brian@gmail.com</div>
                  </td>
                  <th className="">
                  <button className="btn bg-[#eb4d4b] " disabled={isButton6Disabled} onClick={() => 
              handleClick6() }>favorite</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReactTab;
