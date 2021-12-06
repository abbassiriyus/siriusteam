import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; 
import Dashboard from './components/js/Dashboard';
import Footer from './components/js/Footer'
import Xodim from './components/js/Xodim'
import Macbook from './components/js/Macbook';

export default class App extends Component {
  render() {
    return (
      <div>
        <Macbook/>
   <Xodim/>
        <Dashboard/> 
         <Footer/>
      </div>
    )
  }
}
