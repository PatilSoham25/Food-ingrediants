import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* HERO */}
      <section
        className="contact-hero"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/premium-photo/contact-us-customer-support-hotline-people-connect-businessman-touching-phone-application-check-email_36325-4250.jpg?semt=ais_hybrid&w=740&q=80')",
        }}
      >
        <div className="contact-hero-overlay">
          <h1 data-aos="fade-right">We're here for you</h1>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="contact-section">
        <div className="contact-wrapper">
          <div className="contact-info" data-aos="fade-right">
            <h2>Contact information</h2>
            <p>
              Please complete the form to get in touch with our customer services team
            </p>

            <ul>
              <li>
                <strong>Email:</strong> fiinfo@gmail.com
              </li>
              <li>
                <strong>Phone:</strong> 9999999999
              </li>
              <li>
                <strong>Location:</strong> Global events worldwide
              </li>
            </ul>
          </div>

          <form className="contact-form" data-aos="fade-left">
            <div className="form-row">
              <input type="text" placeholder="First Name" required />
              <input type="email" placeholder="Last Name" required />
              <input type="text" placeholder="Phone Number" required />
            </div>
            <input type="text" placeholder="Company Name" />
            <input type="text" placeholder="Email Address" required />

            <textarea
              rows="5"
              placeholder="Tell us more about your request"
              required
            ></textarea>

            <button type="submit">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
