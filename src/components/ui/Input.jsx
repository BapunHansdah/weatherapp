import React, { useState } from "react";
import styles from '../../assets/styles/ui/Input.module.css';

const Textinput = ({
  type,
  placeholder = "Add placeholder",
  name,
  value,
  onChange,
  style,
  error
}) => {
  
  return (
          <div>
          <input
            type="text"
            className={styles.input}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
          />
          {error && 
           <div 
               className={styles.error}>
               {error+" ! "+ "Please try again."}
           </div>}
          </div>
  );
};

export default Textinput;
