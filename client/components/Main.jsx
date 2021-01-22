import React from 'react';
import styles from '../src/styles.module.scss';
import illustration from '../src/illustration.png';


const Main = function() {



  return (

    <div className={styles.main}>
      <nav className={styles.nav}>
        <ul className={styles.navLinks}>
          <li>HOME</li>
          <li>WORK</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div className={styles.line}></div>
      <h1 className={styles.hi}>HI. I'M MICAELA,</h1>
      <h3 className={styles.info}>A GRAPHIC DESIGNER BASED IN HONOLULU, HI.</h3>
      <img src={illustration} className={styles.drawing}/>

    </div>
  )
}


export default Main;