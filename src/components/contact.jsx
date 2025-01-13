
import React from 'react';
//import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container" id='contact'>
      <h2 className="contact-heading">Contact Us</h2>
      <div className="contact-info">
        {/* Left Section: Company Details */}
        <div className="contact-details">
          <p><strong>Email:</strong> contact@company.com</p>
          <p><strong>Phone:</strong> +91 8543809416</p>
          <p><strong>Address:</strong> निकट चौकियाँ माता मन्दिर (फायर स्टेशन),
          अडानी पेट्रोल पम्प, विशेषरपुर, जौनपुर</p>
        </div>

        {/* Right Section: Social Media Links */}
        <div className="contact-social">
          <h3>Follow Us</h3>
          <div className="social-links">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/constructionaditya.jnp?igsh=MTZldXVkY3NyeWJn"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
                alt="Instagram"
                className="social-logo"
              />
              Instagram
            </a>
            {/* WhatsApp */}
            <a
              href="https://wa.me/8543809416"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                className="social-logo"
              />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
