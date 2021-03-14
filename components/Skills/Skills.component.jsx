import styles from './Skills.module.css';

import SkillList from '../SkillList/SkillList.component';

const languages = ['Javascript', 'PHP', 'Apex', 'HTML5', 'CSS3'];
const frameworks = ['React', 'Node.js'];
const libraries = ['Redux', 'Express', 'jQuery'];
const styling = ['Bootstrap', 'Sass', 'Styled Components'];
const data = ['MySQL', 'Firebase'];
const other = [];

const Skills = () => (
  <div className={styles.container} id='skills'>
    <h1 className={styles.title}>Skills</h1>
    <div className={styles.section}>
      <SkillList group='Languages' skills={languages} />
      <SkillList group='Frameworks' skills={frameworks} />
      <SkillList group='Libraries' skills={libraries} />
      <SkillList group='Styling' skills={styling} />
      <SkillList group='Data' skills={data} />
    </div>
  </div>
);

export default Skills;
