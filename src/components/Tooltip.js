import React from 'react';
import styles from '../assets/styles/Home.module.css';

const Tooltip = ({ text, children }) => {
  return (
    <div className={styles.tooltip}>
      <span className={styles.question_mark}>&#9432;</span>
      {children}
      <span className={styles.tooltip_text}>{text}</span>
    </div>
  );
};

export default Tooltip;
