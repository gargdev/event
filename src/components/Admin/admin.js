import React from "react";
import "../../styles/admin.css";
const admin = () => {
  return (
    <>
      <div className="wrapper1">
        <div className="home">
          <button className="h">Home</button>
          <button className="h">LogOut</button>
        </div>
        <div className="welcome">
          <button className="h">Welcome Admin</button>
        </div>
        <div className="maintainUser">
          <button className="maintain h">Maintain User</button>
          <button className="maintain h">Maintain Vendor</button>
        </div>
      </div>
    </>
  );
};

export default admin;
