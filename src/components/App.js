import React from 'react'
import Login from './Login'
import Signup from './Signup'
import Dashboard from './Dashboard'
import PrivateRoute from './PrivateRoute'
import UpdateProfile from './UpdateProfile'
import ForgotPassword from './ForgotPassword'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import background from "../LoginScreen.jpg";


function App () {

  const container_styling = {
    minHeight: '100vh',
    minWidth: '100%',
    backgroundImage: `url(${background})` 
  };


  return (
    <Container className='d-flex align-items-center justify-content-center' style={container_styling}>
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard} />
              <PrivateRoute path='/update-profile' component={UpdateProfile} />
              <Route path='/signup' component={Signup} />
              <Route path='/login' component={Login} />
              <Route path='/forgot-password' component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
