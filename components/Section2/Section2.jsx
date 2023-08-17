"use client";
import React, { useState } from "react";
import "./Section2.css";
import { section } from "@/constants";
import { CardArray } from "@/constants";
import Section2Card from "../Section2Card/Section2Card";
import { motion } from "framer-motion";

const Section2 = ({ darkMode }) => {
  const sectionTwoCards = CardArray.filter(
    (card) => card.parent_sec === "section2"
  );

  const initialCardsToShow = 3; // Initial number of cards to show
  const [cardsToShow, setCardsToShow] = useState(initialCardsToShow);

  const showMoreCards = () => {
    setCardsToShow(cardsToShow + 3); // Increase the number of cards to show by 3
  };

  const showLessCards = () => {
    setCardsToShow(initialCardsToShow); // Reset back to initial number of cards
  };

  return (
    <div className={darkMode ? "app__section2-dark " : "app__section2"}>
      <h1
        className={darkMode ? "section2__headtext-dark" : "section2__headtext"}
      >
        {section[1].title}
      </h1>
      <div className="cards-container2">
        {sectionTwoCards.slice(0, cardsToShow).map((card) => (
          <Section2Card key={card.id} card={card} darkMode={darkMode} />
        ))}
      </div>
      {cardsToShow < sectionTwoCards.length ? (
        <>
          <button className="button" onClick={showMoreCards}>
            Show More
          </button>
        </>
      ) : (
        <button className="button" onClick={showLessCards}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default Section2;
