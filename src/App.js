import './App.css';
import {BrowserRouter,Route, Switch } from 'react-router-dom';


import Header from './components/header.js' 
import Home from './components/pages/home.js'
import Assignedbooks from './components/pages/Fiction.js'
import Signup from './components/pages/signUp.js'
import Account from './components/pages/myAccount';
import AdminHome from './components/pages/admin/admin';
import Action from './components/pages/action';
import AddBook from './components/pages/admin/addBook';
import UserDetails from './components/pages/admin/userDetails';
import Catagory from './components/catagory';
import BooksLot from './components/pages/admin/booksLot';


const App = () => {

  return (<div>
    <BrowserRouter>
    
    <Header/>
    <Switch>
    
    <Route path = '/' exact component = {Home} />
    <Route path = '/admin/home' component={AdminHome} />
    <Route path = '/admin/addBook' component={AddBook} />
    <Route path = '/admin/userDetails' component={UserDetails} />
    <Route path = '/admin/books' component={BooksLot} />
    <Route path = '/catagories/maths1' component={Action} />
    <Route path = '/my-account'  component = {Account} /> 
    <Route path = '/signup'  component = {Signup} /> 
    <Route path = '/catagory'  component = {Catagory} /> 
    <Route path = '/catagories/Science' component = {Assignedbooks} />   
    <Route component={NoMatchPage} /> 
    </Switch> 
    </BrowserRouter>
    </div>
  );
}

const NoMatchPage =()=>{
  return(
    <h2>404-Not Found</h2>
  )
}

export default App;
