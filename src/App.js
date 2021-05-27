import './App.css';
import {BrowserRouter,Route } from 'react-router-dom';


import Header from './components/header.js' 
import Home from './components/pages/home.js'
import Assignedbooks from './components/pages/Fiction.js'
import Signup from './components/pages/signUp.js'
import Account from './components/pages/myAccount';
import AdminHome from './components/pages/admin/admin';
import Action from './components/pages/action';
import { useState } from 'react';
import { projectAuth } from './firebase/config';
import AddBook from './components/pages/admin/addBook';
import UserDetails from './components/pages/admin/userDetails';


const App = () => {

  // const [isLoggedIn,setIsLoggedIn] = useState( projectAuth.currentUser)

  // projectAuth.onAuthStateChanged(function(user){
	// 	if(user){setIsLoggedIn(true)}
	// 	else{setIsLoggedIn(false)}
	// })
	

  return (<div className= 'container'>
    <BrowserRouter>
    <Header/>
    <Route path = '/' exact component = {Home} />
    <Route path = '/admin/home' component={AdminHome} />
    <Route path = '/admin/addBook' component={AddBook} />
    <Route path = '/admin/userDetails' component={UserDetails} />
    <Route path = '/admin/books' component={AdminHome} />
    <Route path = '/catagories/maths1' component={Action} />
    <Route path = '/my-account'  component = {Account} /> 
    <Route path = '/signup'  component = {Signup} /> 
    <Route path = '/catagories/Chem1' component = {Assignedbooks} />
    
    

    
    
    </BrowserRouter>
    </div>
  );
}

export default App;
