import { useSelector } from "react-redux";
import "../styles/ListingCard.scss";
import "../styles/Wishlist.scss"
import ListingCard from "../components/ListingCard";
import Navbar from "../components/Navbar";

const Wishlist = () => {
  const wishList = useSelector((state) => state.user.wishList);

  return (
    <>
      <Navbar />
      <div className="wishlist">
        <h1>Your Wish List</h1>
        <div className="favorite">
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
      </div>
    </>
  );
};

export default Wishlist;
