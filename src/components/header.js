import {Link} from 'react-router-dom'
import '../App.css';
import {SignOut} from './hooks/authHook.js'
import {projectAuth} from '../firebase/config.js'
import { useState } from 'react';
import { Fetching } from './hooks/userFetch';
import { connect } from 'react-redux';
import { signOut } from '../redux/actions/fetchUser';


const Header = (props) => {

	// const [isLoggedIn,setIsLoggedIn] = useState()
	// const [admin, setAdmin]=useState()

	const user = props.data
	// projectAuth.onAuthStateChanged(function(user){
	// 	if(user){setIsLoggedIn(true)}
	// 	else{setIsLoggedIn(false)}
	// })
	
	const signOut= ()=>{
		SignOut()
		props.signOut()
	}
	console.log(props.data)	
	
	if(user){
	 if(user.hasOwnProperty('admin')){
		return (<div>
			 		<header className="header" >
					   <h1> Library App </h1>
			 		  </header>
			 		  <div  className="nav">
			 		  <Link to= '/' >Home</Link>
			 		  <Link to = { user ? '/my-account':'/signup'}> My Account </Link>
					  <Link to = '/admin/userDetails'>Search User </Link>
					  <Link to = '/admin/addBook'>Add Book</Link>

			 	   	  {user && <Link to ='/'  onClick={signOut}  className='ryt'> SignOut </Link>}		   
			 		  </div>
			 	   </div>
			 	)
	 	}}
		
		

	return (<div>
     <header className="header" >
    	<h1> Library App </h1>
   	</header>
   	<div  className="nav">
   	<Link to= '/' >Home</Link>
   	<Link to = { user ? '/my-account':'/signup'}> My Account </Link>
   	<Link to ='/assignedbooks'>Assigned Books</Link>
   	{ !user && <Link to ='/signup' className='ryt'> SignIn </Link>}
	{ user && <Link to ='/'  onClick={signOut}  className='ryt'> SignOut </Link>}
    <Link to='/' className='ryt'>Search</Link>
    
   	</div>
    </div>)
}

const mapStateToProps = state =>{
	console.log(state)
	return {data: state.userData}
}

export default connect(mapStateToProps,{signOut})(Header)