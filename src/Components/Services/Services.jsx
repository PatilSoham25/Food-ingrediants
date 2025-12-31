import { useState } from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Online & In-person events",
    content:
      "We deliver world-class online and in-person events that connect the global food & beverage community.",
  },
  {
    title: "Ingredients Network",
    content:
      "A digital marketplace connecting buyers and suppliers across the global ingredients industry.",
  },
  {
    title: "Smartcore",
    content:
      "Data-driven intelligence and insights to support smarter business decisions.",
  },
  {
    title: "Fi Global Insights",
    content:
      "Industry trends, reports and market insights from global F&B experts.",
  },
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="services">
      <div className="services-container">

        {/* LEFT */}
        <div className="services-left">
          <span className="services-subtitle">Services</span>
          <h2>Succeed with Fi</h2>

          <p>
            We enable the whole F&amp;B community to connect, learn,
            network and do business through our series of events, and
            supporting digital platforms and solutions. Leverage on our
            global and extensive network and market expertise to reach
            thousands of F&amp;B manufacturers and achieve your business
            objectives.
          </p>

          <button className="services-btn">Join our community</button>
        </div>

        {/* RIGHT */}
        <div className="services-right">
          {servicesData.map((item, index) => (
            <div
              key={index}
              className={`accordion-item ${
                activeIndex === index ? "active" : ""
              }`}
            >
              <div
                className="accordion-header"
                onClick={() => toggle(index)}
              >
                <h4>{item.title}</h4>
                <span className="arrow">
                  {activeIndex === index ? "˄" : "˅"}
                </span>
              </div>

              {activeIndex === index && (
                <div className="accordion-content">
                  <p>{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Services;
