import React from 'react';
import styles from '../src/styles.module.scss';
import Fade from 'react-reveal/Fade';


const About = () => {

  return (
    <div className={styles.aboutMe} id="about">
      <div className={styles.aboutGrid}>
        <div className={styles.profileImage}>
          <img alt="profile" src="https://d2k5lcv0ndozn2.cloudfront.net/_DSC6406.jpg"></img>

        </div>
        <div className={styles.aboutDetails}>
        <Fade distance="5vh" delay={500} bottom>
          <h1>ABOUT ME</h1>
        </Fade>
        <Fade distance="5vh" delay={550} bottom>
          <p>Hi, thanks for stopping by! My name is Micaela and I’m a graphic designer from Mill Valley, CA. Having grown up near a big metropolitan city, I was constantly surrounded by art from a variety of cultures. My love for art inspired my profession as a graphic designer. I graduated from UH Manoa with a BFA in Graphic Design in the spring of 2019.
          </p>
        </Fade>
        <Fade distance="5vh" delay={600} bottom>
          <p>Since then, I have been on the move expanding my portfolio, acquiring freelance projects, and working for the digital media agency, Ellemsee Media, in Downtown Honolulu.
          </p>
        </Fade>
        <Fade distance="5vh" delay={650} bottom>
          <p>Have a project in mind you want to discuss? Let’s do it! Send me a message below to get started.
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