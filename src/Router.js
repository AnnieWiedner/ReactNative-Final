import React from 'react';
import { Scene, Router, Actions, Stack } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import CategoryList from './components/CategoryList';
import CategoryCreate from './components/CategoryCreate';


const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">

        <Scene key="auth">
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
        </Scene>

        <Scene
          key="categoryList"
          component={CategoryList}
          title="Categories"
          hideNavBar
        />
        <Scene
          key="categoryCreate"
          component={CategoryCreate}
          title="Category Create"
          hideNavBar
        />

      </Stack>

    </Router>
  )
}

export default RouterComponent;
