import React from "react";
import { useNavigate } from "react-router-dom";
import { travelData } from "../data/travelData";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Explore Countries</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {travelData.countries.map((country) => (
          <div
            key={country.id}
            onClick={() => navigate(`/country/${country.name.toLowerCase()}`)}
            className="bg-white rounded-lg shadow-md hover:shadow-lg cursor-pointer transition-transform transform hover:scale-105"
          >
            <img
              src={country.flag}
              alt={country.name}
              className="w-full h-40 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-1">{country.name}</h2>
              <p className="text-sm text-gray-500">{country.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
