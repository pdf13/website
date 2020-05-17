import React from 'react'
import styles from './container.module.css'
import { element, oneOfType, arrayOf } from 'prop-types'

const Container = ({ children }) => (<div className={styles.container}>{children}</div>)

Container.propTypes = {
  children: oneOfType([
    element,
    arrayOf(element)
  ]).isRequired
}

export default Container
