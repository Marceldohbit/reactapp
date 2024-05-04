import React from 'react';
import './css/Footer.css'; // Import CSS file for styling

const Footer = () => {
  return ( 
    
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Your Website</p>
        <div className="social-icons">
          <a href="#"><i className="fa fa-facebook"></i></a>
          <a href="#"><i className="fa fa-twitter"></i></a>
          <a href="#"><i className="fa fa-instagram"></i></a>
          <a href="#"><i className="fa fa-linkedin"></i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;