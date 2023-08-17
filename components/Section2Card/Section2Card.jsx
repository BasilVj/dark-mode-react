import React from "react";
import "./Section2Card.css";

const Section2Card = ({ card,darkMode }) => {
  return (
    <div className={darkMode ? "section2-card-dark" : "section2-card"}>
      <h3 className="section2-card-title">{card.card_title}</h3>
      {card.data ? (
        <>
          {card.data_type === "text" && (
            <div className="section2-card-content">{card.data_value}</div>
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

export default Section2Card;
