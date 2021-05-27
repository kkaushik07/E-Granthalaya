import React,{useState} from 'react'
import  { Redirect } from 'react-router-dom'

import {SignUp,SignIn,SignOut} from '../hooks/authHook.js'
import {projectAuth} from '../../firebase/config.js'
import Input from '../input.js'
import { Fetching } from '../hooks/userFetch.js'

const Signup = ()=> {
	const initialValues = {
		fullName: "",
		email: "" ,
		mobileNumber: '',
		address:'',
		password:""
	}


	const [values,setValues]= useState(initialValues)
	const [isloggedIn,setIsLoggedIn] = useState(null)
	const [admin, setAdmin]=useState()

	const handleInputChange = (event)=>{
		const {name, value} = event.target
		setValues({
			...values,
			[name]:value
		})
	}

	projectAuth.onAuthStateChanged(function(user){
		if(user){setIsLoggedIn(true)
			Fetching().then((data) => {
				console.log( "look: " , data.admin)
				setAdmin(data.admin)
				})}
		else{setIsLoggedIn(false)}
	})
	
	const handleFormSubmit =(e)=>{ 
		e.preventDefault()
		SignUp(values)	
		
	}

	const signIn= ()=>{
		SignIn(values).then(user=> setIsLoggedIn(user))
	}

	console.log('out:' ,isloggedIn)
	
	const signOut= ()=>{
		SignOut()
	}	

	if(isloggedIn){
		if(admin){
			console.log("admin:" ,admin)
			return <Redirect to ='/admin/home' />}
		console.log('inis logged:' ,isloggedIn)
		return <Redirect to ='/' />
	}


	return(< div style={{display:'flex', flexDirection:'row', justifyContent:'space-around' }}>
		<div>
			<h2 style={{textAlign:'center'}}>SignUp</h2>
			<form onSubmit={handleFormSubmit} >
			<Input 
			name='fullName'
			label="Name:"
			placeholder='Name'
			id="Name"
			onChange={handleInputChange}  /> <br/>

			<Input 
			name="email"
			label="Email-Id:"
			type='email'
			placeholder='Email-Id'
			id="Email-Id"
			onChange={handleInputChange}  />

			<Input 
			name = 'mobileNumber'
			label="Mobile Number:"
			placeholder='Mobile Number'
			id="Mobile Number"
			onChange={handleInputChange}  /><br/>

			<Input 
			name = 'password'
			label="Password:"
			placeholder='Password'
			id="Password"
			onChange={handleInputChange}  />

			<br/>

			<Input 
			name='address'
			label="Address:"
			placeholder='Address'
			id="Address"
			onChange={handleInputChange}  />

			<button type='submit' > SignUp </button>
			</form>

		 </div>
	 
		 <div>
			<h2 style={{textAlign:'center'}}>Sign In</h2>

			<Input 
			name="email"
			label="Email-Id:"
			type='email'
			placeholder='Email-Id'
			id="Email-Id"
			onChange={handleInputChange}  />	<br/>

			<Input 
			name = 'password'
			label="Password:"
			placeholder='Password'
			id="Password"
			onChange={handleInputChange}  />

			<button onClick={signIn} >SignIn</button>
			<button onClick={signOut} >SignOut</button>
		 </div>
	 </div>
	)
}


export default Signup