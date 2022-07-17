// App.js

import React, { Component } from 'react';
import { BrowserRouter as Router, Routes , Route, Link } from 'react-router-dom';
import CustomIcon from './pages/customIcon';
import Home from './pages/home'
import Login from './pages/loginPage'

class App extends Component {
  render() {
    return (
    <Router>
        {/* <div>
          <h2>Welcome to React Router Tutorial</h2>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav mr-auto"> */}
            {/* <li><Link to={'/'} className="nav-link"> </Link></li> */}
            {/* <li><Link to={'/contact'} className="nav-link">Contact</Link></li> */}
            {/* <li><Link to={'/about'} className="nav-link"></Link></li> */}
          {/* </ul>
          </nav>
          <hr /> */}
          <Routes >
              <Route path='/' element={<Login/>} />
               {/* <Route path='/contact' element={Contact} /> */}
              <Route path='/avatar' element={<CustomIcon/>} />
          </Routes >
        {/* </div> */}
      </Router>
    );
  }
}

export default App;