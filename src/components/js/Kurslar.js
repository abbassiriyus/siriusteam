import React, { Component } from 'react'
import '../css/Kurslar.css'
import w from '../img/abbas.jpg'
import s from '../img/nigora.jpg'
import f from '../img/abbas.jpg'
import d from '../img/nigora.jpg'
import { Card } from 'react-bootstrap'
export default class Kurslar extends Component {
  func1=()=>{
document.querySelector('#mate').src=w
  }
  func2=()=>{
    document.querySelector('#mate').src=s
      }
      func3=()=>{
        document.querySelector('#mate').src=f
          }
          func4=()=>{
            document.querySelector ('#mate').src=d
              }

  render() {
    return (
      <div>
     <Card className="bg-dark text-white">
  <Card.Img id="mate" src="" alt="Card image" width="300" height="300" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text style={{color:'red'}}>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text><div><button onClick={this.func1}></button>
         <button onClick={this.func2}></button>
         <button onClick={this.func3}></button>
         <button onClick={this.func4}></button></div></Card.Text>
  </Card.ImgOverlay>
</Card>

       </div>
     
    )
  }
}
