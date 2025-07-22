// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import Dashboard from "./pages/Dashboard";
import Footer from "./pages/Footer";
import PlaceDetails from "./pages/PlaceDetails";
import CountryPlaces from "./pages/CountryPlaces";
import ItineraryPage from "./pages/ItineraryPage";
import MyItineraryPage from "./pages/MyItineraryPage";
import Navbar from "./components/Navbar";
import { useAuth } from "./context/AuthContext";
import SignupPage from "./pages/signupPage";

const App = () => {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <LoginPage />}
        />
        <Route
          path="/itinerary"
          element={user ? <ItineraryPage /> : <LoginPage />}
        />
        <Route
          path="/my-itinerary"
          element={user ? <MyItineraryPage /> : <LoginPage />}
        />

        <Route path="/place/:id" element={<PlaceDetails />} />
        <Route path="/country/:countryName" element={<CountryPlaces />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
