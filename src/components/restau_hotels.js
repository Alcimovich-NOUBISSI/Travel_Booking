import "./restau_hotels.css";

function button_color (status){
  switch(status) {
      case "open soon": return "yellow";
      case "closed": return "red";
      default :return "green";
  }
}

const Restau_Hotels = ({ 
    name,
    src,
    country,
    contact,
    review,
    type,
    status
}) => {
   return(
       <div className="restau_and_hotels">
         <div className="image"> 
          <img src= {src} alt="hotel_pic" />
          <p>{type} </p>
         </div>
         <div className="restau_and_hotels_content">
          <h4>{name}</h4>
          <div className="details">
            <p><i class="fas fa-map-marker-alt"></i>{country}</p>
            <p><i class="fas fa-phone-alt"></i>{contact}</p>
          </div>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
          <hr/>
          <div className= "footer_details">
          <p> {review} reviews </p>
          <button style= {{background: button_color(status) }}> {status}</button>
          </div>
         </div>
       </div>
   );
}

export default Restau_Hotels; 