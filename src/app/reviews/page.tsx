"use client";
import React, { useState } from "react";

const ReviewSection = () => {
  const [reviews, setReviews] = useState([
    {
      name: "Alex Stanton",
      date: "21 July 2022",
      
      stars: 5,
      comment:
        "We are very happy with the service from the MORENT App. Morent has a low price and also a large variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      image: "/profile-icon.png", // Profile logo instead of image
    },
    {
      name: "Skylar Dias",
      date: "20 July 2022",
      position: "CEO at Amazon",
      stars: 4,
      comment:
        "We are greatly helped by the services of the MORENT Application. Morent has low prices and also a wide variety of cars with good and comfortable facilities. In addition, the service provided by the officers is also very friendly and very polite.",
      image: "/profile-icon.png", // Profile logo instead of image
    },
  ]);

  const [newReview, setNewReview] = useState({
    name: "",
    date: "",
    stars: 5,
    comment: "",
    image: "/profile-icon.png", // Default profile logo
  });

  const handleAddReview = () => {
    if (newReview.name && newReview.comment) {
      setReviews([newReview, ...reviews]);
      setNewReview({
        name: "",
        date: "",
        stars: 5,
        comment: "",
        image: "/profile-icon.png",
      });
    }
  };

  return (
    <div className="mt-2 w-full mb-6 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-lg font-bold mb-4 flex items-center">
        Reviews
        <button className="w-[44px] h-[24px] ml-2 bg-[#3563E9] rounded text-white">
          {reviews.length}
        </button>
      </h2>

      {reviews.map((review, index) => (
        <div key={index} className="flex items-center mb-4">
          <div>
            <div className="flex gap-3 items-center">
            <div className="w-2 h-2 rounded-full bg-black"></div>
              <h3 className="font-semibold">{review.name}</h3>
              <span>{review.date}</span>
            </div>
            
            <p className="text-gray-600 text-sm mt-2">{review.comment}</p>
          </div>
        </div>
      ))}

      <div className="mt-6">
        <h3 className="text-lg font-bold mb-2">Add Your Review</h3>
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-2 border rounded"
          value={newReview.name}
          onChange={(e) =>
            setNewReview({ ...newReview, name: e.target.value, date: new Date().toLocaleDateString() })
          }
        />
        <textarea
          placeholder="Your Review"
          className="w-full p-2 mb-2 border rounded"
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        ></textarea>
        <button
          onClick={handleAddReview}
          className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewSection;
