import React, { useState } from "react";
import styles from '../../assets/styles/ui/Text.module.css';
import DefaultImage from '../../assets/icons/defaultImage.svg';


const Text = ({
 text = "text",
 textSize="15px",
 paragraphSize="10px",
 fontWeight="500",
 paragraph
}) => {
  
  return (
         <div className={styles.text}>
           <div>
             <span style={{fontSize : textSize,fontWeight}}>{text}</span>
             {paragraph ? <span style={{fontSize :paragraphSize}}>{paragraph}</span>:<></>}
           </div>
         </div>
  );
};

const TextWithHorizontalLine = ({
 text = "text"
}) => {
  
  return (
         <div className={styles.horizontal_lines}>
          <span className={styles.line}></span>
          <span className={styles.content}>{text}</span>
          <span className={styles.line}></span>
        </div>
  );
};


const TextWithIcon = ({
 text = "text",
 textSize="15px",
 paragraphSize="10px",
 icon = DefaultImage,
 iconSize="10px",
 paragraph,
 fontWeight="500",
 color,
 onClick
}) => {
  
  return (
         <div className={styles.icons}>
           <img onClick={onClick} src={icon} width={iconSize}/>
           <div>
             <span style={{fontSize : textSize,fontWeight,color}}>{text}</span>
             {paragraph ? <span style={{fontSize :paragraphSize}}>{paragraph}</span>:<></>}
           </div>
         </div>
  );
};


export {TextWithHorizontalLine,TextWithIcon,Text};
