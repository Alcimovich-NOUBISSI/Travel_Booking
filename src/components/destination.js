import "./destination.css";

const Destination = () => {
  return (
    <div className="destination">
      <div className="image">
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/LT32_%281%29_Monument_des_roi_d%27akwa.JPG/330px-LT32_%281%29_Monument_des_roi_d%27akwa.JPG" alt="destination"/>
      </div>
      <div className="destination_content">
        <p> <span>Holiday Tour</span></p>
        <hr />
        <p>Only <span>$235</span></p>
      </div>

      <div className="destination_content_focus">
        <div>
        <p> <span>Holiday Tour</span></p>
        <hr />
        <p>Only <span>$235</span></p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <button className="orange_button">View Detail</button>
        </div>
      </div>
    </div>
  );
};

export default Destination;
