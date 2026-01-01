import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay" data-aos="zoom-in"></div>

      <div className="hero-content">
        <p className="hero-subtitle" data-aos="fade-right">Connecting the F&amp;B industry</p>
        <h1 className="hero-title" data-aos="fade-right">
          Where the world's tastemakers
          <br />
          meet
        </h1>
      </div>
    </section>
  );
};

export default Hero;
