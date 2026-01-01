import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      {/* TOP SECTION */}
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-brand" data-aos="fade-right">
          <h2>Fi Global</h2>

          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-x-twitter"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-youtube"></i>
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-partners" data-aos="fade-left">
          <h4>Partners</h4>
          <ul>
            <li>Innova Market Insights</li>
            <li>Mintel</li>
            <li>FMCG Gurus</li>
          </ul>
        </div>
      </div>

      <hr />

      {/* BOTTOM SECTION */}
      <div className="footer-bottom">
        {/* ABOUT */}
        <div className="footer-about" data-aos="fade-up">
          <h3>About us</h3>
          <p>
            Fi Global has been connecting the food ingredients industry for over
            three decades. Our tech-enabled events enable the tastemakers of
            tomorrow to innovate and create inspiring global partnerships.
          </p>
        </div>

        {/* LINKS */}
        <div className="footer-links" data-aos="fade-left">
          <div>
            <h4>Sustainability →</h4>
            <p>Get in touch with us.</p>
          </div>

          <div>
            <h4>Ingredients Network →</h4>
            <p>Connect with a global community.</p>
          </div>

          <div>
            <h4>Fi Global Insights →</h4>
            <p>Stay ahead of the curve.</p>
          </div>

          <div>
            <h4>Newsletter →</h4>
            <p>The latest news straight in your inbox.</p>
          </div>

          <div>
            <h4>Smartcore →</h4>
            <p>
              Reach your buyers, maximise your brand awareness, generate excellent-quality leads, establish thought leadership in the industry, and achieve greater returns on your investment and time with our smarter digital campaigns.
            </p>
          </div>

          <div>
            <h4>Contact us →</h4>
            <p>Get in touch with our friendly customer services team.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
