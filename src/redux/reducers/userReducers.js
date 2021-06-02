import { combineReducers } from "redux";
import { projectAuth, projectFirestore } from "../../firebase/config";

const userReducer =  (user = null, action) => {

  if (action.type === 'LOGIN_USER') {
    return action.payload
  }

  if (action.type === 'LOGOUT_USER'){
    return action.payload
  }

  if (action.type === 'CREATE_USER'){
    return action.payload
  }

  else {
    return user
  }
}

const searchReducer = (result= null, action) =>{
  if (action.type === 'SEARCH'){
    return action.payload
  }
  else {return result}
}

const lendedBookReducer = (result = null,action)=>{
  if(action.type === 'LEND_BOOK'){
    return action.payload
  }
  else {return result}
}


export default combineReducers({
  userData: userReducer,
  searchResult : searchReducer,
  lendBook : lendedBookReducer
})