import "./Form.css";

const Form = () => {
  return (
    <section className="newsletter" data-aos="flip-up">
      <span className="newsletter-subtitle">
        Fi Global Insights newsletter
      </span>

      <h2 className="newsletter-title">
        See what's cooking every week
      </h2>

      <form className="newsletter-form">
        <div className="form-grid">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />

          <select>
            <option>Country of residence</option>
            <option>India</option>
            <option>United States</option>
            <option>United Kingdom</option>
            <option>Germany</option>
          </select>

          <input type="email" placeholder="Email address" />
        </div>

        {/* CAPTCHA SECTION */}
        <div className="captcha-wrapper">
          <p className="captcha-title">Form Captcha</p>

          <div className="captcha-box">
            <div className="captcha-left">
              <input type="checkbox" />
              <label>I'm not a robot</label>
            </div>

            <div className="captcha-right">
              <img
                src="https://www.gstatic.com/recaptcha/api2/logo_48.png"
                alt="reCAPTCHA"
              />
              <span>
                reCAPTCHA
                <small>Privacy · Terms</small>
              </span>
            </div>
          </div>
        </div>

        <button className="subscribe-btn">Subscribe</button>

        <p className="privacy-text">
          By subscribing, you acknowledge our{" "}
          <a href="/">Privacy Policy</a> which provides full information
          about how Informa will use and protect your personal data.
        </p>

        <p className="newsletter-link">
          Still on the fence? Here’s a taste of what our newsletters have to
          offer →
        </p>
      </form>
    </section>
  );
};

export default Form;
