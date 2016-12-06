import React, { PropTypes } from 'react'
import styles from './styles.css'
const Slider = (props) => {
  return (
    <div className={`row ${styles.mtop}`}>
      <label className={`col-xs-3 ${styles.textLabel}`}>{props.label}</label>
      <div className={'col-xs-6'}>
        <input className={styles.updatedRange} onChange={props.onChangeSlide} type="range" min={props.minVal} max={props.maxVal} step={props.steps}/>
      </div>
      <p className={`col-xs-3 ${styles.textLabel} ${styles.restext}`}>{props.result}</p>
    </div>
  )
}

export default Slider
