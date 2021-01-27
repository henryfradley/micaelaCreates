import React from 'react';
import styles from '../src/styles.module.scss';
import Fade from 'react-reveal/Fade';


const About = () => {

  return (
    <div className={styles.aboutMe} id="about">
      <div className={styles.aboutGrid}>
        <div className={styles.profileImage}>
          <img alt="profile" src="https://micaelaswebsite.s3-us-west-2.amazonaws.com/headshot.jpg"></img>

        </div>
        <div className={styles.aboutDetails}>
        <Fade distance="5vh" delay={500} bottom>
          <h1>ABOUT ME</h1>
        </Fade>
        <Fade distance="5vh" delay={550} bottom>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </Fade>
        <Fade distance="5vh" delay={600} bottom>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
        </Fade>

        <Fade distance="5vh" delay={650} bottom>

          <div className={styles.favorites}>
            <div className={styles.favBox}>
              <p>FAVORITE SNACK: KETTLE CORN</p>
              <p>FAVORITE BOOK: READY PLAYER ONE</p>
              <p>FAVORITE PASTIME: LEARNING PIANO</p>
            </div>

          </div>
        </Fade>

        </div>

      </div>

    </div>

  )

}

export default About;