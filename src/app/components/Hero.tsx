
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Cards from './Cards';
import Pickup from './Pickup';
import Dropoff from './Dropoff';


const HeroSection = () => { 
  return ( <div>
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Card */}
        <div
          className="relative text-white rounded-xl shadow-lg overflow-hidden h-[450px] p-8 flex flex-col justify-between bg-cover bg-center"
          style={{ backgroundImage: "url('/lightBluebg.jpg')" }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-4 leading-tight">
              The Best Platform for Car Rental
            </h2>
            <p className="text-base text-gray-200">
              Ease of doing car rental safely and reliably. Of course at a low price.
            </p>
          </div>
          <div className="relative z-10 mt-8">
          <Link href="/carListing">
            <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
              Rental Car
            </button></Link>
          </div>
          <div> <Link href="">
            <Image src="/image7.png" alt="car" width={775} height={775} />
         </Link> </div>
        </div>

        {/* Right Card */}
        <div
          className="relative text-white rounded-xl shadow-lg overflow-hidden h-[450px] p-8 flex flex-col justify-between bg-cover bg-center"
          style={{ backgroundImage: "url('/blueBack.jpg')" }}
        >
          <div className="relative z-10">
            <h2 className="text-3xl font-extrabold mb-4 leading-tight">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-base text-gray-200">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
          </div>
          <div className="relative z-10 mt-8">
          <Link href="/carListing">
  <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow-md hover:bg-gray-200 transition">
    Rental Car
  </button>
</Link>

          </div>
          <div className='flex justify-between items-center '>
            <Image src="/image8.png" alt="car" width={500} height={600} className='flex justify-between '/>
          </div>
        </div>
      </div>
      </section>
  <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center bg-white shadow-md rounded-lg p-6 gap-6">
  {/* Pick-Up Section */}
    
     
  <Pickup />


  {/* Swap Button */}
  <div className="flex-shrink-0 my-4 md:my-0">
    <div className="flex items-center justify-center bg-[#3563E9] text-white rounded-lg shadow-md h-12 w-12 hover:bg-blue-600 transition">
      <Image src="/Swap.png" alt="Swap Icon" height={40} width={40} />
    </div>
  </div>

  {/* Drop-Off Section */}
 <Dropoff />
   
</div> 

  <div className="flex justify-between items-center w-full max-w-[1440px] bg-blue-400 py-4 px-4 sm:px-6 md:px-8 border border-red-950 ">
  {/* Popular Car and recomended car */}
  <h2 className="text-gray-700 font-bold Plus Jakarta Sans text-xl sm:text-2xl leading-[20.16px] underline ">
    Popular Car and Recomended car
  </h2>

  {/* View */}
  <div className="text-white Plus Jakarta Sans font-medium text-[16px] sm:text-[18px] leading-[20.16px] hover:underline cursor-pointer">
  <Link href="/carListing"> View All </Link>
  </div>
</div>

</div>

 
  );
};

export default HeroSection;
