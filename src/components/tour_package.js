import "./tour_package.css";

const Tour_Package = ({
  source,
  departure,
  arrival,
  reviews,
  days,
  nights,
  place,
  avalaible,
  price,
  style
}) => {
  return (
    <div className= {`tour_package ${style}`}>
      <div className="image">
        <img src= {source} alt= "destination_image"/>
      </div>
      <div className="content">
        <h5>
          {departure} to {arrival}
        </h5>
        <p>{reviews} {(reviews>1? "reviews":"review")} </p>
        <div className="details">
          <div className="tour_left">
            <p>
              <i class="far fa-clock"></i>
              {days} Days, {nights} Night
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i>
              {place} - {avalaible} Places
            </p>
          </div>
          <div className="right">
            <h4>Price</h4>
            <p className="price">${price}</p>
          </div>
        </div>
        <div className="buttons">
          <button className="orange_button"> Book Now</button>
          <button className="yellow_button"> View Detail</button>
        </div>
      </div>
    </div>
  );
};

export default Tour_Package;
