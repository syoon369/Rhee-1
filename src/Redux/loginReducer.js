import {combineReducers} from 'redux';
import {INIT_USER_STATE} from '../Redux/redux'
import {LOGIN, LOGOUT} from '../Redux/redux'

function autification(state=INIT_USER_STATE, action){
    switch(action.type){
      case LOGIN:
        return{
          ...state,
          isLogined:true
        }
      case LOGOUT:
        return{
          ...state,
          isLogined:false
        } 
      default:
        return state;
    }
  }

const loginReducer = combineReducers({autification});
  
export default loginReducer;
