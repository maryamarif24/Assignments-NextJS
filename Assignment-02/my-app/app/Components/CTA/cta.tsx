import Image from "next/image";
import styles from "./cta.module.css";
import link from "next/link";


export default function Cta () {
    return (
        <section className={styles.cta}>
            <h2>Contact Us</h2>
                <form id="contact-form" className={styles.container}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" placeholder="Name:"/>
                    <label htmlFor="email">Email:</label>
                    <input type="text" placeholder="Email:"/>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" placeholder="Message us" id=""></textarea>
                    <button type="submit">Send Message</button>
                </form>
        </section>
    )
};