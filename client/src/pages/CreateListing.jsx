import "../styles/CreateListing.scss";
import Navbar from "../components/Navbar";
import { categories, types } from "../data";

const CreateListing = () => {
  return (
    <>
      <Navbar />
      <div className="create-listing">
        <h1>Post Your Place</h1>
        <div className="create-listing_step1">
          <h2>Step 1: Tell us about your place</h2>
          <hr />
          <div className="create-listing_step1_category">
            <h3>Which of these categories best describes your place?</h3>
            <div className="category-list">
              {categories?.map((category, index) => (
                <div className="category" key={index}>
                  <div className="category_icon">{category.icon}</div>
                  <p>{category.label}</p>
                </div>
              ))}
            </div>

            <h3>What type of place will guests have?</h3>
            <div className="type-list">
              {types?.map((type, index) => (
                <div className="type" key={index}>
                  <div className="type_text">
                  <h4>{type.name}</h4>
                  <p>{type.description}</p>
                  </div>
                  <div className="type_icon">{type.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateListing;
