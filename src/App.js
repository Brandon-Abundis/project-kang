import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import UserInfo from "./pages/UserInfo";
import Home from "./pages/Home";
import NavLayout from "./pages/NavLayout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// The App.js component will hold the JSX markup defining the overall structure
// of the application along with the application routes.
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout></Layout>}>
          <Route index element={<Login></Login>}></Route>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/userinfo" element={<UserInfo></UserInfo>}></Route>
        </Route>
        <Route path="/site" element={<NavLayout></NavLayout>}>
          <Route path="/site/home" element={<Home></Home>}></Route>
          <Route path="/site/profile" element={<Profile></Profile>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
