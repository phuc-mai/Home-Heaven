import "../styles/Listings.scss";
import { categories } from "../data";

const Listings = () => {
  return (
    <div className="listings">
      <div className="category-list">
        {categories?.map((category, index) => (
          <div className="category" key={index}>
            <div className="category_icon">{category.icon}</div>
            <p>{category.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
