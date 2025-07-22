import React, { useState, useEffect } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

const ItineraryList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const snapshot = await getDocs(collection(db, "itineraries"));
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setItems(data);
      } catch (err) {
        console.error("Error fetching itineraries:", err);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="px-4 py-8 md:px-8 lg:px-16 bg-gray-100 dark:bg-gray-900 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          ✈️ Your Travel Itineraries
        </h2>

        {items.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">
            No itinerary data available.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg shadow p-5 transition hover:shadow-lg"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {item.date} • {item.time} Am
                  </span>
                  <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-700 dark:bg-blue-800 dark:text-blue-200 uppercase">
                    {item.type || "other"}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.description || "No description"}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  📍 {item.location || "Unknown location"}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ItineraryList;
