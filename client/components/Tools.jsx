import React from 'react';
import styles from '../src/styles.module.scss';
import Fade from 'react-reveal/Fade';

const Tools = () => {



  return (
    <div className={styles.tools}>

        <div className={styles.myTools}>
        <Fade distance="5vh" delay={500} bottom>
          <p>MY TOOLS</p>
        </Fade>
        </div>

      <div className={styles.tech}></div>

    </div>
  )
}

export default Tools;