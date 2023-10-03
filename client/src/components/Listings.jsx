import "../styles/Listings.scss";
import { setListings } from "../redux/state";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "./Loader";
import ListingCard from "./ListingCard";

const Listings = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  const listings = useSelector((state) => state.listings);

  const getFeedListings = async () => {
    try {
      const response = await fetch("http://localhost:3001/properties", {
        method: "GET",
      });

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (error) {
      console.log("Fetch all Listings failed", error.message);
    }
  };

  const getUserListings = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/properties/${userId}/listings`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (error) {
      console.log("Fetch user Listings failed", error.message);
    }
  };

  useEffect(() => {
    if (isProfile) {
      getUserListings();
    } else {
      getFeedListings();
    }
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="listings">
      {listings.map(
        ({
          _id,
          listingPhotosPaths,
          city,
          province,
          country,
          category,
          type,
          price,
          booking = false
        }) => (
          <ListingCard
            listingId={_id}
            listingPhotosPaths={listingPhotosPaths}
            city={city}
            province={province}
            country={country}
            category={category}
            type={type}
            price={price}
            booking={booking}
          />
        )
      )}
    </div>
  );
};

export default Listings;
