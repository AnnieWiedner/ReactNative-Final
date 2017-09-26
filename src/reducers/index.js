import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import CategoryReducer from './CategoryReducer';
import CategoryFormReducer from './CategoryFormReducer';





export default combineReducers({
  auth: AuthReducer,
  categoryForm: CategoryFormReducer,
  categories: CategoryReducer
})
