import "../styles/Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { GoogleLogin } from "react-google-login";

import { setLogin } from "../redux/state";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        /* Pass email & password input to body as in server: const { email, password } = req.body */
        body: JSON.stringify({ email, password }),
      });

      /* Get data after fetching */
      const loggedIn = await response.json();
      /* reponse.json() = res.status(200).json({ token, user }) as in server*/

      if (loggedIn) {
        dispatch(
          setLogin({
            user: loggedIn.user,
            token: loggedIn.token,
          })
        );
        navigate("/");
      }
    } catch (error) {
      console.log("Login failed", error.message);
    }
  };

  const responseGoogle = async (response) => {
    if (response.profileObj) {
      const { googleId, email, name, imageUrl } = response.profileObj;

      try {
        const response = await fetch("http://localhost:3001/auth/googlelogin", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          /* Pass email & password input to body as in server: const { email, password } = req.body */
          body: JSON.stringify({ googleId, email, name, imageUrl }),
        });

        /* Get data after fetching */
        const loggedIn = await response.json();
        /* reponse.json() = res.status(200).json({ user: userData }) as in server*/

        if (loggedIn) {
          dispatch(
            setLogin({
              user: loggedIn.user,
              token: loggedIn.token,
            })
          );
          navigate("/");
        }
      } catch (error) {
        console.log("Login failed", error.message);
      }
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
        <div className="login_content_google">
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Log In with Google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
        </div>
        <a href="/register">Don't have an account? Sign In Here</a>
        <p>DEMO Account</p>
        <p>Email - "phucmai@email.com" & Pass - "phucmai"</p>
      </div>
    </div>
  );
};

export default Login;
