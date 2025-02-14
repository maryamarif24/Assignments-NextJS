import Image from "next/image";
import styles from "./hero.module.css";
import link from "next/link";

export default function HeroSection() {
    return (
        <section className={styles.hero}>
                <div className={styles.title}>
                <div className={styles.head1}>
                    <h1 className={styles.he1}>
                    First Website
                    </h1>
                    <p className={styles.p}>
                    Travel The World with us through Different perspectives! ENJOY 😉 !!
                    </p>
                </div>
                </div>

        </section>
    )
}
        