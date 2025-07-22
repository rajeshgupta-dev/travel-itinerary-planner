import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const PlaceDetails = () => {
  const { id } = useParams();
  const [place, setPlace] = useState(null);

  useEffect(() => {
    fetch("/data/places.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched places:", data);
        const found = data.find((item) => item.id === id);
        console.log("Found place:", found);
        setPlace(found);
      });
  }, [id]);

  if (place === undefined) {
    return <p className="text-center mt-10 text-red-600">Place not found!</p>;
  }

  if (place === null) {
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{place.name}</h1>
      <p className="text-gray-600">{place.location}</p>
      <p className="mt-4 text-gray-700">{place.description}</p>

      <Link to="/" className="inline-block mt-6 text-blue-600 hover:underline">
        ← Back to States
      </Link>
    </div>
  );
};

export default PlaceDetails;
