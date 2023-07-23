import React, { useState } from "react";
import styles from '../../assets/styles/ui/Card.module.css';

const Card = ({
  children,
  height,
  width
}) => {
  
  return (
    <div className={styles.card} style={{height,width}}>
          {children}
    </div>
  );
};

export default Card;
