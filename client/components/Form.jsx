import React from 'react';
import styles from '../src/styles.module.scss';
import Fade from 'react-reveal/Fade';
import airplane from '../src/icons/Airplane.png';
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FiDribbble } from "react-icons/fi";





const Form = (props) => {

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.form}>
        {props.showForm ? <form onSubmit={props.handleSubmit} className={styles.contactForm}>
          <input required onChange={props.handleChange} className={styles.small} type="input" name="name" placeholder="Your Name"></input>
          <input required onChange={props.handleChange} className={styles.small} type="email" name="email" placeholder="Your email">
          </input>
          <input required onChange={props.handleChange} className={styles.message} type="text" name="message" placeholder="Let’s chat! What can I do for you?"></input>
          <input className={styles.submit} type="submit" value="SEND"></input>
        </form> :
          <div className={styles.popup}>
            <Fade distance="3vh" delay={500} bottom>
              <img alt="plane" src={airplane}></img>
            </Fade>
            <h1>THANKS A BUNCH!</h1>
            <h3>talk to you soon!</h3>
          </div>
          }




      </div>
      <div className={styles.workTogether}>

        <img alt="backgroundimage" src="https://micaelaswebsite.s3-us-west-2.amazonaws.com/000010.jpg"></img>
        <div className={styles.fade}></div>
        <Fade distance="5vh" delay={500} bottom>
          <h1>WANT TO WORK TOGETHER? BECAUSE I DO!</h1>
        </Fade>
        <Fade distance="5vh" delay={550} bottom>
          <h4>hello@micaelarobinson.com</h4>
        </Fade>
        <div className={styles.social}>
          <Fade distance="5vh" delay={700} bottom>
            <a href="https://www.instagram.com/yarn.classification/"><FaInstagram size="35px" color="white" /></a>
          </Fade>
          <Fade distance="5vh" delay={800} bottom>
          <a href="https://www.linkedin.com/in/micaela-robinson-duran-a6b92b1bb/"><FaLinkedin size="35px" color="white" /></a>
          </Fade>
          <Fade distance="5vh" delay={900} bottom>
          <a href="https://dribbble.com/micaela6"><FiDribbble size="35px" color="white" /></a>
          </Fade>
        </div>

      </div>

    </div>
  )
}

export default Form;