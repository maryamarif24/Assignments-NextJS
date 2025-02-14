import Image from "next/image";
import styles from "./page.module.css";
import link from "next/link";


export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.navbar}>

<nav className={styles.nav}>

    <div className={styles.header}>  
        <div className={styles.name}>
            <h1 className={styles.h1}>Maryam Arif</h1>
            <h3 className={styles.h3}>Web Developer | Software Developer</h3>
        </div>

        <div className={styles.navli}>
            <ul className={styles.links_container}>
                <li className={styles.a}>
                    <a href="/" >📍</a>
                </li>
                <li className={styles.a}>
                    <a href="/About">About</a>
                </li>
                <li className={styles.a}>
                    <a href="/Services">Services</a>
                </li>
                <li className={styles.a}>
                    <a href="/Education">Education</a>
                </li>
            </ul>
        </div>
    </div>

</nav>

</div>
    </div>
  );
}
