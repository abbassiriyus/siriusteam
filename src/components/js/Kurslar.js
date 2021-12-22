import React, { Component } from 'react'
import '../css/Kurslar.css'
import w from '../img/abbas.jpg'
import s from '../img/nigora.jpg'
import f from '../img/abbas.jpg'
import d from '../img/nigora.jpg'
import frontend from '../imgs/HTML_CSS_JS.gif'
import scratch from '../imgs/oyin.gif'
import backend from "../imgs/delete-todo-test.gif"
import { Card, CardGroup, Col, Container, ListGroup, Row } from 'react-bootstrap'


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

        
     {/* <Card className="bg-dark text-white">
  <Card.Img id="mate" src="" alt="Card image" width="300" height="300" />
  <Card.ImgOverlay>
    <Card.Title>Card title</Card.Title>
    <Card.Text style={{color:'red'}}>
      This is a wider card with supporting text below as a natural lead-in to
      additional content. This content is a little bit longer.
    </Card.Text>
    <Card.Text><div>
         <button onClick={this.func1}></button>
         <button onClick={this.func2}></button>
         <button onClick={this.func3}></button>
         <button onClick={this.func4}></button></div></Card.Text>
  </Card.ImgOverlay>
</Card> */}

      <Container>
        <h2 className="kursTitle">Biz sizga nima o'rgata olamiz?</h2>
        <Row>

     <Col sm={12} md={6} lg={4} xxl={3} >
  <Card className="kursCard">
    <Card.Img className="kursImg" variant="top" src={frontend}/>
    <Card.Body>
      <Card.Title className="kursNomi">Kurs nomi :<small> Frontend</small></Card.Title>
      <Card.Text>
       <small className="kursNarxi">Narxi :<b>700<small>ming</small></b></small>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="kursMuddati">Muddat :<b>3 oy </b></small>
    </Card.Footer>
  </Card>
  </Col>

  <Col sm={12} md={6} lg={4} xxl={3}>
  <Card className="kursCard">
    <Card.Img className="kursImg" variant="top" src={backend} />
    <Card.Body>
    <Card.Title className="kursNomi">Kurs nomi :<small>Backend hi
      hhhihi
      hiibh</small></Card.Title>
      <Card.Text>
       <small className="kursNarxi">Narxi :<b>700<small>ming</small></b></small>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="kursMuddati">Muddat:<b>6 oy </b></small>
    </Card.Footer>
  </Card>
  </Col>

  <Col sm={12} md={6} lg={4} xxl={3} >
  <Card className="kursCard">
    <Card.Img className="kursImg" variant="top" src={scratch} />
    <Card.Body>
    <Card.Title className="kursNomi">Kurs nomi: <small>Scratch</small></Card.Title>
      <Card.Text>
       <small className="kursNarxi">Narxi:<b>500<small>ming</small></b></small>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="kursMuddati">Muddat:<b>2 oy </b></small>
    </Card.Footer>
  </Card>
  </Col>
  <Col sm={12} md={6} lg={4} xxl={3} >
  <Card className="kursCard">
    <Card.Img className="kursImg" variant="top" src={frontend} />
    <Card.Body>
      <Card.Title  className="kursNomi">Kurs nomi: <small>Frontend </small></Card.Title>
      <Card.Text>
       <small className="kursNarxi">Narxi:<b>700<small>ming</small></b></small>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="kursMuddati">Muddat:<b className="sa">3 oy </b></small>
    </Card.Footer>
  </Card>
  </Col>

  <Col sm={12} md={6} lg={4} xxl={3}>
  <Card className="kursCard">
    <Card.Img className="kursImg" variant="top" src={backend} />
    <Card.Body>
    <Card.Title className="kursNomi">Kurs nomi: <small >Backend</small></Card.Title>
      <Card.Text>
       <small className="kursNarxi">Narxi:<b>700<small>ming</small></b></small>
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="kursMuddati">Muddat:<b>6 oy </b></small>
    </Card.Footer>
  </Card>
  </Col>

 
 
 
</Row>
      </Container>
       </div>

    )
  }
}
