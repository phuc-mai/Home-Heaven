import "../styles/Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      console.log(await response.json());

      if (response.ok) {
      navigate("/")
      }
      
    } catch (error) {
      console.log("Login failed", error.message);
    }
  };

  return (
    <div className="login">
      <div className="login_content">
        <form className="login_content_form" onSubmit={handleSubmit}>
          <input
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <input
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
        <a href="">Forget your password?</a>
        <a href="/register">Don't have an account? Sign In Here</a>
        <p>DEMO Account:</p>
        <p>Email - "phucmai@email.com" & Pass - "phucmai"</p>
      </div>
    </div>
  );
};

export default Login;
