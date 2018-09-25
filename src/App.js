import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Bank from './Bank'
// import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Bank />
      </div>
    )
  }
}

export default App;
