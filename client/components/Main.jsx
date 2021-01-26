import React from 'react';
import styles from '../src/styles.module.scss';
import illustration from '../src/illustration.png'



const Main = function(props) {



  return (


    <div className={styles.main} id="main">
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li><span onClick={props.scroll} name="main" className={styles.navText}>HOME</span></li>
          <li><span onClick={props.scroll} name="projects" className={styles.navText}>WORK</span></li>
          <li><span onClick={props.scroll} name="about" className={styles.navText}>ABOUT</span></li>
          <li><span onClick={props.scroll} name="contact" className={styles.navText}>CONTACT</span></li>
        </ul>
      </nav>
      <div className={styles.line}></div>
      <h1 className={styles.hi}>HI. I'M MICAELA,</h1>
      <h3 className={styles.info}>A GRAPHIC DESIGNER BASED IN HONOLULU, HI.</h3>
      <div className={styles.drawing}>
      <img src={illustration} alt="illustration" />

      </div>


    </div>
  )
}


export default Main;



