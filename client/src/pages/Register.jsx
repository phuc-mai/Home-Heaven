import "../styles/Register.scss";
import { AddPhotoAlternate } from "@mui/icons-material";
import { useState } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  })

  

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form">
          <input placeholder="First Name" />
          <input placeholder="Last Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password" />
          <input type="file" id="image" style={{ display: "none" }} />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="send image" />
            <p>Upload Profile Photo</p>
          </label>{" "}
          <button type="submit">REGISTER</button>
        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  );
};

export default Register;
