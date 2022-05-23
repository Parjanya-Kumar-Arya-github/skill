import Head from 'next/head'
import styles from '../styles/Home.module.css'
import profile from '../public/profile.png'
export default function Home() {
  return (
    <>
		   <Head><title>About</title></Head>
				<div className={styles.content}>
					<div className={styles.profile}></div>
                    <img src={profile.src} className={styles.profile}></img>
					<h1 className={styles.heading}>About me</h1>
					<p className={styles.aboutp}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit dolor est illum minima error molestiae doloremque, commodi, beatae, vel repellat odio? Necessitatibus, facere sunt. Recusandae doloremque obcaecati quaerat amet similique. </p>
					
				</div>
		</>
  )
}
