import Head from 'next/head'
import styles from '../styles/Support.module.css'

export default function support() {
  return (

    <>
    <Head><title>Support</title></Head>
    
    <div className={styles.content}>
      <h1 className={styles.heading}>Support</h1>
      <div className={styles.search}>

        <input className={styles.text} type="text" id="search" name="search" placeholder="Describe your problem" />
        <i className={`fa fa-search ${styles.icons}`} ></i>
      </div>
      <p className={styles.support}>Frequently asked questions:</p>
      <div className={styles.box}>
        <div className={styles.quest}>
          <h5 className={styles.headquest}>1. Lorem ipsum dolor sit.</h5>
          <p className={styles.pquest}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi......</p>
          <hr />
        </div>
        <div className={styles.quest}>
          <h5 className={styles.headquest}>2. Lorem ipsum dolor sit.</h5>
          <p className={styles.pquest}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi......</p>
          <hr />
        </div>
        <div className={styles.quest}>
          <h5 className={styles.headquest}>3. Lorem ipsum dolor sit.</h5>
          <p className={styles.pquest}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi......</p>
          <hr />
        </div>
        <div className={styles.quest}>
          <h5 className={styles.headquest}>4. Lorem ipsum dolor sit.</h5>
          <p className={styles.pquest}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi......</p>
          <hr />
        </div>
        <div className={styles.quest}>
          <h5 className={styles.headquest}>5. Lorem ipsum dolor sit.</h5>
          <p className={styles.pquest}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi......</p>
          <hr />
        </div>
        <div className={styles.quest}>
          <h5 className={styles.headquest}>6. Lorem ipsum dolor sit.</h5>
          <p className={styles.pquest}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi......</p>
          <hr />
        </div>
        <div className={styles.quest}>
          <h5 className={styles.headquest}>7. Lorem ipsum dolor sit.</h5>
          <p className={styles.pquest}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, animi......</p>
          <hr />
        </div>
      </div>

    </div>
    </>
  )
}
