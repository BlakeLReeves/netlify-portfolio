import styles from './SkillList.module.css';

const SkillList = ({ group, skills }) => (
  <>
    <div className={styles.group}>{group}</div>
    <ul className={styles.skillList}>
      {skills.map((skill) => (
        <li key={skill} className={styles.skill}>
          {skill}
        </li>
      ))}
    </ul>
  </>
);

export default SkillList;
