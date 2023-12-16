import React from "react";
import "../../styles/vendorhome.css";
const VendorHome = () => {
  return (
    <>
    
        <div className="wrapper">
            <h1 className="heading">Welcome <br/> Vendor</h1>
            <div className="vendor">
                <button className="butt heading">Your item</button>
                <button className="butt heading">Add New Item</button>
                <button className="butt heading">Transaction</button>
                <button className="butt heading">log Out</button>
            </div>
        </div>
    </>
  );
};

export default VendorHome;
