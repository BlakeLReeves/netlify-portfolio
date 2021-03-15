import SkillList from '../SkillList/SkillList.component';

import styles from './Skills.module.css';

const languages = ['Javascript', 'PHP', 'Apex', 'HTML5', 'CSS3'];
const frameworks = ['React', 'Node.js'];
const libraries = ['Redux', 'Express', 'jQuery'];
const styling = ['Bootstrap', 'Sass', 'Styled Components'];
const data = ['MySQL', 'Firebase'];
const other = ['NPM', 'Yarn', 'Stripe', 'Jira'];

const Skills = () => {
  return (
    <div className={styles.container} id='skills'>
      <h1
        data-aos='fade-up'
        data-aos-easing='ease-in-out'
        className={styles.title}
      >
        Skills
      </h1>
      <div className={styles.section}>
        <SkillList group='Languages' skills={languages} />
        <SkillList group='Frameworks' skills={frameworks} />
        <SkillList group='Libraries' skills={libraries} />
        <SkillList group='Styling' skills={styling} />
        <SkillList group='Data' skills={data} />
        <SkillList group='Other' skills={other} />
      </div>
    </div>
  );
};

export default Skills;
