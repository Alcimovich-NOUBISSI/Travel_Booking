import "./hero_search.css";


const SearchTab_Tours = () => {
  return (
    <form id="search_form_tours">
      <div className="main">
        <p className="heading">Your Destinations</p>
        <input type="text" placeholder="Enter a destination" />
      </div>
      <div className="travel_date">
        <p className="heading">Travel Date</p>
        <input type="date" placeholder="MM/DD/YY" />
      </div>
      <div className="return_date">
        <p className="heading">Return Date</p>
        <input type="date" placeholder="MM/DD/YY" />
      </div>
      <div className="adult">
        <p className="heading">Adults</p>
        <select>
          <option value=""> 1</option>
          <option value=""> 2</option>
          <option value=""> 3</option>
        </select>
      </div>
      <div className="children">
        <p className="heading">Children</p>
        <select>
          <option value=""> 1</option>
          <option value=""> 2</option>
          <option value=""> 3</option>
        </select>
      </div>
      <div className="search_button">
        <i class="fas fa-search"></i>
        <input className="input_field" type="button" value="Search Now" />
      </div>
    </form>
  );
};

const SearchTab_hotels = () => {
  return (
    <form id="search_form_hotels">
      <div className="main">
        <p className="heading">Search for Hotels</p>
        <input type="text" placeholder="Search for Hotels" />
      </div>
      <div className="travel_date">
        <p className="heading">Check In</p>
        <input type="date" placeholder="MM/DD/YY" />
      </div>
      <div className="return_date">
        <p className="heading">Check Out</p>
        <input type="date" placeholder="MM/DD/YY" />
      </div>
      <div className="adult">
        <p className="heading">Adults</p>
        <select>
          <option value=""> 1</option>
          <option value=""> 2</option>
          <option value=""> 3</option>
        </select>
      </div>
      <div className="children">
        <p className="heading">Children</p>
        <select>
          <option value=""> 1</option>
          <option value=""> 2</option>
          <option value=""> 3</option>
        </select>
      </div>
      <div className="room">
        <p className="heading">Rooms</p>
        <select>
          <option value=""> 1</option>
          <option value=""> 2</option>
          <option value=""> 3</option>
        </select>
      </div>
      <div className="search_button">
        <i class="fas fa-search"></i>
        <input className="input_field" type="button" value="Search Now" />
      </div>
    </form>
  );
};

const SearchTab_Cars = () => {
    return (
      <form id="search_form">
        <div className="main_cars">
          <p className="heading">From</p>
          <input type="text" placeholder="From" />
        </div>
        <div className="main_car">
          <p className="heading">To</p>
          <input type="text" placeholder="To" />
        </div>
        <div className="travel_date">
          <p className="heading">Pickup Date</p>
          <input type="date" placeholder="MM/DD/YY" />
        </div>
        <div className="time">
          <p className="heading">Pickup Time</p>
          <select>
            <option value=""> 12:00 AM</option>
            <option value=""> 13:00 AM</option>
            <option value=""> 13:30 AM</option>
          </select>
        </div>
        <div className=" children">
          <p className="heading">Children</p>
          <select>
            <option value=""> 1</option>
            <option value=""> 2</option>
            <option value=""> 3</option>
          </select>
        </div>
        <div className="adult">
          <p className="heading">Adults</p>
          <select>
            <option value=""> 1</option>
            <option value=""> 2</option>
            <option value=""> 3</option>
          </select>
        </div>
        <div className="search_button">
          <i class="fas fa-search"></i>
          <input className="input_field" type="button" value="Search Now" />
        </div>
      </form>
    );
  };

export { SearchTab_Tours, SearchTab_hotels, SearchTab_Cars };
