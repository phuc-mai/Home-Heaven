import "../styles/Listings.scss";
import { setListings } from "../redux/state";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Listings = ({ userId, isProfile = false }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const listings = useSelector((state) => state.listings);

  const getFeedListings = async () => {
    try {
      const response = await fetch("http://localhost:3001/properties", {
        method: "GET",
      });

      const data = await response.json();
      dispatch(setListings({ listings: data }));
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

  return (
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
        }) => (
          <div
            className="listing-card"
            onClick={() => {
              navigate(`/properties/${_id}`);
              navigate(0);
            }}
          >
            <img
              src={`http://localhost:3001/${listingPhotosPaths[0].replace(
                "public",
                ""
              )}`}
              alt="listing"
            />
            <h3>
              {city}, {province}, {country}
            </h3>
            <p>{JSON.parse(category).label}</p>
            <p>{JSON.parse(type).name}</p>
            <p>
              <span>${price}</span> per night
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default Listings;
