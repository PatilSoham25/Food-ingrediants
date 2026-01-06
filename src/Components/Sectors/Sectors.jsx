import React from "react";
import "./Sectors.css";

const sectors = [
  "Health Ingredients",
  "Food Ingredients",
  "Food Supplements & Nutraceuticals",
  "Healthy Food and Beverages",
  "Functional Beverages",
  "Functional Food",
  "Plant Based",
  "New exhibitors",
];

const Sectors = () => {
  return (
    <section className="sectors" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">
      <span className="sectors-subtitle">Key sectors</span>

      <h2 className="sectors-title">
        Exhibitors across every sector
      </h2>

      <div className="sectors-tags">
        {sectors.map((sector, index) => (
          <span key={index} className="sector-tag">
            {sector}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Sectors;
