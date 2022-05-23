import Image from 'next/image'
import styles from '../styles/Home.module.css'
import stars from '../public/stars.png'
import moon from '../public/moon.png'
import wave1 from '../public/wave.png'
import wave2 from '../public/wave2.png'
import astro from '../public/astro.png'
import Link from "next/link";
import { useRouter } from 'next/router'
export default function Layout({children}) {
    const { asPath } = useRouter();  
  return (
    <>
    <link rel="stylesheet"
        href=
        "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <div className={styles.moon}>
      <Image src={moon} layout="fill"></Image>
    </div>
    <div className={styles.container}>
      
    <div className={styles.phone}>
					<Link href="/contact"><input className={`${styles.input} ${styles.s1}`} type="radio" name="s" id="s1" checked={asPath==='/contact'?"checked":""}/></Link>
					<Link href="/"><input className={`${styles.input} ${styles.s2}`} type="radio" name="s" id="s2" checked={asPath==='/'?"checked":""}/></Link>
					<Link href="/support"><input className={`${styles.input} ${styles.s3}`} type="radio" name="s" id="s3" checked={asPath==='/support'?"checked":""}/></Link>
					<label className={styles.label} htmlFor="s1"><i className={`${styles.img} fa fa-phone fa-2x`}></i></label>
					<label className={styles.label} htmlFor="s2"><i className={`${styles.img} fa fa-user fa-2x`}></i></label>
					<label className={styles.label} htmlFor="s3"><i className={`${styles.img} fa fa-question fa-2x`}></i></label>
					<div className={styles.circle}></div>
					<div className={styles.phone_content}>
						<div className={styles.phone_bottom}>
							<span className={styles.indicator}></span>
						</div>
					</div>
				</div>

      <Image src={stars} layout="fill" objectFit='cover'></Image>
      <Image src={stars} layout="fill" objectFit='cover'></Image>
      <div className={styles.card}>
          {children}
      </div>
      <div className={styles.astro}>
      <Image src={astro} layout="fill"></Image>
    </div>
    </div>
    <div className={styles.wave}>
    <Image src={wave1} layout="fill" objectFit='contain'></Image>
    </div>
    <div className={styles.wave2}>
    <Image src={wave2} layout="fill" objectFit='contain'></Image>
    </div>
    </>
  )
}
