import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';


const RouterComponent = () => {
  return (
    <Router>
    <Stack key="auth">
      <Scene
        key="login"
        component={LoginForm}
        title="Login"
        hideNavBar
        />
      <Scene
        key="register"
        component={RegisterForm}
        title="Register"
        hideNavBar
        />
    </Stack>
    </Router>
  )
}

export default RouterComponent;
