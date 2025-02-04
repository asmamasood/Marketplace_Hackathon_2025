
"use client";
import React, { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";

const WishlistPage = () => {
  const [wishlist, setWishlist] = useState<string[]>([]); // Product IDs
  const [wishlistItems, setWishlistItems] = useState<any[]>([]); // Full product data
  

  // Load wishlist from data storage and fetch product details
  useEffect(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) {
      const productIds = JSON.parse(storedWishlist);
      setWishlist(productIds);

      const fetchWishlistItems = async () => {
        const query = `*[_type == "car" && _id in ${JSON.stringify(productIds)}]`;
        const data = await client.fetch(query);
        setWishlistItems(data);
      };
      fetchWishlistItems();
    }

  }, []);

  // Handle Add/Remove from Wishlist
  const toggleWishlist = (e: any, productId: string) => {
    e.preventDefault();
    setWishlist((prevWishlist) => {
      const updatedWishlist = prevWishlist.includes(productId)
        ? prevWishlist.filter((id) => id !== productId) // Remove
        : [...prevWishlist, productId]; // Add

      // Store the updated wishlist in localStorage
      localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
      return updatedWishlist;
    });
  };

  return (
    <div className="px-[40px] py-[32px] bg-[#F6F7F9]">
      <h1 className="text-3xl font-bold mb-4 flex justify-center">Wishlist</h1>
      {wishlistItems.length > 0 ? (
        wishlistItems.map((item , index:number) => (
          <div key={index} className="mb-4 border border-black p-2 rounded-md">
            <h3 className="text-2xl font-bold">{item.name}</h3>
            <button onClick={(e) => toggleWishlist(e, item._id)} // Pass car ID to toggleWishlist
                      className={`ml-4 text-3xl ${wishlist.includes(item._id) ? "text-red-500" : "text-gray-400"}`}> ♥
                    </button>
            <h3 className="text-[rgba(89,103,128,100%)] font-bold text-[14px]">Type <p className="text-black text-[16px]"> {item.type} </p></h3>
            <h3 className="text-[rgba(89,103,128,100%)] font-bold text-[14px] ">Description <p className="text-black text-[16px]"> {item.description} </p> </h3>
            <h3 className="text-[rgba(89,103,128,100%)] font-bold text-[14px]">Seating Capacity <p className="text-black text-[16px]"> {item.seatingCapacity} </p> </h3>
            <h3 className="text-[rgba(89,103,128,100%)] font-bold text-[14px]">Fuel Capacity <p className="text-black text-[16px]"> {item.fuelCapacity} </p> </h3>
          </div>
        ))
      ) : (
        <p className="text-black text-[20px] text-center">Your wishlist is empty.</p>
      )}
    </div>
  );
};

export default WishlistPage;
