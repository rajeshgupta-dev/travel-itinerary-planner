import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Background image slider
const sliderImages = [
  "https://tse3.mm.bing.net/th/id/OIP.btaVJ5t9ueHV8RZVE69Y9QAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
  "https://wallpapercave.com/wp/wp3500260.jpg",
  "https://amazingadventures.in/wp-content/uploads/2020/02/wp2894162.jpg",
  "https://1.bp.blogspot.com/-v_c8lCgrd4M/X-dxWKZNeUI/AAAAAAAAAJY/r_5StQjmzcIGsRSySlK5v4yDl_3z7kKTACLcBGAsYHQ/s2048/GettyImages-606353257-5be1ac59c9e77c00519e8ae0.jpg", // goa beach
  "https://www.indiatravel.app/wp-content/uploads/2024/03/rajgir-sightseeing-spots-1024x585.jpg", // rajir
  "https://apnayatra.com/wp-content/uploads/2023/07/Bodh-Gaya-1024x768.jpg", // Both gya
  "https://th.bing.com/th/id/OIP.VII2chLYKLi57IaAk9jU3gHaEL?w=310&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", // Darbhanga rajkila
  "https://english.cdn.zeenews.com/sites/default/files/styles/zm_700x400/public/2022/08/01/1071802-bihar.jpg", // Darbhanga , raja home
];

const LandingPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      {/* 🔹 Hero Slider Section */}
      <div className="relative w-full h-screen overflow-hidden" id="home">
        {sliderImages.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`slide-${index}`}
            className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Blue overly */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 to-green-900/80 z-10" />

        {/* Hero Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
            Travel Itinerary Planner
          </h1>
          <p className="text-lg md:text-2xl mb-6 drop-shadow max-w-2xl">
            Plan, explore, and organize your adventures with ease and style.
          </p>
          <a
            href="#about"
            className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition cursor-pointer"
          >
            Learn More
          </a>
        </div>
      </div>

      {/*  About the Project Section */}
      <section
        id="about"
        className="w-full bg-white text-gray-800 py-8 px-6 md:px-12"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-blue-800">
            About the Project
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 mb-6 text-center max-w-3xl mx-auto">
            The <strong>Travel Itinerary Planner</strong> is a modern web
            application designed to simplify your travel experience. Whether
            you're planning a weekend getaway or a multi-country trip, this tool
            helps you stay organized and excited.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
            <div className="bg-blue-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                📅 Itinerary Builder
              </h3>
              <p>
                Create a day-by-day plan of your trip including destinations,
                activities, and timings.
              </p>
            </div>
            <div className="bg-purple-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">🗺️ Interactive Map</h3>
              <p>Visualize your route and locations using integrated maps.</p>
            </div>
            <div className="bg-green-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">💰 Expense Tracker</h3>
              <p>
                Track your travel expenses and budget efficiently on the go.
              </p>
            </div>
            <div className="bg-pink-100 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                ⏰ Travel Reminders
              </h3>
              <p>Get alerts for your bookings, check-ins, and to-do tasks.</p>
            </div>
          </div>
        </div>
      </section>
      {/* login and signup button  */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-white px-6 text-center  py-8">
        <Link to="/login">
          <button className=" p-4 bg-blue-500 hover:bg-blue-700 text-white py-2 rounded-md transition duration-300 active:bg-red-500 cursor-pointer">
            Start Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
