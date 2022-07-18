// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import CustomIcon from './pages/customIcon';
import Login from './pages/loginPage'
import Chat from './pages/chatPage'

class App extends Component {
  render() {
    return (
    <Router>
          <Routes >
              <Route path='/' element={<Login/>} />
              <Route path='/home' element={<CustomIcon/>} />
              <Route path='/message' element={<Chat/>} />
          </Routes >
      </Router>
    );
  }
}

export default App;