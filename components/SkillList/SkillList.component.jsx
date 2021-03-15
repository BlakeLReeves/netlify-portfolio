import styles from './SkillList.module.css';

const SkillList = ({ group, skills }) => {
  return (
    <>
      <div
        data-aos='fade-up'
        data-aos-easing='ease-in-out'
        className={styles.group}
      >
        {group}
      </div>
      <ul
        data-aos='fade-up'
        data-aos-easing='ease-in-out'
        data-aos-delay='50'
        className={styles.skillList}
      >
        {skills.map((skill) => (
          <li key={skill} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>
    </>
  );
};

export default SkillList;
