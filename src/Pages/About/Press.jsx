import React from "react";
import { Tickets, TicketCheck, Lightbulb, MapPinCheck, BrainCog, Factory } from 'lucide-react';
import "./Press.css";

const Press = () => {
  return (
    <div className="press-page">
      {/* HERO SECTION */}
      <section
        className="press-hero"
        style={{
          backgroundImage:
            "url('https://mondo.com/wp-content/smush-webp/2022/12/new-the-importance-of-an-employee-appreciation-strategy-2022-768x403.jpg.webp')",
        }}
      >
        <div className="press-hero-overlay">
          <span className="press-tag" data-aos="fade-right">Press</span>
          <h1 data-aos="fade-left">
            Get the inside information on <br />
            the world's nutraceutical event
          </h1>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="press-benefits">
        <div className="press-benefits-left">
          <span className="section-label" data-aos="fade-top">Benefits</span>
          <h2 data-aos="fade-right">Our press offering</h2>
        </div>

        <div className="press-benefits-grid">
          <div className="benefit-card"
          data-aos="fade-down"
          data-aos-anchor-placement="top-center">
            <div className="icon"><Tickets size={36} /></div>
            <p>Access exclusive events</p>
          </div>
          <div className="benefit-card"
          data-aos="fade-down"
          data-aos-anchor-placement="top-center">
            <div className="icon"><TicketCheck size={36} /></div>
            <p>Free entry</p>
          </div>
          <div className="benefit-card"
          data-aos="fade-down"
          data-aos-anchor-placement="top-center">
            <div className="icon"><Lightbulb size={36} /></div>
            <p>Cutting-edge innovation</p>
          </div>
          <div className="benefit-card"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
            <div className="icon"><MapPinCheck size={36} /></div>
            <p>Access to live content</p>
          </div>
          <div className="benefit-card" 
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
            <div className="icon"><BrainCog size={36} /></div>
            <p>Meet leading innovators</p>
          </div>
          <div className="benefit-card"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center">
            <div className="icon"><Factory size={36} /></div>
            <p>Access leading F&amp;B brands</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Press;
