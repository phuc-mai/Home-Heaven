import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import ListingCard from "../components/ListingCard";
import Loader from "../components/Loader";
import { setPropertyList } from "../redux/state";
import Footer from "../components/Footer";

const Property = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  const user = useSelector((state) => state.user);
  const propertyList = user.propertyList || [];

  const getProperties = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/properties/${user._id}/listings`,
        {
          method: "GET",
        }
      );

      const data = await response.json();
      dispatch(setPropertyList(data));
      setLoading(false);
    } catch (error) {
      console.log("Fetch all reservationd failed", error.message);
    }
  };

  useEffect(() => {
    getProperties();
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <>
      <Navbar />
      <h1 style={{ margin: "40px 100px" }}>Your Reservation List</h1>
      <div style={{ margin: "0 100px 120px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "25px" }}>
        {propertyList?.map(
          ({
            _id,
            listingPhotosPaths,
            city,
            province,
            country,
            category,
            type,
            price,
            totalPrice,
            startDate,
            endDate,
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
              totalPrice={totalPrice}
              booking={booking}
              startDate={startDate}
              endDate={endDate}
            />
          )
        )}
      </div>
      <Footer />
    </>
  );
};

export default Property;
