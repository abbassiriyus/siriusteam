
import React, { Component } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

import style from '../css/Dashboard.module.css'
import Avzallik from './Avzallik'
import Footer from './Footer'
import Kurslar from './Kurslar'
import Xodim from './Xodim'
import Yol from './Yol'
import '../css/dashboard.css'

export default class Dashboard extends Component {
    render() {
        return (
            <div>
      

<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand className={style.menu} href="#home" >Sirius</Navbar.Brand>
  <Navbar.Toggle className={style.navbarnav} aria-controls="#responsive-navbar-nav"/>
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav  className="ms-auto " >
      <Nav.Link className={style.navlink}  href="#boshSahifa">Bosh sahifa</Nav.Link>
      <Nav.Link className={style.navlink}  href="#kurslar">Kurslar</Nav.Link>
      <Nav.Link className={style.navlink}  href="#loyiha">Loyihalar</Nav.Link>
      <Nav.Link className={style.navlink}  href="#bizningJamoa">Bizning jamoa</Nav.Link> 
      <Nav.Link className={style.navlink}  href="#bizBilanBog'lanish"> bog'lanish</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<div id="boshSahifa">
    
<div class="ternary-system">
  <div class="sun primary"></div>
  <div class="sun secondary"></div>
  <div class="sun ternary"></div>
</div>
<div class="sand">
<div class="pendulums">
  <div class="pendulum">
    <div class="bar"></div>
    <div class="motion">
      <div class="string"></div>
      <div class="weight"></div>
    </div>
  </div>
  <div class="pendulum shadow">
    <div class="bar"></div>
    <div class="motion">
      <div class="string"></div>
      <div class="weight"></div>
    </div>
  </div>
</div></div>
<div class="pyramid"></div>
<div class="text">
  <h1 class="title">The <strong>Three-Body</strong><em>Problem</em></h1>
  <p>By Liu Cixin</p>
</div>
</div>



<div id="loyiha">
    <Yol/>
</div>
<div id="kurslar">
    <Kurslar/>
</div>
<div id="bizningJamoa">
    <Xodim />
</div>
<Avzallik/>  

<div id="bizBilanBog'lanish">
<Footer /> 
</div>

            </div>
        )
    }
}
