import React, { useState } from "react";
import { auth } from "../firebase/firebase.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
//import { defaultMethod } from "react-router-dom/dist/dom";

// To reiterate, the Login.jsx component is the home route for the application
// - i.e. this is the route that will display when navigating to localhost:3000.
// The component includes the form where the user can enter his/her e-mail and
// password to login to the application. If he/she doesn't have an existing account,
// he/she can click on a link below the form to get routed to the Signup component
// which will be built in the next step.
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notice, setNotice] = useState("");

  const loginWithUsernameAndPassword = async (e) => {
    e.preventDefault();

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("./site/home");
    } catch {
      setNotice("You entered a wrong username or password.");
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-md-4 mt-3 pt-3 pb-3">
          {"" !== notice && (
            <div className="alert alert-warning" role="alert">
              {notice}
            </div>
          )}
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email address
            </label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
          </div>
          <div className="d-grid">
            <button
              type="submit"
              className="btn btn-primary pt-3 pb-3"
              onClick={(e) => loginWithUsernameAndPassword(e)}
            >
              Submit
            </button>
          </div>
          <div className="mt-3 text-center">
            <span>
              Need to sign up for an account?{" "}
              <Link to="./signup">Click here.</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
