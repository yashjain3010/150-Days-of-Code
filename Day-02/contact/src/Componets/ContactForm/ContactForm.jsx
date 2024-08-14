import Button from '../Button/Button';
import styles from './ContactForm.module.css';
import {MdMessage} from 'react-icons/md';
import {FaPhoneAlt} from 'react-icons/fa';
import {MdOutlineEmail} from 'react-icons/md';


const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdOutlineEmail fontSize="24px" />}
        />
        <form action="">
          <div className={styles.form_controller}>
            <label htmlFor="">Name</label>
            <input type="text" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="">Email</label>
            <input type="text" />
          </div>
          <div className={styles.form_controller}>
            <label htmlFor="">Text</label>
            <textarea name="text" rows="8" />
          </div>
        </form>
        <div
          style={{
            display: "flex",
            justifyContent: "end",
          }}
        >
          <Button text="SUBMIT" />
        </div>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/contact.svg" alt="" />
      </div>
    </section>
  );
}

export default ContactForm