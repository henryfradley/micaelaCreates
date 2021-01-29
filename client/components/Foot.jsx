import React from 'react';
import styles from '../src/styles.module.scss';

const Foot = (props) => {


  return (
    <div className={styles.footer}>
      <h2>MICAELA ROBINSON</h2>
       <nav className={styles.footNav}>
        <ul>
          <li><span onClick={props.scroll} name="main" className={styles.navText}>HOME</span></li>
          <li><span onClick={props.scroll} name="projects" className={styles.navText}>WORK</span></li>
          <li><span onClick={props.scroll} name="about" className={styles.navText}>ABOUT</span></li>
          <li><span onClick={props.scroll} name="contact" className={styles.navText}>CONTACT</span></li>
        </ul>
      </nav>
    </div>


  )
}

export default Foot;