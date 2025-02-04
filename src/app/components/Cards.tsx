import { useEffect, useState } from "react";
import Image from "next/image"; 
import { AiFillHeart } from "react-icons/ai";
import { BiDoughnutChart } from "react-icons/bi";
import { MdPeople } from "react-icons/md";
import { client } from "@/sanity/lib/client"; 

const Cards = () => {
  
  const [cars, setCars] = useState<any[]>([]);
  const [filteredCars, setFilteredCars] = useState<any[]>([]);


  useEffect(() => {
    const fetchCars = async () => {
      try {
        const query = `*[_type == "car"]{
          name,
          brand,
          type,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          originalPrice,
          tags,
          "imageUrl": image.asset->url
        }`;
        const data = await client.fetch(query);
        setCars(data);
        setFilteredCars(data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 border border-spacing-2 gap-4">
      {filteredCars.length > 0 ? (
        filteredCars.slice(0, 3).map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center">
              <h1 className="text-xl font-semibold">{item.name}</h1>
              <AiFillHeart className="text-red-500 text-xl" />
            </div>

            <h3 className="text-gray-600">{item.type} - {item.brand}</h3>

    
            {item.imageUrl && (
              <Image
                src={item.imageUrl}
                alt="car"
                width={300}
                height={200}
                className="rounded-md my-2"
              />
            )}

            {/* ✅ Car Specifications */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Image src="/gas-station.png" alt="Fuel" width={16} height={16} />
                <span>{item.fuelCapacity}L</span>
              </div>
              <div className="flex items-center gap-1">
                <BiDoughnutChart />
                <span>{item.transmission}</span>
              </div>
              <div className="flex items-center gap-1">
                <MdPeople />
                <span>{item.seatingCapacity} Person</span>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No cars found for selected filters.</p>
      )}
    </div>
  );
};

export default Cards;
