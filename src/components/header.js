import {Link} from 'react-router-dom'
import '../App.css';
import {SignOut} from './hooks/authHook.js'
import {projectAuth} from '../firebase/config.js'
import { useState } from 'react';
import { Fetching } from './hooks/userFetch';
const Header = () => {

	const [isLoggedIn,setIsLoggedIn] = useState( projectAuth.currentUser)
	const [admin, setAdmin]=useState()

	
	projectAuth.onAuthStateChanged(function(user){
		if(user){setIsLoggedIn(true)}
		else{setIsLoggedIn(false)}
	})
	
	const signOut= ()=>{
		SignOut()
	}
	//console.log(isLoggedIn)	
	
	if(isLoggedIn){
	Fetching().then((data) => {
		//console.log(data.admin)
		setAdmin(data.admin)
		})
		
		if(admin){
		return (<div>
			<header className="header" >
			   <h1> Library App </h1>
			  </header>
			  <div  className="nav">
			  <Link to= '/' >Home</Link>
			  <Link to = { isLoggedIn? '/my-account':'/signup'}> My Account </Link>
		   	  {isLoggedIn && <Link to ='/'  onClick={signOut}  className='ryt'> SignOut </Link>}		   
			  </div>
		   </div>
		)}}
		

	return (<div>
     <header className="header" >
    	<h1> Library App </h1>
   	</header>
   	<div  className="nav">
   	<Link to= '/' >Home</Link>
   	<Link to = { isLoggedIn? '/my-account':'/signup'}> My Account </Link>
   	<Link to ='/assignedbooks'>Assigned Books</Link>
   	{!isLoggedIn && <Link to ='/signup' className='ryt'> SignIn </Link>}
	{isLoggedIn && <Link to ='/'  onClick={signOut}  className='ryt'> SignOut </Link>}
    <Link to='/' className='ryt'>Search</Link>
    
   	</div>
    </div>)
}

export default Header