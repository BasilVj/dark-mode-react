"use client";
import React, { useState } from "react";
import "./Section3.css";
import { section } from "@/constants";
import { CardArray } from "@/constants";
import Section3Card from "../Section3Card/Section3Card";
import { motion } from "framer-motion";

const Section3 = ({ darkMode }) => {
  const sectionThreeCards = CardArray.filter(
    (card) => card.parent_sec === "section3"
  );

  const [cardsToShow, setCardsToShow] = useState(3); // Initial number of cards to show

  const showMoreCards = () => {
    setCardsToShow(sectionThreeCards.length); // Show all the cards
  };

  const showLessCards = () => {
    setCardsToShow(3); // Reset back to initial number of cards
  };

  return (
    <div className={darkMode ? "app__section3-dark" : "app__section3"}>
      <h1
        className={darkMode ? "section3__headtext-dark" : "section3__headtext"}
      >
        {section[2].title}
      </h1>
      <motion.div 
      whileInView={{ x: [-200, 0], opacity: [0, 1] }}
      transition={{ duration: .5 }}
      className="cards-container">
        {sectionThreeCards.slice(0, cardsToShow).map((card) => (
          <Section3Card key={card.id} card={card} darkMode={darkMode}/>
        ))}
      </motion.div>
      {cardsToShow < sectionThreeCards.length ? (
        <button className="button" onClick={showMoreCards}>Show More</button>
      ) : (
        <button className="button" onClick={showLessCards}>Show Less</button>
      )}
    </div>
  );
};

export default Section3;
