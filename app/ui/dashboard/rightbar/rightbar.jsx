import Image from "next/image"
import styles from "./rightbar.module.css"
import { MdPlayCircleFilled } from "react-icons/md"
const Rightbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.bgContainer}>
          <Image src="/astronaut.png" alt="" fill className={styles.image} />
        </div>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>How to use the new version of dashboard?</h3>
          <p className={styles.desc}>Takes 4 minutes to learn</p>
          <p className={styles.desc}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolor dolore sequi maiores magnam incidunt.</p>
          <button className={styles.button}><MdPlayCircleFilled/> Watch</button>
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.texts}>
          <span className={styles.notification}>Available Now</span>
          <h3 className={styles.title}>How to use the new version of dashboard?</h3>
          <p>Takes 4 minutes to learn</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed dolor dolore sequi maiores magnam incidunt.</p>
          <button className={styles.button}><MdPlayCircleFilled/> Watch</button>
        </div>
      </div>
    </div>
  )
}

export default Rightbar