import { useState, useEffect, useRef } from 'react';

import styles from './NavRight.module.css';

const NavRight = () => {
  const openedClasses = `${styles.opened} ${styles.sections}`;
  const closedClasses = `${styles.closed} ${styles.sections}`;
  const firstClass = `${styles.first}`;
  const firstRotationClass = `${styles.firstRotated}`;
  const secondClass = `${styles.second}`;
  const secondRotationClass = `${styles.secondRotated}`;
  const thirdClass = `${styles.third}`;
  const thirdRotationClass = `${styles.thirdRotated}`;
  let wrapperRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [containerClasses, setContainerClasses] = useState(closedClasses);
  const [first, setFirst] = useState(firstClass);
  const [second, setSecond] = useState(secondClass);
  const [third, setThird] = useState(thirdClass);

  useEffect(() => {
    if (open) {
      setContainerClasses(openedClasses);
      setFirst(firstRotationClass);
      setSecond(secondRotationClass);
      setThird(thirdRotationClass);

      // Bind the event listener
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener('mousedown', handleClickOutside);
      };
    } else {
      setContainerClasses(closedClasses);
      setFirst(firstClass);
      setSecond(secondClass);
      setThird(thirdClass);
    }
  }, [open]);

  const handleClickOutside = (event) => {
    if (
      wrapperRef.current &&
      !wrapperRef.current.contains(event.target) &&
      !event.target.id.includes('NavRight')
    ) {
      setContainerClasses(closedClasses);
      setFirst(firstClass);
      setSecond(secondClass);
      setThird(thirdClass);
      setOpen(!open);
    }
  };

  const handleClickLink = () => {
    setContainerClasses(closedClasses);
    setFirst(firstClass);
    setSecond(secondClass);
    setThird(thirdClass);
    setOpen(!open);
  };

  return (
    <>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div id={first} />
        <div id={second} />
        <div id={third} />
      </div>
      <div ref={wrapperRef} className={containerClasses}>
        <div className={styles.section} onClick={() => handleClickLink()}>
          <a href='#skills'>Skills</a>
        </div>
        <div className={styles.section} onClick={() => handleClickLink()}>
          <a href='#projects'>Projects</a>
        </div>
        <div className={styles.section} onClick={() => handleClickLink()}>
          <a href='#experience'>Experience</a>
        </div>
        <div className={styles.section} onClick={() => handleClickLink()}>
          <a href='#contact'>Contact</a>
        </div>
        <a
          href='/blake-reeves-resume.pdf'
          target='_blank'
          rel='noopener noreferrer'
          className={`${styles.resumeLink} ${styles.section}`}
          onClick={() => handleClickLink()}
        >
          Resume
        </a>
        <div className={styles.socialLinks}>
          <a
            className={styles.socialLink}
            href='https://github.com/BlakeLReeves'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img id={styles.github} src='/github.svg' alt='github link' />
          </a>
          <a
            className={styles.socialLink}
            href='https://www.linkedin.com/in/blake-reeves/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              id={styles.animateDownedin}
              src='/linkedin.svg'
              alt='linkedin link'
            />
          </a>
          <a
            className={styles.socialLink}
            href='https://twitter.com/BlakeReeves'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img id={styles.twitter} src='/twitter.svg' alt='twitter link' />
          </a>
        </div>
      </div>
    </>
  );
};

export default NavRight;
