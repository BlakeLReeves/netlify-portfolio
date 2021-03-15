import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.container} id='contact'>
      <h1
        data-aos='fade-up'
        data-aos-easing='ease-in-out'
        className={styles.title}
      >
        Contact
      </h1>
      <p
        data-aos='fade-up'
        data-aos-easing='ease-in-out'
        data-aos-delay='100'
        className={styles.emailMe}
      >
        If you have a question or you have interest in my work, please send me
        an email at blake.reeves.dev@gmail.com. I will do my best to get back
        with you as soon as possibles. Thank you for taking the time to look at
        my website and projects.
      </p>
      <a
        data-aos='fade-up'
        data-aos-easing='ease-in-out'
        data-aos-delay='200'
        className={styles.emailLink}
        href='mailto:blake.reeves.dev@gmail.com'
        rel='noopener noreferrer'
        target='_blank'
      >
        Email Me
      </a>
    </div>
  );
};

export default Contact;
