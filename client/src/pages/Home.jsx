import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Listings from "../components/Listings";
import Navbar from "../components/Navbar";
import Slide from "../components/Slide";

const Home = () => {

  return (
    <>
      <Navbar />
      <Slide />
      <Categories />
      <Listings />
      <Footer />
    </>
  );
};

export default Home;
