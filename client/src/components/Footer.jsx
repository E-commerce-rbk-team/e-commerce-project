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
        <div className='footersubs'>  <div className="email-input-container">
    <input type="email" placeholder="Enter your email" />
    <i className="fa-regular fa-paper-plane"></i>
  </div></div> 
        </div>
        <div className="footer-support">
          <h2>Support</h2>
          <p>  3 Ane Habib Bourguiba</p>
          <p>Cite El Khrachfa,Mednine</p>
          <p>OmniMarket@Support.com</p>
          <p>75387555</p>
        </div>
      
      
        <div className="footer-links">
          <h2>Quick Link</h2>
          <p>Privacy Policy</p>
          <p>Terms Of Use</p>
          <p>FAQ</p>
          <p>Contact</p>
        </div>
        <div className="footer-download">
          <h2>Download App</h2>
          <p>Save $3 with App New User Only </p>
          <img id="appImage" src="https://assets.stickpng.com/images/5a902dbf7f96951c82922875.png" alt="App" />
          <img id="qrCode" src="https://cdn.britannica.com/17/155017-050-9AC96FC8/Example-QR-code.jpg" alt="App" />
          <img id="appStore" src="https://assets.stickpng.com/thumbs/5a902db97f96951c82922874.png" alt="App" />

        </div>
        </div>
   
    </footer>
 );
};

export default Footer;