import React from "react";
import ItineraryList from "../components/Itinerary/ItineraryList";

const MyItineraryPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-10 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <ItineraryList />
      </div>
    </div>
  );
};

export default MyItineraryPage;
