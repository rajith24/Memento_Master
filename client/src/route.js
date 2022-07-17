// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import CustomIcon from './pages/customIcon';
import Login from './pages/loginPage'

class App extends Component {
  render() {
    return (
    <Router>
          <Routes >
              <Route path='/' element={<Login/>} />
              <Route path='/avatar' element={<CustomIcon/>} />
          </Routes >
      </Router>
    );
  }
}

export default App;