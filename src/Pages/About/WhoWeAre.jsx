import "./WhoWeAre.css";

const WhoWeAre = () => {
  return (
    <div className="who-we-are">

      {/* HERO SECTION */}
      <section className="who-hero">
        <div className="who-hero-overlay">
          <p className="who-breadcrumb" data-aos="fade-right">About Us</p>
          <h1 data-aos="fade-right">For the Tastemakers</h1>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="who-statement">
        <h2 data-aos="fade-up">
          Proud of connecting thousands of F&B professionals through live
          events and digital platforms
        </h2>
      </section>

      {/* HOW IT ALL BEGAN */}
      <section className="who-history">
        <div className="history-left">
          <h2  data-aos="fade-right">How it all began</h2>
          <img src="https://cdn-icons-png.flaticon.com/512/5726/5726775.png" data-aos="flip-left" alt="" />
        </div>

        <div className="history-right" data-aos="fade-left">
          <p>
            Fi hosted its first food ingredients event, connecting the pioneers
            of the F&B industry in Utrecht 1986. What started as a small event
            with only 30-something brands has turned into a series of global
            events spanning 10 countries, 250,000 visitors and 7,000 suppliers.
          </p>

          <p>
            Events are our bread and butter, but the world is evolving and so
            are the needs of our community. By introducing a digitally enabled
            element, we provide the flexibility our global networks need to
            thrive.
          </p>

          <p>
            Tomorrow’s tastes are made at Fi by the power of our collaborative
            network working together to better the health and future of the
            food ingredients industry.
          </p>
        </div>
      </section>

      {/* NETWORK SECTION */}
      <section className="who-network">
        <div className="network-image" data-aos="zoom-in">
          <img
            src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28"
            alt="network"
          />
        </div>

        <div className="network-content" data-aos="fade-up">
          <span className="network-label">Informa markets</span>
          <h2>A network of expertise</h2>
          <p>
            Global specialists in innovation, data and technology, Fi is part
            of Informa Markets. For decades, we have been connecting buyers and
            sellers to enable the growth of specialist markets worldwide.
          </p>
          <button  data-aos="fade-left">Learn more</button>
        </div>
      </section>

    </div>
  );
};

export default WhoWeAre;
