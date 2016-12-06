import React, { PropTypes } from 'react'
import styles from './styles.css'

const Select = (props) => {
  return (
    <div className={`col-xs-12 col-md-4 ${styles.marBottom}`}>
      <select className={'form-control'} onChange={props.onAction}>
        {props.children}
        {props.options}
      </select>
    </div>
  )
}

export default Select
