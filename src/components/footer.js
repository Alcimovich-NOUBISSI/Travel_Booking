import { Link } from "react-router-dom";
import Accordion_Test from "./accordion.js";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="left">
          <i class="far fa-6x fa-envelope"></i>
          <div>
            <h4>Get Updates & More</h4>
            <p>Thoughtful thoughts to your inbox</p>
          </div>
        </div>
        <form className="form_footer">
          <input type="email" placeholder="Email here..." />
          <input type="button" className="orange_button" value="Suscribe" />
        </form>
      </div>

      <footer>
        <div className="info">
          <div className="main">
            <Link to="/">
              <img src="images/flight_logo.png" alt="logo" />
            </Link>
            <p>
              Lorem khaled ipsum is a major key to success. It’s on you how you
              want to live your life. Always remember in the jungle there’s a
              lot of they in.
            </p>
            <div className="icons">
              <i class="fab fa-lg fa-facebook-f"></i>
              <i class="fab fa-lg fa-twitter"></i>
              <i class="fab fa-lg fa-linkedin-in"></i>
              <i class="fas fa-lg fa-rss"></i>
              <i class="fab fa-lg fa-pinterest"></i>
            </div>
          </div>
          <div className="services">
            <h3 className="footer_header"> Our Services</h3>
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Privacy Policy</li>
              <li>Support Forum</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="tags">
            <h3 className="footer_header">Tags</h3>
            <div className="tag_items">
              <p>Flights</p>
              <p>Travelling</p>
              <p>Cruises</p>
              <p>Hotels</p>
              <p>Booking</p>
              <p>Tours</p>
              <p>Countries</p>
              <p>Trekking</p>
              <p>Adventures</p>
              <p>Air Rides</p>
            </div>
          </div>
          <div className="contact">
            <h3 className="footer_header">Contact Info</h3>
            <p>
              <i class="fas fa-map-pin"></i>
              150-A Appolo aprtment, opp. Hopewell Junction, Allen st Road, new
              york-405001.
            </p>
            <p>
              <i class="fas fa-phone-alt"></i> +0 123-456-7890
            </p>
            <p>
              <i class="far fa-envelope"></i> info@example.com
            </p>
            <p>
              <i class="fas fa-globe-africa"></i> travelrideworld.com
            </p>
          </div>
        </div>
        <Accordion_Test />
        <hr />
        <p>
          2021 All Rights Reserved. Design by <span>Isidore NOUBISSI</span>
        </p>
        <div className="footer_policy">
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Customer</p>
          <p>Service</p>
          <p>Privacy</p>
          <p>Policy</p>
          <p>Accessibility</p>
          <p>Directory</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
