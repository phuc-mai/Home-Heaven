import "../styles/Register.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImage: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: value,
      [name]: name === "profileImage" ? files[0] : value,
    });
  };

  const [passwordMatch, setPasswordMatch] = useState(true);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password === formData.confirmPassword) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }

    try {
      const form_data = new FormData();

      // key in [key, value] --> key = "name"
      for (var key in formData ) {
          form_data.append(key, formData[key]);
      }

      const response = await fetch("https://homeheavenserver.phucmai.com/auth/register", {
        method: "POST",
        body: form_data,
      });

      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.log("Registration failed", error.message);
    }
  };

  return (
    <div className="register">
      <div className="register_content">
        <form className="register_content_form" onSubmit={handleSubmit}>
          <input
            placeholder="First Name"
            name="firstName"
            onChange={handleChange}
            value={formData.firstName}
            required
          />
          <input
            placeholder="Last Name"
            name="lastName"
            onChange={handleChange}
            value={formData.lastName}
            required
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
            required
          />
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleChange}
            value={formData.confirmPassword}
            required
          />

          {!passwordMatch && (
            <p style={{ color: "red" }}>Passwords are not matched!</p>
          )}

          <input
            type="file"
            id="image"
            style={{ display: "none" }}
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            required
          />
          <label htmlFor="image">
            <img src="/assets/addImage.png" alt="add profile" />
            <p>Upload Profile Photo</p>
          </label>{" "}

          {formData.profileImage && (
            <img
              src={URL.createObjectURL(formData.profileImage)}
              alt="Profile"
              style={{ maxWidth: "80px" }}
            />
          )}

          <button type="submit" disabled={!passwordMatch}>
            REGISTER
          </button>
        </form>
        <a href="/login">Already have an account? Log In Here</a>
      </div>
    </div>
  );
};

export default Register;
