"use client"; // React hooks 

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";
import { BiDoughnutChart } from "react-icons/bi";
import { MdPeople } from "react-icons/md";
import Link from "next/link";
export default function CarListing() {
  const [cars, setCars] = useState<any[]>([]);
  const [filteredCars, setFilteredCars] = useState<any[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedCapacities, setSelectedCapacities] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]); // Product IDs

  useEffect(() => {
    const fetchCars = async () => {
      const query = `*[_type == "car"]`
      const data = await client.fetch(query);
      console.log(data)
      setCars(data);
      setFilteredCars(data);
    };

    fetchCars();

    // Load wishlist from localStorage
    const storedWishlist = localStorage.getItem("wishlist");
    if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
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

  // 🟢 **Filter Logic**
  useEffect(() => {
    
      const filtered = cars.filter((car) => {
        // Check for both selectedTypes and selectedCapacities
        const matchesType = selectedTypes.length === 0 || selectedTypes.includes(car.type);
        const matchesCapacity = selectedCapacities.length === 0 || selectedCapacities.includes(car.seatingCapacity.toString()); // Ensure matching data types (string vs number)
        return matchesType && matchesCapacity;
      });
    
      setFilteredCars(filtered);
    }, [selectedTypes, selectedCapacities, cars]);
    
   
  // 🟡 **Type Selection Handler**
  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  // 🟡 **Seating Capacity Selection Handler**
  const handleCapacityChange = (capacity: string) => {
    setSelectedCapacities((prev) =>
      prev.includes(capacity) ? prev.filter((c) => c !== capacity) : [...prev, capacity]
    );
  };

  return (
    <div className="bg-gray-100 p-5">
      <div className="flex gap-5">
        {/* Sidebar */}
        <aside className="lg:w-[200px] bg-white p-5 rounded-lg shadow">
          <h2 className="text-lg font-bold mb-4">Type</h2>
          <ul>
            {["Sport", "SUV", "MPV", "Sedan", "Coupe", "Hatchback"].map((type) => (
              <li key={type} className="mb-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
                  />
                  <span>{type}</span>
                </label>
              </li>
            ))}
          </ul>

          <h2 className="text-lg font-bold mt-6 mb-4">Capacity</h2>
          <ul>
            {["2 People", "4 People", "5 seats", "7 seats"].map((capacity) => (
              <li key={capacity} className="mb-2">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    checked={selectedCapacities.includes(capacity)}
                    onChange={() => handleCapacityChange(capacity)}
                  />
                  <span>{capacity}</span>
                </label>
              </li>
            ))}
          </ul>
        </aside>

        {/* Car Listing Grid */}
      
      
        <div className="grid grid-cols-1 lg:grid-cols-3 border border-spacing-2 gap-4">
          {filteredCars.length > 0 ? (
            filteredCars.map((item, i) => (
              <Link href={`cars/${item._id}`}>
<div key={i} className="bg-white p-4 rounded-lg shadow-md">
                <div className="flex justify-between items-center">
                  <h1 className="text-xl font-semibold">{item.name}</h1>
                  {/* <AiFillHeart className="text-red-500 text-xl" /> */}
                  <div>
                    {/* wishlist addition */}
                    <button onClick={(e) => toggleWishlist(e, item._id)} // Pass car ID to toggleWishlist
                      className={`ml-4 text-3xl ${wishlist.includes(item._id) ? "text-red-500" : "text-gray-400"}`}> ♥
                    </button>
                  </div>
                </div>

                <h3 className="text-gray-600">{item.type} - {item.brand}</h3>
                 <Image
                    src={urlFor(item.image).url()}
                    alt="car"
                    width={300}
                    height={200}
                    className="rounded-md my-2"
                  />

                {/* Car Specifications */}
                <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Image src="/gas-station.png" alt="Fuel" width={16} height={16} />
                    <span>{item.fuelCapacity}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <BiDoughnutChart />
                    <span>{item.transmission}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdPeople />
                    <span>{item.seatingCapacity} </span>
                  </div>
                </div>

                {/* Pricing & Button */}
                <div className="flex justify-between items-center mt-4">
                  <p className="text-blue-500 text-lg">{item.pricePerDay}</p>
                  <Link href={`/billing/${item._id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                   Rent Now
                  </button></Link> 
                </div>
              </div> </Link>
            ))
          ) : (
            <p className="text-center text-gray-500">No cars found for selected filters.</p>
          )}
        </div>  
      </div>
    </div>
  );
}
