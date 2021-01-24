import React from 'react';
import styles from '../src/styles.module.scss';

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
        </form> : <h2 className={styles.thanks}>Thanks for messaging! Will respond as soon as I can bah!</h2>}


      </div>
      <div className={styles.workTogether}>

      </div>

    </div>
  )
}

export default Form;