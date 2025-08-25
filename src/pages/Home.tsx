import React from "react";
import viewLogo from "../assets/imgs/company/View-logo.png";

function home() {
  return (
    <div>
      <header className="flex justify-evenly">
        <img src={viewLogo} className="h-23" alt="Logo View" />
        <div className="flex gap-20">
          <p>Features</p>
          <p>Pricing</p>
          <p>Pricing</p>
          <p>Support</p>
        </div>
        <div>
          <div>G</div>
        </div>
      </header>
    </div>
  );
}

export default home;
