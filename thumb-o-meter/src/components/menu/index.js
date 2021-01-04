import React from "react";
import { Button, Center, VStack } from "@chakra-ui/react";
import FeatureIcon from "../featureIcons";
import styles from "./menu.module.css";

import {
  FaQuestionCircle,
  FaMusic,
  FaHandPaper,
  FaThumbsUp,
} from "react-icons/fa";

const Menu = ({ role }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.players}>
          <section>
            {" "}
            <FeatureIcon
              alt="thumbometer"
              src="/thumb.png"
              link="/thumb"
              icon={FaThumbsUp}
              heading="Thumb-o-meter"
              subheading="Hows it going?"
            />
          </section>
          <section>
            {" "}
            <FeatureIcon
              alt="raisehand"
              src="/raisehand.png"
              link="/raisehand"
              icon={FaHandPaper}
              heading="Raise a Hand"
              subheading="Got a question?"
            />
          </section>
          <section>
            {" "}
            <FeatureIcon
              alt="livequiz"
              src="/quizzical.png"
              link="/quiz"
              icon={FaQuestionCircle}
              heading="Live Quiz"
              subheading="How much do you understand?"
            />
          </section>

          {role === "coach" && (
            <section>
              {" "}
              <FeatureIcon
                alt="djDeck"
                src="/music.png"
                link="/deck"
                icon={FaMusic}
                heading="DJ Deck"
                subheading="A little bit of music you say?"
              />
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;