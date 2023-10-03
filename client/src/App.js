import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CreateListing from "./pages/CreateListing";
import ListingDetails from "./pages/ListingDetails";
import Wishlist from "./pages/Wishlist";
import Trip from "./pages/Trip";
import Reservation from "./pages/Reservation";

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="/properties/:listingId" element={<ListingDetails />} />
          <Route path="/:userId/wishlist" element={<Wishlist />} />
          <Route path="/:userId/trips" element={<Trip />} />
          <Route path="/:userId/reservations" element={<Reservation />} />
        </Routes>
    </>
  );
}

export default App;
