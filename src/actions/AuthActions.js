import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER,
  GO_TO_REGISTER,
  GO_TO_LOGIN
  } from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch(() => loginUserFail(dispatch))
  };
};

export const registerUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: REGISTER_USER });

    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => registerUserSuccess(dispatch, user))
      .catch(() => registerUserFail(dispatch))
  };
};

const registerUserFail = (dispatch) => {
  dispatch({ type: REGISTER_USER_FAIL })
}

const registerUserSuccess = (dispatch, user) => {
  dispatch({
    type: REGISTER_USER_SUCCESS,
    payload: user
  });
  Actions.house();
}


const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL })
}

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};


export const goToRegister = ({ email, password, loading, error }) => {
  return (dispatch) => {
    dispatch({ type: GO_TO_REGISTER });
    Actions.register()
  };
};

export const goToLogin = ({ email, password, loading, error }) => {
  return (dispatch) => {
    dispatch({ type: GO_TO_LOGIN });
    Actions.login()
  };
};
