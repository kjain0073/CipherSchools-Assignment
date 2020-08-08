import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Redirect } from 'react-router-dom'

import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Register from './components/Register'
import Profile from './components/Profile'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Dashboard} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} />
            <Redirect to="/" />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
