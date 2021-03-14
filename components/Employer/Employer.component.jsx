import styles from './Employer.module.css';

const Employer = ({ employer: { employer, jobTitle, dates, duties } }) => (
  <div className={styles.container}>
    <h3 className={styles.roleHeader}>
      {jobTitle} <span className={styles.employer}>@ {employer}</span>
    </h3>
    <div>{dates}</div>
    <ul className={styles.dutiesListContainer}>
      {duties.map(({ id, duty }) => (
        <li key={id} className={styles.dutyListItem}>
          {duty}
        </li>
      ))}
    </ul>
  </div>
);

export default Employer;
