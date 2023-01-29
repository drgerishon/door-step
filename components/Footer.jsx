import styles from '../styles/footer.module.css';
import Image from 'next/image';
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" alt="" layout="fill" objectFit="cover"></Image>
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.motto}>
            Oh Yes. The pizza based is of high quality, well baked, natural and
            no presevative and additive
          </h1>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            2463 R. GERISHON SOLUTION #304.
            <br />
            Nairobi, 19002
            <br />
            (254) 2356
          </p>
          <p className={styles.text}>
            2463 R. GERISHON SOLUTION #304.
            <br />
            Nairobi, 19002
            <br />
            (254) 2356
          </p>
          <p className={styles.text}>
            2463 R. Ger #304.
            <br />
            Nairobi, 19002
            <br />
            (254) 2356
          </p>
          <p className={styles.text}>
            2463 R. Ger #304.
            <br />
            Nairobi, 19002
            <br />
            (254) 2356
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}> FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
            MONDAY - SUTURDAY
            <br />
            12:34 - 24:00
          </p>
          <p className={styles.text}>
            SUNDAY TO MIDDAY
            <br />
            24-7
          </p>
          <p className={styles.text}>
            SATURDAY
            <br />
            WHOLE DAY
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
