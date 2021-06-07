import { combineReducers } from "redux";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
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

const lendedBookReducer = (result = [],action)=>{
  if(action.type === 'LEND_BOOK'){
    return action.payload
  }
  else {return result}
}

const persistConfig ={
  key:'root',
  storage,
  whitelist:['userData','lendBook','searchResult']
}

const reducers = combineReducers({
  userData: userReducer,
  searchResult : searchReducer,
  lendBook : lendedBookReducer
})

export default persistReducer(persistConfig, reducers);