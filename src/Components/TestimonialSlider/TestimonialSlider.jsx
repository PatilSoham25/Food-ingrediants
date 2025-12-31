import { useEffect, useState } from "react";
import "./TestimonialSlider.css";

const testimonials = [
  {
    image:
      "https://media.istockphoto.com/id/1587604256/photo/portrait-lawyer-and-black-woman-with-tablet-smile-and-happy-in-office-workplace-african.jpg?s=612x612&w=0&k=20&c=n9yulMNKdIYIQC-Qns8agFj6GBDbiKyPRruaUTh4MKs=",
    text:
      "The aim of our marketing campaign was to gain greater brand exposure and awareness for both our company and product. We had a highly successful Fi Europe with many visitors to our booth.",
    name: "Hanna Heijnen",
    role: "Marketing & Communication Specialist, Cosun Protein",
  },
  {
    image:
      "https://resources2.morganphilips.com/DNNWebsite/img/mpg-2022/mpes/MPES-rotator-box-808x974.jpg",
    text:
      "Fi Global helped us connect with the right partners and showcase our innovations to a global audience. The exposure exceeded our expectations.",
    name: "James Carter",
    role: "Business Development Manager",
  },
  {
    image:
      "https://img.freepik.com/premium-photo/find-something-you-like-it-shot-corporate-businesspeople-office_590464-34016.jpg?w=360",
    text:
      "An excellent platform for learning, networking, and doing business. The events are extremely well organized and valuable.",
    name: "Emily Watson",
    role: "Product Marketing Lead",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonial">
      <div className="testimonial-container">

        {/* IMAGE */}
        <div className="testimonial-image">
          <img src={testimonials[current].image} alt="testimonial" />
        </div>

        {/* CONTENT */}
        <div className="testimonial-content">
          <p className="testimonial-text">
            “{testimonials[current].text}”
          </p>

          <h4>{testimonials[current].name}</h4>
          <span>{testimonials[current].role}</span>

          {/* DOTS */}
          <div className="dots">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={current === index ? "dot active" : "dot"}
                onClick={() => setCurrent(index)}
              ></span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TestimonialSlider;
