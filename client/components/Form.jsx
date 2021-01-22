import React from 'react';
import styles from '../src/styles.module.scss';

const Form = (props) => {

  return (
    <div className={styles.contact}>
      <div className={styles.form}>
        <form onSubmit={props.handleSubmit} className={styles.contactForm}>
          <input onChange={props.handleChange} className={styles.small} type="input" name="name" placeholder="Your Name"></input>
          <input onChange={props.handleChange} className={styles.small} type="email" name="email" placeholder="Your email">
          </input>
          <input onChange={props.handleChange} className={styles.message} type="text" name="message" placeholder="Let’s chat! What can I do for you?"></input>
          <input className={styles.submit} type="submit" value="SEND"></input>
        </form>

      </div>
      <div className={styles.workTogether}>

      </div>

    </div>
  )
}

export default Form;