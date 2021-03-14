import { PROJECTS_DATA as projects } from '../../data/projects.data';

import styles from './Projects.module.css';

const Projects = () => (
  <div className={styles.container} id='projects'>
    <h1 className={styles.title}>Projects</h1>
    {projects.map(
      ({ id, title, imageUrl, description, stack, github, website }) => (
        <div key={id} className={styles.project}>
          <div className={styles.projectCol}>
            <div className={styles.imgContainer}>
              <a className={styles.imgLink} href={website} target='_blank'>
                <img src={imageUrl} alt='crwn clothing project' />
              </a>
            </div>
          </div>
          <div className={`${styles.infoContainer} ${styles.projectCol}`}>
            <div className={styles.projectTitle}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.stackContainer}>
              {stack.map(({ id, name }) => (
                <div key={id} className={styles.stackItem}>
                  {name}
                </div>
              ))}
            </div>
            <div className={styles.linkContainer}>
              <a className={styles.projectLink} href={github} target='_blank'>
                <img
                  className={styles.githubLinkImg}
                  src='/github.svg'
                  alt='github link'
                />
              </a>
              <a className={styles.projectLink} href={website} target='_blank'>
                <img
                  className={styles.websiteLinkImg}
                  src='/website.svg'
                  alt='website link'
                />
              </a>
            </div>
          </div>
        </div>
      )
    )}
  </div>
);

export default Projects;
