import { useState } from 'react';
import { EXPERIENCE_DATA as experience } from '../../data/experience.data';

import Employer from '@components/Employer/Employer.component';
import { aosInit } from '../../hooks/aos';

import 'aos/dist/aos.css';
import styles from './Experience.module.css';

const Experience = () => {
  const [employer, setEmployer] = useState(experience[0]);

  aosInit(1000);

  return (
    <div className={styles.container} id='experience'>
      <h1
        data-aos='fade-in'
        data-aos-easing='ease-in-out'
        className={styles.title}
      >
        Experience
      </h1>
      <div className={styles.employerLayout}>
        <ul
          data-aos='fade-right'
          data-aos-easing='ease-in-out'
          className={styles.btnList}
        >
          {experience.map((item) => (
            <li
              key={item.id}
              className={
                item.id === employer.id
                  ? `${styles.employerListItem} ${styles.employerSelected}`
                  : `${styles.employerListItem} ${styles.employer}`
              }
              onClick={() => setEmployer(item)}
            >
              <button className={styles.employerBtn}>{item.employer}</button>
            </li>
          ))}
        </ul>
        <Employer employer={employer} />
      </div>
    </div>
  );
};

export default Experience;
