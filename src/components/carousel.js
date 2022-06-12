import React, { Component } from "react";
import Slider from "react-slick";
export default class Carousel extends Component {
  
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
        {
          breakpoint: 870,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 603,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
          }
        },
        {
          breakpoint: 425,
          settings: {
            dots: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: false,
            arrows: false
          }
        }
      ]
    };

    const {label} = this.props;
    

    function SampleNextArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "transparent" }}
          onClick={onClick}
        />
      );
    }
    
    function SamplePrevArrow(props) {
      const { className, style, onClick } = props;
      return (
        <div
          className={className}
          style={{ ...style, display: "block", background: "transparent" }}
          onClick={onClick}
        />
      );
    }

    return (
      
      <div>
        <Slider {...settings}>
          {label}
        </Slider>
      </div>
    );
  }
}
