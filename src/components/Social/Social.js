import React from 'react'
import styles from './social.module.css'
import { icons } from './icons'

const Social = () => (
  <>
    <ul className={styles['external-links']}>
      <li>
        <a href='https://linkedin.com/in/pedrodiasfonseca' className={styles['link--unstyled']} target='_blank' rel='noopener noreferrer'>
          <svg className={`${styles.icon} ${styles['icon--linkedin']}`}>
            <use xlinkHref='#linkedin' />
          </svg>
        </a>
      </li>
      <li>
        <a href='https://github.com/pdf13' className={styles['link--unstyled']} target='_blank' rel='noopener noreferrer'>
          <svg className={`${styles.icon} ${styles['icon--github']}`}>
            <use xlinkHref='#github' />
          </svg>
        </a>
      </li>
      <li>
        <a href='https://twitter.com/_pdf' className={styles['link--unstyled']} target='_blank' rel='noopener noreferrer'>
          <svg className={`${styles.icon} ${styles['icon--twitter']}`}>
            <use xlinkHref='#twitter' />
          </svg>
        </a>
      </li>
      <li>
        <a href='https://instagram.com/pdf_' className={styles['link--unstyled']} target='_blank' rel='noopener noreferrer'>
          <svg className={`${styles.icon} ${styles['icon--instagram']}`}>
            <use xlinkHref='#instagram' />
          </svg>
        </a>
      </li>
    </ul>
    {icons}
  </>
)

export default Social
