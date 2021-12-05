import React, { Component } from 'react'
import '../../App.css'
import { MdOutlineScore } from 'react-icons/md'
import { FaBookReader } from 'react-icons/fa'
import { GrMoney } from 'react-icons/gr'
import { GiFamilyHouse } from 'react-icons/gi'
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
    <GrMoney className="icons"/>
      <span>Qulay narx</span>
    </a>
  </li>
  <li>
    <a href="#">
    <GiFamilyHouse className="icons"/>
      <span>Qulay joyda</span>
    </a>
  </li>
</ul>            </div></div>
        )
    }
}
