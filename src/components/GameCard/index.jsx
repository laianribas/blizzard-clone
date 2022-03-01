/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import './styles.css'
import {
  SvgApple,
  SvgBattle,
  SvgNintendo,
  SvgPlaystation,
  SvgPlaystore,
  SvgXbox
} from '../../assets/images/svg'
const GameCard = (props) => {
  return (
    <div className="game-card col">
      <a href={props.link} target="_blank" rel="noreferrer">
        <div className="game-image">
          <img src={`${props.image}`} />
          <img src={`${props.logo}`} className="game-logo" />
        </div>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="icons">
          {props.battle ? <SvgBattle /> : false}
          {props.xbox ? <SvgXbox /> : false}
          {props.playstation ? <SvgPlaystation /> : false}
          {props.nintendo ? <SvgNintendo /> : false}
          {props.apple ? <SvgApple /> : false}
          {props.playstore ? <SvgPlaystore /> : false}
        </div>
      </a>
    </div>
  )
}

export default GameCard
