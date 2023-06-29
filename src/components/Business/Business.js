import React from "react";

const business = {
  imageSrc:
    "https://s3.amazonaws.com/codecademy-content/programs/react/ravenous/pizza.jpg",
  name: "MarginOtto Pizzeria",
  address: "1010 Paddington Way",
  city: "Bordertown",
  state: "NY",
  zipCode: "10101",
  category: "Italian",
  rating: 4.5,
  reviewCount: 90,
};

const Business = () => {
  return (
    <>
      <div>
        <img src={business.imageSrc}/>
        <h1>{business.name}</h1>
      </div>
      <div>
        <p>{business.address}</p>
        <p>{business.city}</p>
        <p>{business.state}</p>
        <p>{business.zipCode}</p>
      </div>
      <div>
        <p>{business.category}</p>
        <p>{business.rating}</p>
        <p>{business.reviewCount}</p>
      </div>
    </>
  )
}

export default Business;