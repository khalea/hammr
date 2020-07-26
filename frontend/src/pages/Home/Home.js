import React from "react";
import Nav from "../../components/Nav/Nav.js";
import Plus from "./images/topography.svg";
import WFH from "./images/wfh_9.svg"

export default function Home() {
  return (
    <div
      className="home-container w-full h-full"
      style={{ backgroundImage: "url(" + Plus + ")" }}
    >
      <Nav />

      {/* Splash -> Changes from row to column based on size*/}
      <div className="flex sm:flex-col sm:justify-center md:flex-row md:justify-between m-8">
        
        {/* Splash Row*/}
        <div className="w-1/2">
          <p className="sm:text-2xl md:text-4xl font-bold md:w-2/3">
            Welcome to the premier marketplace for digital communication tools.
          </p>
        </div>

        {/* Image Column */}
        <div className="w-1/2">
          <img className="w-full" src={WFH} alt="Discord Screenshot"/>
        </div>
      </div>
    </div>
  );
}
