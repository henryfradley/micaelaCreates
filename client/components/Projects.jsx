import React from 'react';
import styles from '../src/styles.module.scss';
import Carousel from './Carousel.jsx';
import Fade from 'react-reveal/Fade';

const Projects = function(props) {

  return (
    <div className={styles.projects} id="projects">
      <Fade distance="5vh" delay={500} bottom>
        <h1>FEATURED PROJECTS</h1>
      </Fade>
      <Carousel project={props.data.aloha} />
    </div>
  )
}

export default Projects;