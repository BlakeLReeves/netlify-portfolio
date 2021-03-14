import NavRight from '@components/NavRight/NavRight.component';

import styles from './NavContainer.module.css';

const NavContainer = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.logoWrapper}>
        <a href='#intro' aria-label='home'>
          <img className={styles.logo} src='/logo.svg' alt='logo' />
        </a>
      </div>
      <NavRight />
    </nav>
  );
};

export default NavContainer;
