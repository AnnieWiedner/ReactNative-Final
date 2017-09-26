import {
  CATEGORY_UPDATE,
  CATEGORY_CREATE
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  description: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORY_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value }
    case CATEGORY_CREATE:
      return INITIAL_STATE;
    default:
      return state;
  }
};
