import './App.css';
import {BrowserRouter,Route, Switch } from 'react-router-dom';


import Header from './components/header.js' 
import Home from './components/pages/home.js'
import Signup from './components/pages/signUp.js'
import Account from './components/pages/myAccount';
import AdminHome from './components/pages/admin/admin';
import Category from './components/category';
import Fiction from './components/pages/Fiction.js'
import Action from './components/pages/action';
import Mythology from './components/pages/Mythology';
import Science from './components/pages/Science';
import History from './components/pages/History';
import NonFiction from './components/pages/Non-Fiction';
import Drama from './components/pages/Drama';
import Novels from './components/pages/Novels';
import Comics from './components/pages/Comics';
import AddBook from './components/pages/admin/addBook';
import UserDetails from './components/pages/admin/userDetails';
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
    <Route path = '/catagories/Arts' component={Action} />
    <Route path = '/my-account'  component = {Account} /> 
    <Route path = '/signup'  component = {Signup} /> 
    <Route path = '/category'  component = {Category} /> 
    <Route path = '/catagories/Fiction' component = {Fiction} />   
    <Route path = '/catagories/Mythology' component = {Mythology} />  
    <Route path = '/catagories/Comics' component = {Comics} />  
    <Route path = '/catagories/Drama' component = {Drama} />  
    <Route path = '/catagories/Novels' component = {Novels} />  
    <Route path = '/catagories/Non-Fiction' component = {NonFiction} />  
    <Route path = '/catagories/Science' component = {Science} />  
    <Route path = '/catagories/History' component = {History} />  
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
