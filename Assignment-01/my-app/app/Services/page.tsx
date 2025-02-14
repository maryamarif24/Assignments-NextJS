import Image from "next/image";
import styles from "./services.module.css";
import link from "next/link";


function ServicePage() {
      return (
        <div>
            <div>
                <ul>
                    <li>
                        <a href="/">⬅ Back to Home</a>
                    </li>
                </ul>
            </div>
            <h1 className={styles.h1}>Service Page</h1>
            <p className={styles.p}>A Frontend Web Developer with wholesome skills. </p>
        </div>
      )}
    
export default ServicePage;