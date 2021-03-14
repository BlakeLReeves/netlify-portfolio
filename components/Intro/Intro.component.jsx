import styles from './Intro.module.css';

const Intro = () => (
  <div className={styles.container} id='intro'>
    <div className={styles.imageContainer}>
      <img
        className={styles.image}
        src='/portfolio-image.png'
        alt='Blake Reeves'
      />
    </div>
    <h1 className={styles.name}>Blake Reeves</h1>
    <div className={styles.jobTitleWrapper}>
      <img src='/computer.svg' alt='computer' />
      <span className={styles.jobTitle}>Full Stack Developer</span>
    </div>
    <div className={styles.locationWrapper}>
      <img src='/map-pin.svg' alt='pin' />
      <span className={styles.location}>Nashville, TN</span>
    </div>
    <div className={styles.description}>
      Hi, my name is Blake Reeves. I am a full stack software developer based
      out of the Nashville area. I love to work with React and Node.js. In my
      spare time, I enjoy reading science fiction/fantasy books, spending time
      with my family, going outdoors, and developing personal projects.
    </div>
  </div>
);

export default Intro;
