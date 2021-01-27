import React from 'react';
import styles from '../src/styles.module.scss';
import { BsEnvelope } from "react-icons/bs"
import Fade from 'react-reveal/Fade';


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
        </form> : <BsEnvelope size="50vh"/>}


      </div>
      <div className={styles.workTogether}>
        <Fade distance="5vh" delay={500} bottom>
          <h1>WANT TO WORK TOGETHER? BECAUSE I DO!</h1>
        </Fade>
        <Fade distance="5vh" delay={550} bottom>
          <h4>hello@micaelarobinson.com</h4>
        </Fade>

      </div>

    </div>
  )
}

export default Form;