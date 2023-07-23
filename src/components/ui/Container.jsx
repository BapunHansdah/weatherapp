import React, { useState } from "react";
import styles from '../../assets/styles/ui/Container.module.css';

const Container = ({
  children
}) => {
  
  return (
    <div className={styles.container}>
          {children}
    </div>
  );
};

export default Container;
