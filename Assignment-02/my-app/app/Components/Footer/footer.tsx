import Image from "next/image";
import styles from "./footer.module.css";
import link from "next/link";

export default function Footer () {
    return (
        <section className={styles.footer}>
            <div className={styles.logo}>
                <h1 className={styles.h1}>Maryam Arif</h1>
                <h3 className={styles.h3}>Web Developer | Software Developer</h3>
            </div>

            <div className={styles.text}>
                <p>Travel the world, on this holiday</p>
                <p>Email: support@travel.com</p>
                <p>Phone: +92 xxxxxxx, +92 xxxxxxx</p>
            </div>
            <p className={styles.copyrightline}>Made by Maryam Arif ❤️</p>

        </section>
    )
}