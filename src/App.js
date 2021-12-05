import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css'; 
import Dashboard from './components/js/Dashboard';

export default class App extends Component {
  render() {
    return (
      <div>
        
        <Dashboard/>
      </div>
    )
  }
}
