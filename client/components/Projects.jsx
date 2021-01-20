import React from 'react';
import styles from '../src/styles.module.scss';
import Carousel from './Carousel.jsx';

const Projects = function(props) {

  return (
    <div className={styles.projects}>
      <h1>FEATURED PROJECTS</h1>
      <Carousel project={props.data.aloha} />
    </div>
  )
}

export default Projects;