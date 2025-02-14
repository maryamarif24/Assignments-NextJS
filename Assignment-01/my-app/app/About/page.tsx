import Image from "next/image";
import styles from "./about.module.css";
import link from "next/link";



function AboutPage() {
      return (
        <div>
            <div>
                <ul>
                    <li>
                        <a href="/">⬅ Back to Home</a>
                    </li>
                </ul>
            </div>
            <h1 className={styles.h1}>About Page</h1>
            <p className={styles.p}>Hey! This is Maryam Arif. Student of Computer Science, And Currently enrolled in GIAIC.</p>
        </div>
      )}
    
    export default AboutPage;