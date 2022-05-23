import styles from '../styles/Contact.module.css'
import Head  from 'next/head'
export default function contact() {
  return (
    <>
 
        <Head><title>Contact</title></Head>

<div className={styles.content}>
  <h1 className={styles.heading}>Contact Us</h1>
  <form>

    <input className={styles.text} type="text" id="fname" name="firstname" placeholder="Your name.." />

    <input className={styles.text} type="text" id="lname" name="lastname" placeholder="Your last name.." />

    <textarea className={styles.textarea} id="subject" name="subject" placeholder="Write something.."></textarea>

    <input className={styles.submit} type="submit" value="Submit" />

  </form>

</div>
        </>
  )
}

