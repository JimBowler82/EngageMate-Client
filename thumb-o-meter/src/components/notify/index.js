import React, { useState, useEffect } from "react";
import styles from "./notify.module.css";
import useSocketContext from "../../context/socketContext";
const HandNotify = () => {
  const [hands, setHands] = useState([]);
  const context = useSocketContext();
  const socket = context[0];

  useEffect(() => {
    const handler = ({ handRaiseData }) => {
      console.log(handRaiseData);
      handleSetHands(handRaiseData);
    };

    const lowerHandler = ({ handRaiseData }) => {
      handleSetHands(handRaiseData);
    };
    socket.on("handRaiseInfo", handler);
    socket.on("lowerHandRaiseInfo", lowerHandler);

    return () => {
      socket.off("handRaiseInfo");
      socket.off("lowerHandRaiseInfo");
    };
  }, []);

  function handleSetHands(data) {
    setHands(data);
  }

  console.log(hands);
  return (
    <div>
      <p className={hands.length > 0 ? styles.notify : styles.noNotify}>
        {hands.length}
      </p>
    </div>
  );
};

export default HandNotify;