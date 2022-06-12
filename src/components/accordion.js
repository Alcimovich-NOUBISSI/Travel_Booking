import React, {useRef, useState} from "react";
import "./accordion.css";

export default function Accordion_Test() {
  const serviciesRef = useRef();
  const tagsRef = useRef();
  const contactRef = useRef();

  const [accordion, setAccordion] = useState ({
    services: false, 
    tags: false, 
    contact: false});

  return (
    <div className="accordion">
      <div
        className="services"
        ref={serviciesRef}
        style={{ 
          height: ((accordion.services === false )? "38px": "auto"), 
          overflow: "hidden", 
          marginBottom: "20px"}}
      >
        <hr />
        <div
          className="header"
          onClick={() => setAccordion({
            services: !accordion.services, 
            tags: false, 
            contact: false
          })}
        >
        <h3> Our Services</h3>

        { (!accordion.services) ? 
          <i class="fas fa-plus" />: 
          <i class="fas fa-minus" />
        }
        </div>
        <div className="services_items">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Privacy Policy</li>
            <li>Support Forum</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
      <div
        className="tags"
        ref={tagsRef}
        style={{ 
          height: ((accordion.tags === false)? "38px": "auto"), 
          overflow: "hidden", 
          marginTop: "20px" }}
      >
        <hr />
        <div
          className="header"
          onClick={() => setAccordion({
            services: false, 
            tags: !accordion.tags, 
            contact: false
          })}
        >
        <h3>Tags</h3>

        { (!accordion.tags) ? 
          <i class="fas fa-plus" />: 
          <i class="fas fa-minus" />
        }

        </div>
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
      <div
        className="contact"
        ref={contactRef}
        style={{ 
          height: ((accordion.contact === false)? "38px": "auto"), 
          overflow: "hidden", 
          marginTop: "20px" }}
      >
        <hr />
        <div
          className="header"
          onClick={() => setAccordion({
            services: false, 
            tags: false, 
            contact: !accordion.contact
          })}
        >
        <h3>Contact Info</h3>
        
        { (!accordion.contact) ? 
          <i class="fas fa-plus" />: 
          <i class="fas fa-minus" />
        }

        </div>
        <div className="contact_items">
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
    </div>
  );
}
