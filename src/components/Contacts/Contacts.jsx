import React from 'react';
import styles from './Contacts.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FormsControls';
import { required, maxLengthCreator, email } from '../utils/validator/validators';
import Fade from 'react-reveal/Fade';

let maxLength300 = maxLengthCreator(300);
let maxLength30 = maxLengthCreator(30);


const Contacts = (props) => {

  let sendMessage = () => {
    console.log("123");
  }
  return (
    <Fade duration={1000}>
      <div className={styles.contactsBlock}>
        <div className={styles.pageTitle}>Contacts</div>
        <div className={styles.pageText}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr amet </div>
        <div className={styles.innerBlock}>
          <div className={styles.authorContact}>
            <div class={styles.address}>
              <div class={styles.address__title}>Address</div>
              <div class={styles.address__text}>
                312, 7th Ave, New York<br />
                NY 101200, United States of America</div>
            </div>
            <div class={styles.hotline}>
              <div class={styles.hotline__title}>Hotline</div>
              <div class={styles.hotline__text}>
                +65 0052 300, +65 88251 210<br />
                +88 01723 511 340</div>
            </div>
            <div class={styles.email}>
              <div class={styles.email__title}>Email</div>
              <div class={styles.email__text}>
                shapedtheme@gmail.com<br />
                khalilkode@gmail.com</div>
            </div>

          </div>
          <AddMessageFormRedux onSubmit={sendMessage} />
        </div>
      </div>
    </Fade>
  );
}

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.contactInner}>
        <Field component={Textarea} name="name" placeholder="YOUR NAME"
          validate={[required, maxLength30]} className={styles.formControl} />
        <Field component={Textarea} name="e-mail" placeholder="YOUR E-MAIL"
          validate={[required, maxLength30, email]} className={styles.formControl} />
      </div>

      <div className={styles.contactInner}>
        <Field component={Textarea} name="subject" placeholder="YOUR SUBJECT"
          validate={[required, maxLength30]} className={styles.formControl} />
        <Field component={Textarea} name="companyName" placeholder="COMPANY NAME"
          validate={maxLength30} className={styles.formControl} />
      </div>
      <Field component={Textarea} name="message" placeholder="WRITE YOUR MESSAGE"
        validate={[required, maxLength300]} className={styles.textField} />

      <div className={styles.contactInner}>
        <button className={styles.add__btn} >Send Message</button>
        <div className={styles.textReply}>
          <span className={styles.star}>*</span>
          <span className={styles.text}>We’ll contact you as as possible. We don’t reply on Monday.</span>
        </div>
      </div>
    </form>
  )
}

const AddMessageFormRedux = reduxForm({ form: "addMessageForm" })(AddMessageForm);



export default Contacts;