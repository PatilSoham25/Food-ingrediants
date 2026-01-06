import React from "react";
import "./ServicesPage.css";

const ServicesPage = () => {
  return (
    <>
      {/* HERO */}
      <section className="services-hero">
        <div className="services-hero-overlay">
          <span data-aos="fade-right">Services</span>
          <h1 data-aos="fade-right">Succeed with Fi</h1>
        </div>
      </section>

      {/* WHY SERVICES */}
      <section className="services-why">
        <div className="services-why-left" data-aos="fade-right">
          <span className="section-tag">Why use our services</span>
          <h2>Expertly designed solutions</h2>
          <p>
            Our events are only part of the story. Connect, learn and be part of
            a global food & beverage community through curated solutions.
          </p>
          <button className="primary-btn">Join our community</button>
        </div>

        <div className="services-why-right" data-aos="fade-left">
          <div><span>01</span> Accelerate speed to market</div>
          <div><span>02</span> Reach the audiences that matter</div>
          <div><span>03</span> Collaborate with innovators all year</div>
          <div><span>04</span> Learn about food trends & challenges</div>
        </div>
      </section>

      {/* CRAFTING */}
      <section className="services-crafting" data-aos="fade-down">
        <h2>Crafting Taste Perfection</h2>
        <p>
          With our customised and convenient solutions, you can easily source
          the best ingredients and create perfect food concepts. From recipe
          development to reliable sourcing, we help you succeed.
        </p>
      </section>

      {/* SERVICE BLOCKS */}
      <section className="service-block">
        <div className="service-text" data-aos="fade-right">
          <h3>Customised Solutions</h3>
          <p>
            We work closely with customers to create innovative and sustainable
            solutions that meet unique needs while maintaining the highest
            quality standards.
          </p>
        </div>
        <div className="service-image img-one" data-aos="fade-left"></div>
      </section>

      <section className="service-block reverse">
        <div className="service-text" data-aos="fade-left">
          <h3>Menu Mapping & Curation</h3>
          <p>
            Our experts help curate and expand your menu according to industry
            trends and evolving consumer preferences.
          </p>
        </div>
        <div className="service-image img-two" data-aos="fade-right"></div>
      </section>

      <section className="service-block">
        <div className="service-text" data-aos="fade-right">
          <h3>Kitchen Staff Training</h3>
          <p>
            We train and handhold your team to ensure smooth adoption of our
            solutions, letting you focus on running your business.
          </p>
        </div>
        <div className="service-image img-three" data-aos="fade-left"></div>
      </section>

    </>
  );
};

export default ServicesPage;
