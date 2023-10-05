import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListingCard from "../components/ListingCard";
import Loader from "../components/Loader";

import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setListings } from "../redux/state";
import { useState, useEffect } from "react";

const ListingsPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const { category } = useParams();

  const listings = useSelector((state) => state.listings);

  const getFeedListings = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/properties?category=${category}`,
        {
          method: "GET",
        }
      );
      const data = await response.json();

      dispatch(setListings({ listings: data }));
      setLoading(false);
    } catch (error) {
      console.log("Fetch Listings failed", error.message);
    }
  };

  useEffect(() => {
    getFeedListings();
  }, [category]);

  return (
    <>
      <Navbar />

      {loading ? (
        <Loader />
      ) : (
        <div
          style={{
            padding: "80px 100px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "25px",
          }}
        >
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
              booking = false,
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
      )}
      <Footer />
    </>
  );
};

export default ListingsPage;
