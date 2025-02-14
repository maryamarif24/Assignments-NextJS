import Image from "next/image";
import styles from "./education.module.css";
import link from "next/link";


function EducationPage() {
      return (
        <div>
            <div>
                <ul>
                    <li>
                        <a href="/">⬅ Back to Home</a>
                    </li>
                </ul>
            </div>
            <h1 className={styles.h1}>Education Page</h1>
            <p className={styles.p}>Aced O-Levels with A* grade. Currently Enrolled in A-Levels.</p>
        </div>
      )
    }
    
    export default EducationPage;