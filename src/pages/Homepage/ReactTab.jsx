import React from "react";
import { FaStar } from "react-icons/fa";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const ReactTab = () => {
  return (
    <div>
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
                    <button className="btn ">Details</button>
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
                    <button className="btn">Details</button>
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
                    <button className="btn">Details</button>
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
                    <button className="btn">Details</button>
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
                    <button className="btn">Details</button>
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
                    <button className="btn">Details</button>
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
