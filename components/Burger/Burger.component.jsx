import { useState } from 'react';

import NavRight from '@components/NavRight/NavRight.component';

import styles from './Burger.module.css';

const Burger = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div id={open ? styles.firstRotated : styles.first} />
        <div id={open ? styles.secondRotated : styles.second} />
        <div id={open ? styles.thirdRotated : styles.third} />
      </div>
      <NavRight open={open} />
    </>
  );
};

export default Burger;
