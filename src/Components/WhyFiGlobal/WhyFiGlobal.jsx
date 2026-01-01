import "./WhyFiGlobal.css";

const features = [
  {
    icon: "🎯",
    text: "Generate more leads with tech-enabled events",
  },
  {
    icon: "🤝",
    text: "Connect with the innovators changing the industry",
  },
  {
    icon: "🔍",
    text: "Discover food trends on a global scale",
  },
  {
    icon: "✨",
    text: "Be among the taste makers of tomorrow",
  },
];

const WhyFiGlobal = () => {
  return (
    <section className="why-section">
      <div className="why-container">

        {/* LEFT */}
        <div className="why-left" data-aos="fade-right">
          <span className="why-subtitle">Why Fi Global</span>
          <h1>
            A world of taste
            <br />
            and opportunity
          </h1>
          <button className="why-btn">Join our community</button>
        </div>

        {/* RIGHT */}
        <div className="why-right" data-aos="fade-down">
          {features.map((item, index) => (
            <div className="why-item" key={index}>
              <div className="why-icon">{item.icon}</div>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyFiGlobal;
