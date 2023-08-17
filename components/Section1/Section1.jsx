import "./Section1.css";
import { section } from "@/constants";
import { CardArray } from "@/constants";
import Card from "../Card/Card";
import { motion } from "framer-motion";

const Section1 = ({ darkMode }) => {
  const sectionOneCards = CardArray.filter(
    (card) => card.parent_sec === "section1"
  );

  return (
    <div className={darkMode ? "app__section1-dark" : "app__section1"}>
      <h1 className={darkMode ? "section__headtext-dark" : "section__headtext"}>
        {section[0].title}
      </h1>
      <motion.div
        whileInView={{ x: [-200, 0], opacity: [0, 1] }}
        transition={{ duration: .5 }}
        className="cards-container"
      >
        {sectionOneCards.map((card) => (
          <Card key={card.id} card={card} darkMode={darkMode} />
        ))}
      </motion.div>
    </div>
  );
};

export default Section1;
