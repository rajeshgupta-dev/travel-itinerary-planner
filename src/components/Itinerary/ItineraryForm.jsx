import React, { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { useTheme } from "../../context/ThemeContext";

const ItineraryForm = ({ user, onAdd }) => {
  const [form, setForm] = useState({
    date: "",
    time: "",
    type: "flight",
    description: "",
    location: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    alert("Data Submited");

    try {
      const docRef = await addDoc(collection(db, "itineraries"), {
        userId: user.uid,
        ...form,
        createdAt: Timestamp.now(),
      });

      console.log("Saved with ID:", docRef.id);
      onAdd && onAdd({ id: docRef.id, ...form });

      setForm({
        date: "",
        time: "",
        type: "flight",
        description: "",
        location: "",
      });
    } catch (err) {
      console.error("Error saving:", err);
    } finally {
      setSubmitting(false);
    }
  };

  //  theme toggle from ContextTheme
  const { isDark } = useTheme();
  const theme = !isDark ? "bg-gray-100" : "bg-gray-900";
  return (
    <form
      onSubmit={handleSubmit}
      className={`${theme} p-6 rounded-lg shadow-lg max-w-lg mx-auto `}
    >
      <h2
        className={` ${
          !isDark ? "text-gray-800" : "dark:text-gray-100"
        } text-2xl font-semibold mb-4 `}
      >
        Add Itinerary Item
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="date"
          name="date"
          value={form.date}
          onChange={handleChange}
          required
          className="input-field"
        />
        <input
          type="time"
          name="time"
          value={form.time}
          onChange={handleChange}
          required
          className="input-field"
        />
        <select
          name="type"
          value={form.type}
          onChange={handleChange}
          className="input-field"
        >
          <option value="flight">✈️ Flight</option>
          <option value="hotel">🏨 Hotel</option>
          <option value="activity">🏞️ Activity</option>
        </select>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={form.location}
          onChange={handleChange}
          className="input-field col-span-1 sm:col-span-2"
          required
        />
        <textarea
          name="description"
          placeholder="Details..."
          value={form.description}
          onChange={handleChange}
          className="input-field col-span-1 sm:col-span-2 h-24"
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-4 w-full bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        {submitting ? "Adding..." : "Add Itinerary"}
      </button>
    </form>
  );
};

export default ItineraryForm;
