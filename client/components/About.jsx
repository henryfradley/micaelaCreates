import React from 'react';
import styles from '../src/styles.module.scss';


const About = () => {

  return (
    <div className={styles.aboutMe} id="about">
      <div className={styles.aboutGrid}>
        <div className={styles.profileImage}>
          <img alt="profile" src="https://micaelaswebsite.s3-us-west-2.amazonaws.com/_DSC6406.jpg"></img>

        </div>
        <div className={styles.aboutDetails}>
          <h1>ABOUT ME.</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className={styles.favorites}>
            <div className={styles.favBox}>
              <p>FAVORITE SNACK: SMARTFOOD POPCORN</p>
              <p>FAVORITE BOOK: READY PLAYER ONE</p>
              <p>FAVORITE PASTIME: LEARNING PIANO</p>
            </div>

          </div>

        </div>

      </div>

    </div>

  )

}

export default About;