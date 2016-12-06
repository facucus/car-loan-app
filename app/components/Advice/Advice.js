import React, { PropTypes } from 'react'
import styles from './styles.css'
const Advice = (props) => {
  return (
    <div className={'col-xs-12 col-sm-6'}>
      <label className={styles.title}>{props.title}</label>
      <input className={styles.input} type="text" value={props.text} disabled/>
    </div>
  )
}

export default Advice
