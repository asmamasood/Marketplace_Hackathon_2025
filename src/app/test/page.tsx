import { client } from "@/sanity/lib/client";
import Image from "next/image";

export default async function Test() {
  const query = `*[_type == "car"]
  {
            name,
            brand,
            type,
            fuelCapacity,
            transmission,
            seatingCapacity,
            pricePerDay,
            originalPrice,
            tags,
           "imageUrl": image.asset->url}`;


  const data = await client.fetch(query);
  console.log(data); // Debugging ke liye

  return (
    <div className="grid grid-cols-3 gap-3 borderd">
      {data.map((item: any, i: number) => (
        <div key={i}>
          <h1>{item.name}</h1>
                          <h3 className="gap-2"> {item.type}
                            {item.brand}
                            {item.type}
                            {item.fuelCapacity}
                            {item.transmission}
                            {item.seatingCapacity}
                            {item.pricePerDay}
                            {item.originalPrice}
                            {item.tags}</h3>
          {item.imageUrl ? (
            <Image src={item.imageUrl} alt="car" width={300} height={300} />
          ) : (
            <p>Image not available</p>
          )}
        </div>
      ))}
    </div>
    )
}