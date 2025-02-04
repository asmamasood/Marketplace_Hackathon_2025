import React from 'react';
import Image from 'next/image';
import { FaHeart,  } from 'react-icons/fa';
import Link from 'next/link';
import SearchBar from '../searchBar';
import { BiCommentDetail } from 'react-icons/bi';
import FAQ from '../FAQ/page';
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';



    const Navbar = () => { 
      return (
        <>
          {/* Desktop Navbar */}
          <header className="hidden lg:flex bg-white py-4 px-4 md:px-8 shadow-md items-center justify-between">
            {/* Logo and Search Bar */}
            <div className="flex items-center space-x-4 lg:space-x-20">
              {/* Logo */}
              <div className="text-xl md:text-2xl font-bold text-blue-600"><Link href={"/"} >MORENT </Link></div>
              
              {/* Search Bar */}
              <div ><SearchBar/></div>
              </div>
                
            {/* Icons */}
            <div className="flex items-center space-x-4">
              
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                 <div className="text-lg text-gray-600 cursor-pointer">
                 <Link href={"/my-wishList"}> <FaHeart  /></Link> </div>
                </div>
            
              
              
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
                <div className="text-lg text-gray-600 cursor-pointer">  <Link href={"/reviews"}><BiCommentDetail  /></Link></div>
                </div>
              
             
                <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center ">
                <div className="text-lg text-gray-600 cursor-pointer"> <Link href={"/FAQ"}>FAQ</Link> </div>
                </div>

                <div>
                <SignedOut>
  <div className="flex justify-center">
    <SignInButton>
      <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
        Sign In
      </button>
    </SignInButton>
  </div>
</SignedOut>
<SignedIn>
  <div className="flex justify-center">
    <UserButton />
  </div>
</SignedIn>
                </div>
              
            </div>
          </header>
    
          {/* Mobile Navbar */}
          <header className="lg:hidden bg-white py-4 px-4 shadow-md flex flex-col items-start space-y-4">
            {/* Logo and Profile */}
            <div className="flex items-center justify-between w-full">
              <div className="text-xl font-bold text-blue-600">MORENT</div>
              {/* <div className="w-8 h-8 rounded-full border border-gray-300 overflow-hidden"> */}
                 {/* <Image src="/image.png" alt="Profile" width={36} height={36} />  */}

            <div>
              <div className='w-6 h-1 bg-black'></div>
              <div className='w-6 mt-1 h-1 bg-black'></div>
              <div className='w-6 mt-1 h-1 bg-black'></div>
            </div>

              </div>
            {/* </div> */}

            </header>
             </>
             )}
export default Navbar