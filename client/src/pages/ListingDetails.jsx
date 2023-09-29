import { useState } from "react";
import Navbar from "../components/Navbar";
import { facilities } from "../data";
import "../styles/ListingDetails.scss";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ListingDetails = () => {
  const { listingId } = useParams()
  const [listing, setListing] = useState()

  const getListing = async () => {
    try {
      const response = await fetch(`http://localhost:3001/properties/${listingId}`, {
        method: "GET",
      })
      const data = await response.json()
      setListing(data)
    } 
      catch (error) {
        console.log("Fetch Listing failed", error.message);
    }
  }

  useEffect(() => {
    getListing();
  }, []);

  console.log(listingId, listing)

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  return (
    <>
      <Navbar />
      <div className="listing-details">
        <h1>{listing.title}</h1>
        <img src="/assets/castle_cat.webp" alt="castle" />
        <h2>{JSON.parse(listing.type).name} in {listing.city}, {listing.province}, {listing.country}</h2>
        <p>{listing.guestCount} guests - {listing.bedroomCount} bedroom - {listing.bedCount} bed - {listing.bathroomCount} bath</p>
        <hr />
        <div className="profile">
          <img src="/assets/phucmai.png" alt="profile" />
          <h3>Hosted by Phuc Mai</h3>
        </div>
        <hr />
        <p>
          {listing.description}
        </p>
        <hr />
        <h2>What this place offers</h2>
        <div className="amenities">
          {facilities?.map((item) => (
            <div className="facility">
              <div className="facility_icon">{item.icon}</div>
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <h2>How long you want to stay</h2>
        <div className="calendar">
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            orientation="portrait"
            variant="static"
            value={startDate}
            onChange={(newDate) => setStartDate(newDate)}
          />
        </LocalizationProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDatePicker
            orientation="portrait"
            variant="static"
            value={endDate}
            onChange={(newDate) => setEndDate(newDate)}
          />
        </LocalizationProvider>
        </div>
      </div>
    </>
  );
};

export default ListingDetails;
