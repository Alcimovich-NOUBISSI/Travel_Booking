/* eslint-disable react/jsx-pascal-case */

import { useState } from "react";

import "./homeScreen.css";
import Header from "../components/header.js";
import Footer from "../components/footer.js";
import {
  SearchTab_Tours,
  SearchTab_hotels,
  SearchTab_Cars,
} from "../components/hero_search.js";

import * as data from "../data.js";

import Carousel from "../components/carousel";
import Tweets from "../components/tweets";

const HomeScreen = () => {
  const search_tabs = {
    tours: <SearchTab_Tours/>,
    hotels: <SearchTab_hotels/>,
    cars: <SearchTab_Cars/>
  }

  const [tab, changeTab] = useState('tours');
  
  const [tourHeight, changeTourHeight] = useState(false);
  
  return (
    <div>
      <Header />

      <section id="hero">
        <div className="hero_text">
          <h5>The best tour experience</h5>
          <h1>Book Your Destination For Cruises </h1>
          <p>
            Curabitur nunc erat, consequat in erat ut, congue bibendum nulla.
            Suspendisse id pharetra lacus, et hendrerit mi quis leo elementum.
          </p>
        </div>
        <div className="hero_options">
          <p onClick = { () => {changeTab('tours')}} style= { (tab==="tours")? {backgroundColor : "#fff"}: null} >Tours</p>
          <p onClick = { () => {changeTab('hotels')}} style= { (tab==="hotels")? {backgroundColor : "#fff"}: null} >Hotels</p>
          <p onClick = { () => {changeTab('tours')}} style= { (tab==="")? {backgroundColor : "#fff"}: null} >Flights</p>
          <p onClick = { () => {changeTab('cars')}} style= { (tab==="cars")? {backgroundColor : "#fff"}: null} >Cars</p>
        </div>
        {search_tabs[tab]}
      </section>


      <section id="world">
        <h3 className="headin">
          The <span> World </span>
        </h3>
        <p className="headin_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="world_content" style= {(tourHeight === true)? {maxHeight: 'none'}: {maxHeight: '440px'} }>
          { data.world }
        </div>
        <button 
          className="orange_button"
          onClick={()=>{changeTourHeight(!tourHeight); console.log(tourHeight)}}
        > {(tourHeight === true)? "Show less": "Show more"} 
        </button>
      </section>
      

      <section id="tour_package">

        <h3 className="headin">
          Popular <span> Tour Package </span>
        </h3>
        <p className="headin_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="tour_content">
        <Carousel 
          label= {data.tours}
        />
        </div>
      </section>


      <section id="cta_tours">
        <div className="content">
          <p>
            From <span>$960</span>
          </p>
          <h3>Princess World Cruise Vacation</h3>
          <p>
            <i class="fas fa-map-marker-alt"></i> America |{" "}
            <i class="fa fa-calendar" aria-hidden="true"></i> July 19th{" "}
          </p>
          <p>10 reviews</p>
          <p>
            Curabitur nunc erat, consequat in erat ut, congue bibendum nulla.
            Suspendisse id pharetra lacus, et hendrerit mi quis leo elementum.
          </p>
          <button className="orange_button">
            <i class="fas fa-map-marker-alt"></i> View Our Tours
          </button>
        </div>
      </section>


      <section id="destinations">
        <h3 className="headin">
          Our <span> Destinations </span>
        </h3>
        <p className="headin_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <button className="orange_button">National Tour </button>
        <button className="yellow_button">International Tour </button>
        <div className="destinations_content">
          {data.destination}
        </div>
      </section>

      <section id="restau_and_hotels">
        <h3 className="headin">
          <span> Hotels </span> And <span> Restaurants </span>
        </h3>
        <p className="headin_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="restau_content">
          <Carousel 
            label = {data.restau_hotels} 
          />
        </div>
      </section>


      <section id="metrics">
        <div>
          <i class="far fa-smile fa-3x"></i>
          <p className="number">13323+</p>
          <p>Happy Clients</p>
        </div>
        <div>
          <i class="fas fa-plane fa-3x"></i>
          <p className="number">14520+</p>
          <p>Amazing Tours</p>
        </div>
        <div>
          <i class="fas fa-thumbs-up fa-3x"></i>
          <p className="number">11450+</p>
          <p>Customer Review</p>
        </div>
        <div>
          <i class="far fa-calendar-check fa-3x"></i>
          <p className="number">15250+</p>
          <p>Tour Booking</p>
        </div>
      </section>


      <section id="transport_facilities">
        <h3 className="headin">
          Transportation <span> Facilities </span>
        </h3>
        <p className="headin_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className="transport_facilities_content">
        <Carousel 
          label= {data.transport_facilities}
        />
        </div>
      </section>


      <section id="tweets">
        <h3 className="headin">
          Our Latest <span> Tweets </span>
        </h3>
        <p className="headin_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <i class="fab fa-twitter fa-3x"></i>
        <div className="tweets_content">
          <Tweets />
        </div>
      </section>


      <section id="recent_articles">
        <h3 className="headin">
          Recent <span> Articles </span>
        </h3>
        <p className="headin_p">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
        <div className ="recent_articles_content">
         <Carousel
           label= {data.recent_articles}
         />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default HomeScreen;
