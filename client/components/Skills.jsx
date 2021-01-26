import React, { useState } from 'react';
import styles from '../src/styles.module.scss';
import Reveal from 'react-reveal'
import Fade from 'react-reveal/Fade';







const Skills = function(props) {






  return (

    <div className={styles.skills} id="skills">
      <div className={styles.left}>

            <div className={styles.skillGrid}>
              <Fade distance="5vh" delay={500} bottom>
                <div className={styles.photoGrid}></div>
              </Fade>
              <Fade distance="5vh" delay={600} bottom>
                <div className={styles.photoGrid}></div>
              </Fade>
              <Fade distance="5vh" delay={700} bottom>
                <div className={styles.photoGrid}></div>
              </Fade>
              <Fade distance="5vh" delay={800} bottom>
                <div className={styles.photoGrid}></div>
              </Fade>
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