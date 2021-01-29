import React, { useState } from 'react';
import styles from '../src/styles.module.scss';
import Fade from 'react-reveal/Fade';
import {CSSTransition} from 'react-transition-group';

const Carousel = function(props) {
  const [index, setIndex] = useState(0);
  const link = 'https://d2k5lcv0ndozn2.cloudfront.net/';
  const images = props.project.images;

  const imageList = images.map(image => {
    return <img className={styles.carouselImage} src={`${link}${image}`}></img>
  })

  let currentImage = imageList[index]



  const types = props.project.types;


  const typeList = types.map(type => {
    return <div key={types.indexOf(type)} className={styles.type}><h5>{type}</h5></div>
  })



  return (
    <div className={styles.carousel}>
      <div className={styles.project}>
        <Fade distance="5vh" delay={500} bottom>
          <h3>{props.project.name}</h3>
        </Fade>
        <Fade distance="5vh" delay={550} bottom>
          <div className={styles.projectInfo}>{props.project.mainText}</div>
        </Fade>
        <Fade distance="5vh" delay={600} bottom>
          <div className={styles.projectInfo}>
          {props.project.secondaryText}
          </div>
        </Fade>
        <div className={styles.projectTypes}>
        <Fade distance="5vh" delay={600} bottom>
         {typeList}
        </Fade>
        </div>
      </div>
      <div>
        <Fade distance="5vh" delay={500} bottom>
          <div className={styles.image}>
          {currentImage}
          </div>
        </Fade>
          <li className={styles.imageNums}>
          <Fade distance="5vh" delay={500} bottom>
            <ul onClick={() =>
              setIndex(0)}
              className={styles.num}>01<div className={styles.slider}></div></ul>
          </Fade>
          <Fade distance="5vh" delay={600} bottom>
            <ul onClick={() =>
              setIndex(1)}className={styles.num}>02<div className={styles.slider}></div></ul>
          </Fade>
          <Fade distance="5vh" delay={700} bottom>
            <ul onClick={() =>
              setIndex(2)} className={styles.num}>03<div className={styles.slider}></div></ul>
          </Fade>
          <Fade distance="5vh" delay={800} bottom>
            <ul onClick={() =>
              setIndex(3)} className={styles.num}>04<div className={styles.slider}></div></ul>
          </Fade>
          </li>

      </div>
    </div>

  )
}

export default Carousel;