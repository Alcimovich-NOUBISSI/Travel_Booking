import "./transport_facilities.css";

const Transport_Facilities = ({ 
    name,
    src,
    review,
    number,
}) => {
  return(
    <div className="transport_facilities">
    <div className="image"> 
     <img src= {src} alt="transportation_pic" />
    </div>
    <div className="transport_facility_content">
     <h4>{name}</h4>
     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
     <div className="details">
     <div>
       <p><i class="fas fa-check-circle"></i>GPS Tracking</p>
       <p><i class="fas fa-check-circle"></i>Free Wifi</p>
       <p><i class="fas fa-check-circle"></i>Food Facilities</p>
     </div>
     <div>
       <p><i class="fas fa-check-circle"></i>Air Conditioned</p>
       <p><i class="fas fa-check-circle"></i>Push back Seats</p>
       <p><i class="fas fa-check-circle"></i>Extra Facilities</p>
     </div>
       
     </div>
     <hr/>
     <div className= "footer_details">
     <p> {review} reviews </p>
     <p><i class="fas fa-comment"></i> {number} </p>
     </div>
    </div>
  </div>
  );
}

export default Transport_Facilities;