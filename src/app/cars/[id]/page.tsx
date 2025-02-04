
import { client } from "@/sanity/lib/client";
import Image from 'next/image';
import Link from 'next/link';
import { urlFor } from '@/sanity/lib/image';

export default async function dynamicpage(props:any) {
  const { id } = props.params;  // Extract route parameter correctly

  // Query to fetch all cars
  const query = `*[_type == "car"]`
  const cars = await client.fetch(query);
  // console.log(cars)
  // Find the specific car by ID
  const car = cars.find((car: any) => car._id === id);

  if (!car) {
    // Handle case when the car is not found
    return <div>Car not found!</div>;
  }
    return(
        <div className="border border-red-800 px-4 py-4 md:flex justify-between">

          <div className="md:w-[50%] p-3">

            <div>
              <h1 className="font-Plus Jakarta Sans text-xl font-bold uppercase">
            Car with the best design and acceleration</h1>
            </div>

            <div>
              <p className="text-md">Safety and comfort while driving a futuristic and elegant sports car</p>
            </div>

            <div className="my-2">
              <Image src={urlFor(car.image).url()} alt={car.name} width={400} height={400} className=" flex mx-auto rounded-lg shadow-md" /> 
            </div>

            <div className=" my-2 lg:flex items-center justify-between mt-2 gap-2" >
            <div className="w-[200px] lg:w-[230px] flex mx-auto lg:mx-0 my-2 lg:my-0" >
            <Image 
                   src={urlFor(car.image).url()} 
                   alt={car.name}
                    width={300}
                     height={200}
                   className="bg-[rgba(84,166,255,100%)] h-full rounded-md bg-[url('/blueBack.jpg')] bg-cover bg-center relative p-6 w-[200px] lg:w-[230px]"
                     />
            </div>
            <Image
              src="/View 2.png"
              alt="Interior"width={150} height={150}
             className="w-[150px] lg:w-[180px] flex mx-auto lg:mx-0 my-2 lg:my-0"
            />
             <Image
              src="/View 3.png"
              alt="Interior"width={150} height={150}
              className="w-[150px] lg:w-[180px] flex mx-auto lg:mx-0 my-2 lg:my-0"
            />
            
          
        </div>



          </div>

          <div className="bg-slate-200 md:w-[50%] px-3 py-3 flex flex-col lg:justify-between mt-5 md:mt-0">
          
                <h1 className="text-5xl font-bold text-red-800 my-2">{car.name}</h1>
                <h2 className="text-gray-700 text-2xl my-2 ">Type : <strong> {car.type}</strong></h2>
                {/* <p className="text-gray-700 border border-purple-800 text-2xl ">Brand : {car.brand}</p> */}
                <h2 className="text-gray-700 text-2xl my-2 ">Transmission : <strong> {car.transmission}</strong></h2>
                <h2 className="text-gray-700 text-2xl my-2 ">Fuel Capacity : <strong> {car.fuelCapacity}</strong></h2>
                <h2 className="text-gray-700 text-2xl my-2 ">Seating Capacit : <strong> {car.seatingCapacity}</strong></h2>
                <h2 className="text-gray-700 text-2xl my-2 ">Tag : <strong> {car.tags}</strong></h2>

                <Link href={`/billing/${car._id}`}><button className='my-2 bg-[#3563E9] text-white rounded-md px-6 py-2'>Rent Now</button></Link>

          </div>

        </div>
    )
}

