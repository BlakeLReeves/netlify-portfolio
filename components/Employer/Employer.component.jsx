import styles from './Employer.module.css';

const Employer = ({
  employer: { employer, link, jobTitle, dates, duties },
}) => {
  return (
    <div className={styles.container}>
      <h3
        data-aos='fade-up'
        data-aos-easing='ease-in-out'
        className={styles.roleHeader}
      >
        {jobTitle}{' '}
        <span className={styles.employer}>
          @{' '}
          <a
            id={styles.employerLink}
            href={link}
            target='_blank'
            rel='noopener noreferrer'
          >
            {employer}
          </a>
        </span>
      </h3>
      <div
        data-aos='fade-up'
        data-aos-easing='ease-in-out'
        data-aos-delay='100'
      >
        {dates}
      </div>
      <ul
        data-aos='fade-left'
        data-aos-easing='ease-in-out'
        data-aos-delay='600'
        className={styles.dutiesListContainer}
      >
        {duties.map(({ id, duty }) => (
          <li key={id} className={styles.dutyListItem}>
            {duty}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employer;
