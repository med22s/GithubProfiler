import React from 'react'
import './App.css';
import Navbar from './components/layout/Navbar'
import {Alert} from './components/layout/Alert'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import {About} from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import User from './components/users/User'

import GithubState from './context/github/GithubState'
import AlertState from './context/alert/AlertState'

const  App=()=>{

 
  return (
    <GithubState>
      <AlertState>
        <Router>
          <div>
            <Navbar />
            <div className="container">
            <Alert/>
              <Switch>
                  <Route exact path='/' component={Home}>
                </Route>
                <Route exact path='/about' component={About}>
                </Route>
                <Route exact path='/user/:login' component={User} >
                </Route>
                <Route component={NotFound}>
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </GithubState>
  )
}

export default App;
