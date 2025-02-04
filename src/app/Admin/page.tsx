import React from "react";
import Image from "next/image";
import Responsive from "./responsive";
export default function Admin() {
  return (
    <div className="flex min-h-screen w-full x-1 bg-gray-50 ">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md hidden lg:block">
        <div className="p-6">
        <h2 className="text-[#94A7CB] uppercase">MAIN MENU</h2>
          
          <nav className="space-y-6">
            <button className="flex items-center w-[200px] h-[50px] rounded pl-4 space-x-2 text-white bg-blue-500 font-semibold">
               <Image
                      src={"/home.png"}
                      alt="dashboard icon"
                      width={24}
                      height={24}/><span>Dashboard</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
               <Image
                      src={"/car.png"}
                      alt="car icon"
                      width={24}
                      height={24}/>
               <span>Car Rent</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
               <Image
                      src={"/chart.png"}
                      alt=" chart icon"
                      width={24}
                      height={24}/>
               <span>Insight</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
                <Image
                       src={"/empty-wallet-change.png"}
                       alt="empty wallet icon"
                       width={24}
                       height={24}/><span>Reimburse</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
                <Image
                       src={"/message.png"}
                       alt="inbox icon"
                       width={24}
                       height={24}/><span>Inbox</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
                <Image
                       src={"/calendar.png"}
                       alt="calender icon"
                       width={24}
                       height={24}/><span>Calender</span>
            </button>
          </nav>
          <div className="mt-12 space-y-4">
            <h2 className="text-[#94A7CB] uppercase">PREFERENCES</h2>
            <button className="flex items-center space-x-2 text-gray-700">
               <Image
                      src={"/setting.png"}
                      alt="setting icon"
                      width={24}
                      height={24}/> <span>Settings</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
               <Image
                      src={"/info-circle.png"}
                      alt=" icon"
                      width={24}
                      height={24}/><span>Help & Center</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
                <Image
                       src={"/briefcase.png"}
                       alt="briefcase icon"
                       width={24}
                       height={24}/>
                       <span>Dark Mode</span> <Image
                               src={"/Group 427320607.png"}
                               alt="circle icon"
                               width={24}
                               height={24}/> <Image
                                       src={"/moon.png"}
                                       alt="moon icon"
                                       width={24}
                                       height={24}/>
            </button>
            <button className="flex items-center space-x-2 text-gray-700">
               <Image
                      src={"/logout.png"}
                      alt="logout icon"
                      width={24}
                      height={24}/> <span>Log Out</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="hidden lg:block flex-1 ">
        {/* Details Rental Section */}
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-2 w-[534px] h-[836px] bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-semibold mb-4">Details Rental</h2>
          
              <Image
                src={"/Maps.png"}
                alt="map Image"
                width={486}
                height={272}
                className="w-full rounded"/>
              
            
            <div className="flex items-center space-x-4 mb-4"
            >
              <Image
                src="/image8.png"
                alt="Car Image"
                width={132}
                height={272}
                className="rounded"style={{ backgroundImage: "url('/blueBack.jpg')" }}
              />
              <div>
                <h3 className="text-xs lg:text-xl font-bold">Nissan GT–R</h3>
                <p className="text-gray-500 text-xs lg:text-lg">Sport Car</p>
              </div>
            </div>
            <div className="grid  gap-4">
              {/* Pick-Up Section */}
  <div className="flex-1">
    <div className="flex items-center gap-2 mb-4">
      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
      <p className="font-semibold text-gray-700 text-lg">Pick-Up</p>
    </div>
    <div className="flex gap-4 lg:flex-wrap">
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
  <div className="flex-1">
    <div className="flex items-center gap-2 mb-4">
      <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
      <p className="font-semibold text-gray-700 text-lg">Drop-Off</p>
    </div>
    <div className="flex gap-4">
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
  <div className=" flex justify-between items-center">
         <div className="mt-4 text-lg font-bold">
              Total Rental Price: 
              <p className="text-[#90A3BF] text-sm">Overall price and includes rental discount</p></div>
               <span className="text-[#1A202C] text-3xl font bold">$80.00</span>
            </div>
          </div>
          <div className="space-y-1"> 
  {/* Top 5 Car Rental */}
  <div className="w-[524px] h-[324px] bg-white p-6 rounded-lg shadow">
    <h2 className="text-lg font-semibold mb-4">Top 5 Car Rental</h2>
    <div className="flex items-center justify-center h-40">
      <Image
        src="/Top 5 Car Rental.png"
        alt="Circle Image"
        width={524}
        height={324}
      />
    </div>
  </div>

  {/* Recent Transaction */}
  <div className="w-[524px] h-auto bg-white p-6 rounded-lg shadow">
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
            width={114}
            height={36}
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
            width={114}
            height={36}
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
            width={114}
            height={36}
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
            width={114}
            height={36}
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

      <Responsive/>

    </div> 
  );
}
