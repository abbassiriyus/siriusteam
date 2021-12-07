import { Button }from 'react-bootstrap'
import React, { Component } from 'react'
import s from '../css/Xodim.module.css'
import w from '../img/footerlogo.jpg'
import a from '../img/abbas.jpg'
import Macbook from '../js/Macbook'
export default class Xodim extends Component {
    componentDidMount(){
            
        }
         render() {
    
       
        return (
            <div>
               <Macbook/>
               <div className={s.body}>
  <input type="radio" name="position"  />
  <input type="radio" name="position" />
  <input type="radio" name="position" checked />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <input type="radio" name="position" />
  <main id={s.carousel}>
    <div className={s.item}>   <div className={s.image}><img src={w}/></div>
        <div className={s.title}><h3>Baxriddin</h3>
        <p>Malakali SMM Targetolog</p>
        <Button variant="primary">Obuna</Button>
        </div></div>
    <div className={s.item}>   <div className={s.image}><img src={w}/></div>
        <div className={s.title}><h3>Abrorbek</h3>
        <p>Asoschi,Backent Development</p>
        <Button variant="primary">Obuna</Button>
        </div></div>
    <div className={s.item}>
        <div className={s.image}><img src={a}/></div>
        <div className={s.title}><h3>Abbas</h3>
        <p>Jamoa asoschisi,Web Middle Development</p>
        <Button variant="primary">Obuna</Button>
        </div>
        </div>
    <div className={s.item}>   <div className={s.image}><img src={w}/></div>
        <div className={s.title}><h3>Murod</h3>
        <p>Asoschisi,Frontend Development</p>
        <Button variant="primary">Obuna</Button>
        </div></div>
    <div className={s.item}>   <div className={s.image}><img src={w}/></div>
        <div className={s.title}><h3>Nigora</h3>
        <p>Vaqtincha hech qanday lavozimga aloqasi yoq :)</p>
        <Button variant="primary">Obuna</Button>
        </div></div>
    </main>
</div> 
<Macbook/>
            </div>
        )
    }
}
