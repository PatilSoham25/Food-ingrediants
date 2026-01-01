import "./Opportunities.css";

const Opportunities = () => {
  return (
    <section className="opportunities">
      <div className="op-container">

        {/* LEFT – CIRCLE */}
        <div className="op-left" data-aos="fade-down-right">
          <div className="circle">
            <div className="circle-center">
              <span>Fi</span>
              <p>Food<br />ingredients</p>
            </div>

            <div className="circle-segment s1">Europe</div>
            <div className="circle-segment s2">Asia</div>
            <div className="circle-segment s3">Americas</div>
            <div className="circle-segment s4">Content</div>
            <div className="circle-segment s5">Marketplace</div>
            <div className="circle-segment s6">Marketing</div>
          </div>
        </div>

        {/* RIGHT – CONTENT */}
        <div className="op-right" data-aos="fade-left">
          <span className="op-subtitle">How we do it</span>
          <h2>Opportunities<br />for every<br />palate</h2>

          <p>
            We enable the whole F&amp;B community to connect, learn,
            network and do business through our series of online and
            in-person events, and supporting digital platforms and
            solutions.
          </p>

          <button className="op-btn">Join the community</button>
        </div>

      </div>
    </section>
  );
};

export default Opportunities;
