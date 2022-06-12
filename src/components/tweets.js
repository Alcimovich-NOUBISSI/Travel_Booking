import './tweets.css';

import React, { Component } from "react";
import Slider from "react-slick";

export default class Tweets extends Component {
  render() {
    const settings = {
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive :[{
        breakpoint: 472,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          arrows: false
        }
    }]
  };

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
          <div >
            <p>
                It is a long established fact a reader will be # distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters
            </p>
            <p>
                <b>About 16 days ago</b>{" "}
            </p>
          </div>

          <div>
            <p>
                It is a long established fact a reader will be # distracted by the
                readable content of a page when looking at its layout. The point of
                using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters
            </p>
            <p>
                <b>About 16 days ago</b>{" "}
            </p>
          </div>


          <div>
            <p>
            It is a long established fact a reader will be # distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters
            </p>
            <p>
                <b>About 16 days ago</b>{" "}
            </p>
          </div>


          <div>
          <p>
            It is a long established fact a reader will be # distracted by the
            readable content of a page when looking at its layout. The point of
            using Lorem Ipsum is that it has a more-or-less normal distribution
            of letters
            </p>
            <p>
                <b>About 16 days ago</b>{" "}
            </p>
          </div>

        </Slider>
      </div>
    );
  }
}