import React, { useState } from "react";
import styles from '../../assets/styles/ui/Grid.module.css';

const Grid = ({
  children
}) => {
  
  return (
     <div className={styles.grid2}>
            {children}
      </div>
  );
};

export default Grid;
