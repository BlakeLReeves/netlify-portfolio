import styles from './Intro.module.css';

const Intro = () => (
  <div className={styles.container} id='intro'>
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      className={styles.imageContainer}
    >
      <img
        className={styles.image}
        src='/portfolio-image.png'
        alt='Blake Reeves'
      />
    </div>
    <h1
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      data-aos-delay='100'
      className={styles.name}
    >
      Blake Reeves
    </h1>
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      data-aos-delay='200'
      className={styles.jobTitleWrapper}
    >
      <img src='/computer.svg' alt='computer' />
      <span className={styles.jobTitle}>Full Stack Developer</span>
    </div>
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      data-aos-delay='300'
      className={styles.locationWrapper}
    >
      <img src='/map-pin.svg' alt='pin' />
      <span className={styles.location}>Nashville, TN</span>
    </div>
    <div
      data-aos='fade-up'
      data-aos-easing='ease-in-out'
      data-aos-delay='400'
      className={styles.description}
    >
      Hi, my name is Blake Reeves. I am a full stack software developer based
      out of the Nashville area. I love to work with React and Node.js. In my
      spare time, I enjoy reading science fiction/fantasy books, spending time
      with my family, going outdoors, and developing personal projects.
    </div>
  </div>
);

export default Intro;
