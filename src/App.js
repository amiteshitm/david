import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './components/login/login'
import Dashboard from './components/dashboard/dashboard'
class App extends React.Component {

  render() {

    return (
      <div>
        <Router>
          <Route exact path='/' component={Login} />
          <Route exact path='/dashboard' component={Dashboard} />
        </Router>
      </div>

    );
  }

}

export default App;
