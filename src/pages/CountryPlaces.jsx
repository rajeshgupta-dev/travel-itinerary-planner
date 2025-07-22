import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { travelData } from "../data/travelData";

const CountryPlaces = () => {
  const { countryName } = useParams();
  const navigate = useNavigate();

  const country = travelData.countries.find(
    (c) => c.name.toLowerCase() === countryName.toLowerCase()
  );

  if (!country)
    return <p className="text-center mt-10 text-red-500">Country not found</p>;

  const allPlaces = country.categories.flatMap((cat) => cat.places);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">{country.name}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {allPlaces.map((place) => (
          <div
            key={place.id}
            onClick={() => navigate(`/place/${place.id}`)}
            className="bg-white rounded-lg shadow-md hover:shadow-xl cursor-pointer"
          >
            <img
              src={place.image}
              alt={place.name}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{place.name}</h3>
              <p className="text-sm text-gray-500">{place.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountryPlaces;
