import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const StateCardList = () => {
  const [states, setStates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("/data/states.json")
      .then((res) => res.json())
      .then(setStates);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {states.map((state) => (
        <div
          key={state.id}
          onClick={() => navigate(`/state/${state.id}`)}
          className="bg-white rounded-lg shadow hover:shadow-lg cursor-pointer transition"
        >
          <img
            src={state.image}
            alt={state.name}
            className="w-full h-40 object-cover rounded-t"
          />
          <div className="p-4 text-center text-lg font-semibold">
            {state.name}
          </div>
        </div>
      ))}
    </div>
  );
};

export default StateCardList;
