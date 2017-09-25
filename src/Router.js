import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


const RouterComponent = () => {
  return (
    <Router>
    <Scene key="auth">
      <Scene key="login" component={LoginForm} title="Login" />
      <Scene key="register" component={RegisterForm} title="Register" />
    </Scene>
    </Router>
  )
}

export default RouterComponent;
