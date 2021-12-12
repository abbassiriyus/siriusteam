
import React, { Component } from 'react'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'

import style from '../css/Dashboard.module.css'
import Avzallik from './Avzallik'
import Footer from './Footer'
import Xodim from './Xodim'
import Yol from './Yol'

export default class Dashboard extends Component {
    render() {
        return (
            <div>

<Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Sirius</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ms-auto menu">
      <Nav.Link className={style.menu} href="#boshSahifa">Bosh sahifa</Nav.Link>
      <Nav.Link className={style.menu} href="#dars">Darslarimiz</Nav.Link>
      <Nav.Link className={style.menu} href="#loyiha">Loyihalar</Nav.Link>
      <Nav.Link className={style.menu} href="#bizningJamoa">Bizning jamoa</Nav.Link> 
      <Nav.Link className={style.menu} href="#bizBilanBog'lanish"> bog'lanish</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<div className={style.header} id="boshSahifa">
    <Container>
        <Row>
            <Col sm={12} md={12} lg={6}>
            <h1>Sirius <span>Team.</span></h1>
            <p>Buyuk odamlar g'oyalar haqida.Oddiy insonlar voqealikni gapiradilar,Orzu qiling...
                O'z ustingda tinmay ishlang toki maqsadga erishmaguncha.Siz biz bilan bo'ling  Biz sizga yordam beramiz.Biz siz bilanmiz.Hayotda hech qachon qoqilmay maqsad sari ildam yuring.<span>oz qoldi !</span></p>
            </Col>
           
        </Row>
    </Container>
</div>



<div id="loyiha">
    <Yol/>
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
