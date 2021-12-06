import React, { Component } from 'react'
import '../../App.css'
import { MdOutlineScore, MdWeb } from 'react-icons/md'
import { FaBookReader } from 'react-icons/fa'
import { GiFamilyHouse, GiReceiveMoney, GiTeamIdea } from 'react-icons/gi'
import Macbook from './Macbook'
export default class Avzallik extends Component {
    render() {
        return (<div>
            <div className="strong">
                <div className="title">Bizning afzalliglarimiz</div>
                <ul>
  <li>
    <a >
     <MdOutlineScore className="icons"/>
      <span>Tezlik</span>
    </a>
  </li>
  <li>
    <a>
    <FaBookReader className="icons"/>
      <span>Sifat</span>
    </a>
  </li>
  <li>
    <a >
    <GiReceiveMoney className="icons"/>
      <span>Qulay narx</span>
    </a>
  </li>
  <li>
    <a href="#">
    <GiFamilyHouse className="icons"/>
      <span>Qulay joyda</span>
    </a>
  </li>
  <li>
    <a href="#">
    <MdWeb className="icons"/>
      <span>Real loyiha</span>
    </a>
  </li>
  <li>
    <a href="#">
    <GiTeamIdea className="icons"/>
      <span>Mustahkam tizim</span>
    </a>
  </li>
  <li>
  <Macbook/></li>
</ul>            </div></div>
        )
    }
}
