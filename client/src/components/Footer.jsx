import React from 'react';
import '../css/footer.css';

const Footer = () => {
 return (
    <footer className="footer">
      <div className="footer-section">
        <div className="footer-subscribe">
          <h2>Exclusive</h2>
          <p>Subscribe</p>
          <p>Get 10% off your first order</p>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
        <div className="footer-support">
          <h2>Support</h2>
          <p>111 Bijoy sarani, Dhaka,</p>
          <p>DH 1515, Bangladesh.</p>
          <p>exclusive@gmail.com</p>
          <p>+88015-88888-9999</p>
        </div>
      
      
        <div className="footer-links">
          <p>Quick Link</p>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="footer-download">
          <p>Download App</p>
          <p>Save $3 with App</p>
          <p>New User Only</p>
          <p>3 OUT FOR</p>
          <p>Google Play</p>
          <p>App Store</p>
        </div>
        </div>
   
    </footer>
 );
};

export default Footer;