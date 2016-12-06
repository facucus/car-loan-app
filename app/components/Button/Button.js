import React, { PropTypes } from 'react'
import styles from './styles.css'

const Button = (props) => {
  return (
    <div className={`col-xs-10 col-xs-offset-1 ${styles.buttonContainer}`}>
      <button onClick={props.onAction} type="button" className={`btn btn-primary ${styles.myButton}`}>{props.text}</button>
    </div>
  )
}

export default Button
