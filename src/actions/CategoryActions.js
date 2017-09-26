import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  CATEGORY_UPDATE,
  CATEGORY_CREATE,
  CATEGORIES_FETCH_SUCCESS,
} from './types'

export const categoryUpdate = ({ prop, value }) => {
  return {
    type: CATEGORY_UPDATE,
    payload: { prop, value }
  };
};

export const categoryCreate = ({ name, description }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('/users/' + currentUser.uid + '/categories')
      .push({ name, description })
      .then(() => {
        dispatch({ type: CATEGORY_CREATE });
        Actions.categoryList({ type: 'reset' })
      })
  }
};

export const categoriesFetch  = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('/users/' + currentUser.uid + '/categories')
    .on('value', snapshot => {
      dispatch({ type: CATEGORIES_FETCH_SUCCESS, payload: snapshot.val() })
    })
  }
}
