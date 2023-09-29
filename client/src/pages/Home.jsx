import Categories from "../components/Categories";
import Listings from "../components/Listings";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";
import { categories } from "../data";
import "../styles/Home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <div className="category-list">
        {categories?.map((category, index) => (
          <div className="category" key={index}>
            <div className="category_icon">{category.icon}</div>
            <p>{category.label}</p>
          </div>
        ))}
      </div>
      <Listings />
    </>
  );
};

export default Home;
