import React from 'react';
import './App.css';
import heroImage from './assets/hero_img.webp';
import aboutImage from './assets/about.jpg';

function App() {
  return (
    <div className="app">
      {/* Header Section */}

      <header className="header">
        <div className="logo-container">
          <h1 className="logo">HospitalCare</h1>
        </div>
        <nav className="navbar">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#departments">Departments</a></li>
            <li><a href="#doctors">Doctors</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#feedback">Feedback</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h2>Welcome to HospitalCare</h2>
          <p>Your health is our priority. Providing quality care with compassion.</p>
        </div>
        {/* Placeholder for Hero Image */}
        <img src={heroImage} alt="Hero Image" className="hero-image" />
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <h2>About Us</h2>
          <p>
            HospitalCare is a leading healthcare provider dedicated to offering comprehensive
            medical services to our community. We prioritize patient care and well-being, with
            a team of expert doctors and medical staff working tirelessly for your health.
          </p>
        </div>
        {/* Placeholder for About Image */}
        <img src={aboutImage} alt="About Hospital" className="about-image" />
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <h2>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Emergency Care</h3>
            <p>24/7 emergency services with immediate medical assistance.</p>
          </div>
          <div className="service-item">
            <h3>Cardiology</h3>
            <p>Expert heart specialists and state-of-the-art cardiology services.</p>
          </div>
          <div className="service-item">
            <h3>Orthopedics</h3>
            <p>Comprehensive care for bones, joints, and muscles.</p>
          </div>
          <div className="service-item">
            <h3>Pediatrics</h3>
            <p>Comprehensive pediatric care from birth to adolescence.</p>
          </div>
          <div className="service-item">
            <h3>Gynecology</h3>
            <p>Specialized care for women's health, from pregnancy to menopause.</p>
          </div>
          <div className="service-item">
            <h3>Oncology</h3>
            <p>Expert cancer treatment with advanced technology and therapies.</p>
          </div>
        </div>
      </section>

      {/* Departments Section */}
      <section className="departments" id="departments">
        <h2>Our Departments</h2>
        <div className="department-list">
          <div className="department-item">
            <h3>General Medicine</h3>
            <p>Experienced physicians available for general health care.</p>
          </div>
          <div className="department-item">
            <h3>Surgery</h3>
            <p>State-of-the-art surgery facilities and expert surgeons.</p>
          </div>
          <div className="department-item">
            <h3>Radiology</h3>
            <p>Advanced diagnostic imaging and X-ray services.</p>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="doctors" id="doctors">
        <h2>Our Doctors</h2>
        <p>Meet our experienced medical professionals who will care for you.</p>
        <div className="doctor-list">
          {/* Placeholder for Doctors' Images */}
          {/* <img src="doctor1.jpg" alt="Doctor Name" className="doctor-image" /> */}
          {/* <img src="doctor2.jpg" alt="Doctor Name" className="doctor-image" /> */}
          {/* <img src="doctor3.jpg" alt="Doctor Name" className="doctor-image" /> */}
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact" id="contact">
        <h2>Contact Us</h2>
        <p>Get in touch with us for appointments, inquiries, or support.</p>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Feedback Section */}
      <section className="feedback" id="feedback">
        <h2>Patient Feedback</h2>
        <p>We value your feedback to improve our services.</p>
        <div className="feedback-list">
          <div className="feedback-item">
            <p>"The best hospital experience! The staff is caring and professional."</p>
            <span>- John Doe</span>
          </div>
          <div className="feedback-item">
            <p>"I received excellent care during my surgery. Highly recommend!"</p>
            <span>- Jane Smith</span>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Information</h3>
          <p>Email: info@hospitalcare.com</p>
          <p>Phone: +1 (800) 123-4567</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Opening Hours</h3>
          <p>Mon - Fri: 9 AM - 6 PM</p>
          <p>Sat: 10 AM - 2 PM</p>
          <p>Sun: Closed</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
