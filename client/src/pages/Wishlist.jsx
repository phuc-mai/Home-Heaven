import { useSelector } from "react-redux";
import "../styles/ListingCard.scss";
import ListingCard from "../components/ListingCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Wishlist = () => {
  const wishList = useSelector((state) => state.user.wishList);

  return (
    <>
      <Navbar />
        <h1 style={{ margin: "40px 100px" }}>Your Wish List</h1>
        <div style={{ margin: "0 100px 120px", display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "25px" }}>
          {wishList.map(
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
        <Footer />
    </>
  );
};

export default Wishlist;
