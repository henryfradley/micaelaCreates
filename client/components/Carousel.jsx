import React, { useState } from 'react';
import styles from '../src/styles.module.scss';

const Carousel = function(props) {
  const [index, setIndex] = useState(0);

  const link = 'https://micaelaswebsite.s3-us-west-2.amazonaws.com/';

  const images = props.project.images;


  return (
    <div className={styles.carousel}>
      <div className={styles.project}>
        <h3>{props.project.name}</h3>
        <div className={styles.projectInfo}>{props.project.mainText}
        </div>
        <div className={styles.projectInfo}>
        {props.project.secondaryText}
        </div>
      </div>
      <div className={styles.images}>
        <div className={styles.image}>
          <img src={link + images[index]}/>
          {console.log('index', index)}
        </div>
          <li className={styles.imageNums}>
            <ul onClick={() =>
              setIndex(0)}
              className={styles.num}>01</ul>
            <ul onClick={() =>
              setIndex(1)}className={styles.num}>02</ul>
            <ul onClick={() =>
              setIndex(2)} className={styles.num}>03</ul>
            <ul onClick={() =>
              setIndex(3)} className={styles.num}>04</ul>
          </li>
      </div>
    </div>

  )
}

export default Carousel;