import React, { useState } from "react";
import styles from '../../assets/styles/ui/Grid.module.css';

const Form = ({
  children,
  onSubmit
}) => {
  
  return (
     <form onSubmit={onSubmit}>
            {children}
      </form>
  );
};

export default Form;
