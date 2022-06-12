import "./recent_articles.css";

const Recent_Articles = ({
  title,
  src,
  date,
  blogger
}) => {
  return (
    <div className="recent_articles">
      <div className="image">
        <img src={src} alt="hotel_pic" />
      </div>
      <div className="recent_article_content">
      <div className="details">
        <p>
          <i class="far fa-calendar-alt"></i>
          {date}
        </p>
        <p>
         <i class="far fa-user"></i>
          {blogger}
        </p>
      </div>
        <h4>{title}</h4>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry
        </p>
        <p>Read More </p>
      </div>
    </div>
  );
};

export default Recent_Articles;
