import React from 'react'
import './HomePage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

function ListItem({ iconName, redirect, heading, definiton }) {
  return (
    <li className="aboutItem">
      <a href={redirect} target="_blank">
        {' '}
        <div className="preHeadingIcon">
          <FontAwesomeIcon icon={iconName} />
        </div>
      </a>

      <div className="aboutItemTex">
        <a href={redirect} target="_blank">
          <div className="headingAndIcon">
            <div className="headingContainer">
              <h3>{heading}</h3>
            </div>
            <div className="iconContainer">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} size="1x" />
            </div>
          </div>
        </a>
        <p>{definiton}</p>
      </div>
    </li>
  )
}

export default ListItem
