import React, { Component } from 'react'
import s from '../css/Xodim.module.css'
export default class Xodim extends Component {
    render() {
        return (
            <div>
               
               <div className={s.body}>
  <input type="radio" name="position" checked />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <main id={s.carousel}>
    <div className={s.item}>as</div>
    <div className={s.item}>sad</div>
    <div className={s.item}>sad</div>
    <div className={s.item}>sad</div>
    <div className={s.item}>sad</div>
    </main>
</div> 
            </div>
        )
    }
}
