import "./Copyright.css";

const Copyright = () => {
  return (
    <footer className="copyright">
      {/* TOP BAR */}
      <div className="copyright-top">
        <div className="copyright-logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Informa_logo.svg"
            alt="Informa Markets"
          />
          <span>markets</span>
        </div>

        <p className="copyright-text">
          Copyright © 2025. All rights reserved. Informa Markets, a trading
          division of Informa PLC.
        </p>
      </div>

      {/* BOTTOM BAR */}
      <div className="copyright-bottom">
        <ul>
          <li>Accessibility</li>
          <li>Privacy Policy</li>
          <li>Terms of Use</li>
          <li>Visitor Terms and Conditions</li>
          <li>Event Code of Conduct</li>
        </ul>
      </div>
    </footer>
  );
};

export default Copyright;
