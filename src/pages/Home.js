import React from "react";
import { auth } from "../firebase/firebase";
//import Nav from "react-bootstrap/Nav";

function Home() {
  return (
    <div className="ps-5 pe-5">
      <nav className="navbar navbar-light bg-light navbar-expand-lg">
        <div className="container" style={{ backgroundColor: "#e3f2fd" }}>
          <a className="navbar-brand" href="#">
            <img
              src="https://mdbootstrap.com/img/Photos/new-templates/animal-shelter/logo.png"
              height="70"
            ></img>
          </a>
          <button className="navbar-toggler" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <div className="navbar-nav mr-auto">
              <a className="nav-link active" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Courses
              </a>
              <a className="nav-link disabled" href="#">
                About
              </a>
            </div>
            <form>
              <div className="input-group">
                <input type="text" className="form-control"></input>
                <button className="btn" type="button">
                  Search
                </button>
              </div>
            </form>
            <div>{auth.currentUser.email}</div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Home;
