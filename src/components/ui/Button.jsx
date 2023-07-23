import React, { useState } from "react";
import styles from '../../assets/styles/ui/Button.module.css';

const Textinput = ({
  text,
  onClick,
  bgColor,
  rounded
}) => {
  
  return (
          <div className={styles.container}>
          <button
            className={styles.button}
            onClick={onClick}
          >
            {text}
          </button>
          </div>
  );
};

export default Textinput;
