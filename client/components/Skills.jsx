import React from 'react';
import styles from '../src/styles.module.scss';



const Skills = function() {


  return (

    <div className={styles.skills}>
      <div className={styles.left}>
        <div className={styles.skillGrid}>
          <div className={styles.photoGrid}></div>
          <div className={styles.photoGrid}></div>
          <div className={styles.photoGrid}></div>
          <div className={styles.photoGrid}></div>
        </div>

      </div>
      <div className={styles.right}>
        <div className={styles.goodAt}>
          <h1>WHAT I'M GOOD AT</h1>
          <div className={styles.iconGrid}>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
            <div className={styles.icon}></div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Skills;