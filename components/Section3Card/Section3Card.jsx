import "./Section3Card.css";

const Section3Card = ({ card, darkMode }) => {
  return (
    <div className={darkMode ? "section3-card-dark" : "section3-card"}>
      <h3 className="section3-card-title">{card.card_title}</h3>
      {card.data ? (
        <>
          {card.data_type === "text" && (
            <div className="section3-card-content">{card.data_value}</div>
          )}
          {card.data_type === "image" && (
            <div className="section3-card-image">
              <img src={card.data_value} alt="Card" />
            </div>
          )}
        </>
      ) : (
        <p style={{ paddingBottom: "10px" }}>{card.note}</p>
      )}
      {card.button && <button className="button">{card.button_name}</button>}
      {card.link && <a href={card.redirect}>{card.link_name}</a>}
    </div>
  );
};

export default Section3Card;
