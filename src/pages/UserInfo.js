import React, { useState } from "react";
import { auth } from "../firebase/firebase";
import { data } from "../data/data";

function UserInfo() {
  //const [notice, setNotice] = useState("");
  const [userRank, setUserRank] = useState("");
  const [userOrg, setUserOrg] = useState("");

  console.log(userRank);
  if (userRank === "") {
    console.log("rank is empty");
  }
  console.log(auth.currentUser.uid);

  /*
  const data = {
    rank: ["e-1", "e-2", "e-4", "e-5", "e-6", "e-7", "e-8", "e-9"],
    organization: [
      "spoc",
      "ssc",
      "starcom",
      "sld 45",
      "sld 30",
      "spd 1",
      "spd 2",
      "delta 1",
      "delta 2",
      "delta 3",
      "delta 4",
      "delta 5",
      "delta 6",
      "delta 7",
      "delta 9",
      "delta 10",
      "delat 11",
      "delta 12",
      "delta 13",
      "delta 14",
      "delta 15",
      "delta 16",
      "delta 17",
      "delta 18",
    ],
  };
  */

  return (
    <div className="container">
      <div className="row justify-content-center">
        <form className="col-md-4 mt-3 pt-3 pb-3">
          {/*
          {"" !== notice && (
            <div className="alert alert-warning" role="alert">
              {notice}
            </div>
          )}
          */}
          <div className="col-md-4 text-center">
            <p className="lead">Information</p>
          </div>

          <div className="form-floating mb-3">
            <input
              id="name"
              type="text"
              className="form-control"
              placeholder="Min"
            ></input>
            <label htmlFor="firstname" className="form-label">
              First Name
            </label>
          </div>

          <div className="form-floating mb-3">
            <input
              id="lastname"
              type="text"
              className="form-control"
              placeholder="Kang"
            ></input>
            <label htmlFor="lastname" className="form-label">
              Last Name
            </label>
          </div>

          <div className="form-floating mb-3">
            <select
              id="userRank"
              className={`form-select ${userRank === "" ? "is-invalid" : ""}`}
              value={userRank}
              onChange={(e) => setUserRank(e.target.value)}
            >
              <option value="" disabled hidden></option>
              {data.rank.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <label htmlFor="userRank" className="form-label">
              Select Rank:
            </label>
          </div>

          <div className="form-floating mb-3">
            <select
              className="form-select"
              value={userOrg}
              onChange={(e) => setUserOrg(e.target.value)}
            >
              {data._organization.map((option) => (
                <option key={option.name}>{option.name}</option>
              ))}
            </select>
            <label htmlFor="userOrg" className="form-label">
              Select Organization:
            </label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserInfo;
