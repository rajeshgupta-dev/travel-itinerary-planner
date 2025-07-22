import React from "react";
import { useParams } from "react-router-dom";
import { travelData } from "../data/travelData";
import MapView from "../components/MapView";

const PlaceDetails = () => {
  const { id } = useParams();

  const place = travelData.countries
    .flatMap((country) => country.categories)
    .flatMap((cat) => cat.places)
    .find((p) => p.id.toString() === id);

  if (!place)
    return <p className="text-center mt-10 text-red-500">Place not found</p>;

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={place.image}
        alt={place.name}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{place.name}</h1>
      <p className="text-gray-600 mb-2">{place.location}</p>
      <p className="mb-4">{place.description}</p>
      <p className="text-sm text-gray-500 mb-4">
        <strong>Best time to visit:</strong> {place.bestTimeToVisit}
      </p>

      {place.transportation && (
        <div className="mt-4 bg-gray-50 p-4 rounded">
          <h4 className="font-semibold mb-2">Transportation from Delhi:</h4>
          {place.transportation.fromDelhi.map((t, i) => (
            <div key={i} className="mb-2">
              <p className="text-sm">
                <strong>Mode:</strong> {t.mode}
              </p>
              <p className="text-sm">
                <strong>Duration:</strong> {t.duration}
              </p>
              <p className="text-sm">
                <strong>Cost:</strong> {t.cost}
              </p>
              <ul className="text-xs list-disc ml-5">
                {t.steps.map((s, idx) => (
                  <li key={idx}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {place.lat && place.lng && (
        <div className="mt-6">
          <MapView lat={place.lat} lng={place.lng} name={place.name} />
        </div>
      )}
    </div>
  );
};

export default PlaceDetails;
