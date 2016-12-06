import React, { PropTypes } from 'react'
import styles from './styles.css'

const Results = (props) => {
  console.log(props)
  return (
    <div className={"form-group col-xs-12 col-sm-4 resumenFinanciero"}>
      <h3>Financial summary:</h3>
      <br/>
      <div className={styles.leftCol}>
          <ul className={styles.noBullets}>
              <li>Initial Fee:</li>
              <li>TNA:</li>
              <li>TEA:</li>
              <li>CFTNA:</li>
              <li>CFTNA no Tax:</li>
              <br/>
              <li><strong>Average Fee</strong></li>
          </ul>
      </div>
      <div className={styles.rightCol}>
          <ul className={styles.noBullets}>
              <li>{props.results.initialFee}</li>
              <li>{props.results.tna}</li>
              <li>{props.results.tea}</li>
              <li>{props.results.noIva}</li>
              <li>{props.results.iva}</li>
              <br/>
              <li><strong>{props.results.averageFee}</strong></li>
          </ul>
      </div>

  </div>
  )
}

export default Results
