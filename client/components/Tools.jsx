import React from 'react';
import styles from '../src/styles.module.scss';
import Fade from 'react-reveal/Fade';
import adobe from '../src/icons/Adobe.png';
import coffee from '../src/icons/Coffee.png';
import microsoft from '../src/icons/Microsoft.png';


const Tools = () => {



  return (
    <div className={styles.tools}>

        <div className={styles.myTools}>
        <Fade distance="5vh" delay={500} bottom>
          <p>MY TOOLS</p>
        </Fade>
        </div>

      <div className={styles.tech}>
        <div className={styles.techBox}>
          <div className={styles.adobe}>
          <Fade distance="5vh" delay={600} bottom>
            <img src={adobe} alt="adobe"></img>
          </Fade>
          </div>
          <div className={styles.coffee}>
          <Fade distance="5vh" delay={700} bottom>
            <img src={coffee} alt="adobe"></img>
          </Fade>
          </div>
          <div className={styles.microsoft}>
          <Fade distance="5vh" delay={800} bottom>
            <img src={microsoft} alt="adobe"></img>
          </Fade>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Tools;