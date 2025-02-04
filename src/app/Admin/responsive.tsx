import React from "react";
import Image from "next/image";
const responsive = () => { 
    return (
        <>
{/* Main Content */}
      <main className="grid-cols-1 lg:hidden ">
        {/* Details Rental Section */}
        <div className="grid grid-cols-1 gap-4">
          <div className="col-span-2  bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Details Rental</h2>
          
              <Image
                src={"/Maps.png"}
                alt="map Image"
                width={295}
                height={275}
                className="w-full rounded"/>
              
            
            <div className="flex items-center space-x-4 mb-4"
            >
              <Image
                src="/image8.png"
                alt="Car Image"
                width={116}
                height={64}
                className="rounded"style={{ backgroundImage: "url('/blueBack.jpg')" }}
              />
              <div>
                <h3 className="text-xs lg:text-xl font-bold">Nissan GT–R</h3>
                <p className="text-gray-500 text-xs lg:text-lg">Sport Car</p>
              </div>
            </div>
            <div className="grid-cols-1  gap-4">
              {/* Pick-Up Section */}
  <div className="">
    <div className="flex items-center gap-2 mb-4">
      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
      <p className="font-semibold text-gray-700 text-lg">Pick-Up</p>
    </div>
    <div className="flex flex-col">
      {/* Locations  */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Locations</label>
        <select className="w-40 bg-white text-[#90A3BF]">
          <option>Kota Semarange</option>
        </select>
      </div>
      {/* Date  */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Date</label>
        <select className="w-40 bg-white text-[#90A3BF] ">
          <option>20july2022</option>
        </select>
      </div>
      {/* Time  */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Time</label>
        <select className="w-40 bg-white text-[#90A3BF] ">
          <option>07:00</option>
        </select>
      </div>
    </div>
  </div>

 

  {/* Drop-Off Section */}
  <div className="grid-cols-1">
    <div className="flex items-center gap-2 mb-4">
      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
      <p className="font-semibold text-gray-700 text-lg">Drop-Off</p>
    </div>
    <div className=" gap-4">
      {/* Locations Dropdown */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Locations</label>
        <select className="w-40 bg-white text-[#90A3BF] ">
          <option>Kota Semarange </option>
        </select>
      </div>
      {/* Date Dropdown */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Date</label>
        <select className="w-40 bg-white text-[#90A3BF] ">
        <option>21july2022</option>
        </select>
      </div>
      {/* Time Dropdown */}
      <div className="flex flex-col">
        <label className="block text-sm font-bold text-gray-600 mb-1">Time</label>
        <select className="w-40 bg-white text-[#90A3BF] ">
          <option>01:00</option>
        </select>
      </div>
    </div>
  </div>
</div>
  <div className="flex items-center">
         <div className="mt-4 text-lg font-bold">
              Total Rental Price: 
              <p className="  text-[#90A3BF] text-sm">Overall price and includes rental discount</p></div>
               <span className="text-[#1A202C] text-3xl font bold">$80.00</span>
            </div>
          </div>
          <div className="space-y-1"> 
  {/* Top 5 Car Rental */}
  <div className="w-[327px] h-[300px] bg-white p-6 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Top 5 Car Rental</h2>
    <div className=" items-center justify-center h-40">
      <Image
        src="/Top 5 Car Rental.png"
        alt="Circle Image"
        width={524}
        height={324}
      />
    </div>
  </div>

  {/* Recent Transaction */}
  <div className="w-[327px] h-[352px] bg-white p-6 rounded-lg shadow">
    <div className="w-full h-[24px] flex justify-between mb-4">
      <h2 className="text-lg font-semibold">Recent Transaction</h2>
      <a href="#" className="text-blue-600 text-sm">
        View All
      </a>
    </div>
    <ul>
      <li className="w-full h-[70px] flex justify-between items-center py-2 border-b">
        <div className="flex items-center">
          <Image
            src="/image8.png"
            alt="Nissan GT-R"
            width={72}
            height={24}
            className="mr-4"
          />
          <div>
            <p className="font-semibold">Nissan GT-R</p>
            <p className="text-gray-500 text-sm">Sport Car</p>
          </div>
        </div><div>
        <p className="text-gray-500 text-sm">20 July</p>
        <p className="font-semibold">$80.00</p></div>
      </li>
      <li className="w-full h-[70px] flex justify-between items-center py-2 border-b">
        <div className="flex items-center">
          <Image
            src="/image7.png" 
            alt="Koenigsegg"
            width={72}
            height={24}
            className="mr-4"
          />
          <div>
            <p className="font-semibold">Koenigsegg</p>
            <p className="text-gray-500 text-sm">Sport Car</p>
            
          </div>
        </div>
        <div><p className="text-gray-500 text-sm">19 July</p>
        <p className="font-semibold">$99.00</p></div>
      </li>
      <li className="w-full h-[70px] flex justify-between items-center py-2 border-b">
        <div className="flex items-center">
          <Image
            src="/Car (2).png" 
            alt="Rolls-Royce"
            width={72}
            height={24}
            className="mr-4"
          />
          <div>
            <p className="font-semibold">Rolls-Royce</p>
            <p className="text-gray-500 text-sm">Sport Car</p>
          </div>
        </div>
        <div>
        <p className="text-gray-500 text-sm">18 July</p>
        <p className="font-semibold">$96.00</p></div>
      </li>
      <li className="w-full h-[70px] flex justify-between items-center py-2">
        <div className="flex items-center">
          <Image
            src="/Car (5).png" 
            alt="CR-V"
            width={72}
            height={24}
            className="mr-4"
          />
          <div>
            <p className="font-semibold">CR-V</p>
            <p className="text-gray-500 text-sm">SUV</p>
          </div>
        </div> <div>
        <p className="text-gray-500 text-sm">17 July</p>
        <p className="font-semibold">$80.00</p></div>
      </li>
    </ul>
  </div></div></div>
      </main>
</>
)}
export default responsive;



