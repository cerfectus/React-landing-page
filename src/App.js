import React, { Component } from 'react';
import AppNavbar from "./components/AppNavbar"
import 'bootstrap/dist/css/bootstrap.min.css'
import BodyLayout from "./components/BodyLayout"

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <AppNavbar></AppNavbar>
       <BodyLayout/>
      </div>
    );
  }
}

export default App;
