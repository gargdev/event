import React from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import "../styles/homepage.css";
import Admin from "../components/Admin/adminSignUp";

const HomePage = () => {
  return (
    <>
      <div className="home-hero">
        <button>Vendor</button>
        <button>Admin</button>
        <button>User</button>
      </div>
    </>
  );
};

export default HomePage;
