import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ItineraryForm from "../components/Itinerary/ItineraryForm";
import { useTheme } from "../context/ThemeContext";

const ItineraryPage = () => {
  const { user } = useAuth();
  const [setItems] = useState([]);
  const { isDark } = useTheme();
  const theme = !isDark ? "bg-gray-100" : "bg-gray-900";

  const handleAdd = (item) => setItems((prev) => [...prev, item]);

  return (
    <div className={`${theme}"min-h-screen p-8" `}>
      <div className={theme}>
        <ItineraryForm user={user} onAdd={handleAdd} />
      </div>
    </div>
  );
};

export default ItineraryPage;
