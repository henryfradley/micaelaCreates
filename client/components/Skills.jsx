import React, { useState } from 'react';
import styles from '../src/styles.module.scss';
// import Reveal from 'react-reveal'
import Fade from 'react-reveal/Fade';
import Icon1 from '../src/icons/1.png';
import Icon2 from '../src/icons/2.png';
import Icon3 from '../src/icons/3.png';
import Icon4 from '../src/icons/4.png';







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
          <Fade distance="5vh" delay={500} bottom>
            <h1>WHAT I'M GOOD AT</h1>
          </Fade>

          <div className={styles.iconGrid}>
          <Fade distance="5vh" delay={550} bottom>
            <div className={styles.icon}>
              <div className={styles.iconLeft}>
                <img src={Icon1} alt="icon1"></img>
              </div>
              <div className={styles.iconRight}>
              <p>CONCEPT DRIVEN BRANDING</p>
              </div>
            </div>
            </Fade>
            <Fade distance="5vh" delay={600} bottom>
            <div className={styles.icon}>
            <div className={styles.iconLeft}>
                <img src={Icon2} alt="icon1"></img>
              </div>
              <div className={styles.iconRight}>
              <p>ILLUSTRATION</p>
              </div>
            </div>
            </Fade>
            <Fade distance="5vh" delay={650} bottom>
            <div className={styles.icon}>
            <div className={styles.iconLeft}>
                <img src={Icon3} alt="icon1"></img>
              </div>
              <div className={styles.iconRight}>
              <p>FRONT END WEB DESIGN</p>
              </div>
            </div>
            </Fade>
            <Fade distance="5vh" delay={700} bottom>
            <div className={styles.icon}>
              <div className={styles.iconLeft}>
                <img src={Icon4} alt="icon1"></img>
              </div>
              <div className={styles.iconRight}>
              <p>CREATIVE PROBLEM SOLVING</p>
              </div>
            </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Skills;