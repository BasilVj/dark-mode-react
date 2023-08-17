import React from "react";
import "./Card.css"; // Import the associated CSS file

const Card = ({ card, darkMode }) => {
  return (
    <div className={darkMode ? "card-dark" : "card-light"}>
      <h3 className={darkMode ? "card-title-dark" : "card-title"}>
        {card.card_title}
      </h3>
      {card.data ? (
        <>
          {card.data_type === "progress" && (
            <div
              className={darkMode ? "progress-bar" : "progress-bar-light "}
              style={{ width: `${card.data_value}%` }}
            ></div>
          )}
          {card.data_type === "number" && (
            <p className="value">Value: {card.data_value}</p>
          )}
          {card.data_type === "text" && <p>{card.data_value}</p>}
          {card.data_type === "tags" && (
            <ul>
              {card.data_value.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
          )}
          {card.data_type === "image" && (
            <img src={card.data_value} alt="Card" />
          )}
        </>
      ) : (
        <p>No data available</p>
      )}
      {card.button && <button className="button">{card.button_name}</button>}
      {card.link && <a href={card.redirect}>{card.link_name}</a>}
    </div>
  );
};

export default Card;
