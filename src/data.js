import World_grid from "./components/world_grid.js";
import Destination from "./components/destination.js";
import Restau_Hotels from "./components/restau_hotels.js";
import Transport_Facilities from "./components/transport_facilities.js";
import Recent_Articles from "./components/recent_articles.js";
import Tour_Package from "./components/tour_package.js";

export const tours = [
    <Tour_Package
            source="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nouvelle_libert%C3%A9_%282%29.JPG/180px-Nouvelle_libert%C3%A9_%282%29.JPG"
            departure="Namibia"
            arrival="Cameroon"
            reviews="10"
            days="2"
            nights="1"
            place="Douala"
            avalaible="5"
            price="23"
          />,
          <Tour_Package
            source="https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/LT32_%281%29_Monument_des_roi_d%27akwa.JPG/330px-LT32_%281%29_Monument_des_roi_d%27akwa.JPG"
            departure="Namibia"
            arrival="Cameroon"
            reviews="10"
            days="2"
            nights="1"
            place="Douala"
            avalaible="5"
            price="23"
          />,
          <Tour_Package
            source="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nouvelle_libert%C3%A9_%282%29.JPG/180px-Nouvelle_libert%C3%A9_%282%29.JPG"
            departure="Namibia"
            arrival="Cameroon"
            reviews="1"
            days="2"
            nights="1"
            place="Douala"
            avalaible="5"
            price="23"
          />,
          <Tour_Package
            source="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nouvelle_libert%C3%A9_%282%29.JPG/180px-Nouvelle_libert%C3%A9_%282%29.JPG"
            departure="Namibia"
            arrival="Cameroon"
            reviews="1"
            days="2"
            nights="1"
            place="Douala"
            avalaible="5"
            price="23"
          />,
          <Tour_Package
            source="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Nouvelle_libert%C3%A9_%282%29.JPG/180px-Nouvelle_libert%C3%A9_%282%29.JPG"
            departure="Namibia"
            arrival="Cameroon"
            reviews="1"
            days="2"
            nights="1"
            place="Douala"
            avalaible="5"
            price="23"
          />
  ]

  export const world = [
    <World_grid country="Cameroon" places="12" />,
    <World_grid country="USA" places="12" />,
    <World_grid country="India" places="12" />,
    <World_grid country="Paris" places="12" />,
    <World_grid country="Dubai" places="12" />,
    <World_grid country="London" places="12" />,
    <World_grid country="Cameroon" places="12" />,
    <World_grid country="USA" places="12" />,
    <World_grid country="India" places="12" />,
    <World_grid country="Paris" places="12" />,
    <World_grid country="Dubai" places="12" />,
    <World_grid country="London" places="12" />,
    <World_grid country="Cameroon" places="12" />,
    <World_grid country="USA" places="12" />,
    <World_grid country="India" places="12" />,
    <World_grid country="Paris" places="12" />,
    <World_grid country="Dubai" places="12" />,
    <World_grid country="London" places="12" />
  ]

  export const destination = [
    <Destination />,
    <Destination />,
    <Destination />,
    <Destination />,
    <Destination />,
    <Destination />,
  ]

 export const restau_hotels = [
    <Restau_Hotels
    src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg"
    country="Cameroon"
    name="Best Western Grant Park Hotel"
    contact="+237 693-48-35-83"
    review="10"
    type="hotel"
    status="open"
    />,
    <Restau_Hotels
        src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg"
        country="Cameroon"
        name="Best Western Grant Park Hotel"
        contact="+237 693-48-35-83"
        review="10"
        type="restaurant"
        status="closed"
    />,
    <Restau_Hotels
        src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg"
        country="Cameroon"
        name="Best Western Grant Park Hotel"
        contact="+237 693-48-35-83"
        review="10"
        type="restaurant"
        status="open soon"
    />,
    <Restau_Hotels
        src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg"
        country="Cameroon"
        name="Best Western Grant Park Hotel"
        contact="+237 693-48-35-83"
        review="10"
        type="restaurant"
        status="open soon"
    />,
    <Restau_Hotels
        src="https://cdn.loewshotels.com/loewshotels.com-2466770763/cms/cache/v2/5f5a6e0d12749.jpg/1920x1080/fit/80/86e685af18659ee9ecca35c465603812.jpg"
        country="Cameroon"
        name="Best Western Grant Park Hotel"
        contact="+237 693-48-35-83"
        review="10"
        type="restaurant"
        status="open soon"
    />
  ]

 export const transport_facilities = [
    <Transport_Facilities
    name="Cars"
    src="https://etimg.etb2bimg.com/thumb/msid-81762426,width-700,resizemode-4/.jpg"
    reviews="10"
    number="25"
    />,
    <Transport_Facilities
        name="Buses"
        src="https://image.made-in-china.com/44f3j00MDhETUAyrnqF/Mini-160-Bus-Ankai-160-Bus-160-Price-11-17-Seats-New-Mini-Bus-Whosale.jpg"
        reviews="10"
        number="25"
    />,
    <Transport_Facilities
        name="Cruises"
        src="https://moranyachts.imgix.net/wp-content/uploads/luxury-yacht-brokerage-yacht-sales-lurssen-nord-1.jpg?auto=format&fit=crop&fm=webp%26nbsp%3B2x&h=400&ixlib=php-3.1.0&w=720&s=2afb80d2546591329e88a1698c517b2c"
        reviews="20"
        number="15"
    />,
    <Transport_Facilities
        name="Cruises"
        src="https://moranyachts.imgix.net/wp-content/uploads/luxury-yacht-brokerage-yacht-sales-lurssen-nord-1.jpg?auto=format&fit=crop&fm=webp%26nbsp%3B2x&h=400&ixlib=php-3.1.0&w=720&s=2afb80d2546591329e88a1698c517b2c"
        reviews="20"
        number="15"
    />,
    <Transport_Facilities
        name="Cruises"
        src="https://moranyachts.imgix.net/wp-content/uploads/luxury-yacht-brokerage-yacht-sales-lurssen-nord-1.jpg?auto=format&fit=crop&fm=webp%26nbsp%3B2x&h=400&ixlib=php-3.1.0&w=720&s=2afb80d2546591329e88a1698c517b2c"
        reviews="20"
        number="15"
    />
  ]

 export const recent_articles = [
    <Recent_Articles
        src="https://travelcravingsdotcom1.files.wordpress.com/2020/04/hotelzingana.png"
        title="Places to visit in Cameroon"
        date= "1/7/2022"
        blogger= "Isidore"
    />,
    <Recent_Articles
        src="https://travelcravingsdotcom1.files.wordpress.com/2020/04/hotelzingana.png"
        title="Places to visit in Uganda"
        date= "3/17/2022"
        blogger= "Alcimovich"
    />,
    <Recent_Articles
        src="https://travelcravingsdotcom1.files.wordpress.com/2020/04/hotelzingana.png"
        title="Places to visit in Jamaica"
        date= "5/7/2022"
        blogger= "Robert"
    />,
    <Recent_Articles
        src="https://travelcravingsdotcom1.files.wordpress.com/2020/04/hotelzingana.png"
        title="Places to visit in Cameroon"
        date= "1/7/2022"
        blogger= "Isidore"
    />,
  ]