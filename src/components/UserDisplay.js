import React, {useState,useEffect} from 'react'
import Input from "./input";
import {Fetching} from './hooks/userFetch.js'
import '../App.css';


const UserDisplay = ()=>{

	const data = {fullName:'1' , img:'2', email: "3",mobileNumber:'4',address:"5" }//initial data
	const [edit,SetEdit] = useState(null)
	const [user,setUser]= useState(data) //saving user data
	useEffect(()=>{
		 Fetching().then((data) => {setUser(data)
				console.log('usestate'+ data)})
	},[]) 
	
	const handleInputChange =(e)=>{
		const {name,value} = e.target
		setUser({
			...data,
			[name]:value
		})
	}


	

	return	Object.keys(user).map((key) => <div>  <h2> {key}: {user[key]}</h2>
			{/* <Input name={key}
			label={key}
			placeholder={key}
			id={key}
			value={user[key]}
onChange={handleInputChange} /> } */}
		 <a><i className="fas fa-pencil-alt" onClick={()=>SetEdit(key)} ></i></a></div>);


	// return(<div  >
			
	// 		{edit !=='fullName' ? <h2>Name: {user.fullName}</h2>:<Input name='fullName'
	// 		label="Name:"
	// 		placeholder='Name'
	// 		id="Name"
	// 		value={user.fullName}
	// 		onChange={handleInputChange} /> }
	// 		 <a><i className="fas fa-pencil-alt" onClick={()=>SetEdit('fullName')} ></i></a>
	// 		<h2>Email: {user.email}</h2>
	// 		<a><i className="fas fa-pencil-alt" ></i></a>
	// 		<h2>Mobile: {user.mobileNumber}</h2>
	// 		<a><i className="fas fa-pencil-alt" ></i></a>
	// 		<h2>Address: {user.address}</h2>
	// 		<a><i className="fas fa-pencil-alt" ></i></a>
	// 		<button onClick={()=>SetEdit('fullName')} >update</button>
	// 		</div>
	// 	)

	// if (edit === true){
	// 	return(
	// 		< div style={{display:'flex', flexDirection:'row', justifyContent:'space-around' }}>
	// 	    <div>
	// 		<h2 style={{textAlign:'center'}}>update</h2>
	// 		<form  >
	// 		<Input 
	// 		name='fullName'
	// 		label="Name:"
	// 		placeholder='Name'
	// 		id="Name"
	// 		value={user.fullName}
	// 		onChange={handleInputChange}  /> <br/>

	// 		<Input 
	// 		name="email"
	// 		label="Email-Id:"
	// 		type='email'
	// 		placeholder='Email-Id'
	// 		id="Email-Id"
	// 		value={user.email}
	// 		onChange={handleInputChange}  />

	// 		<Input 
	// 		name = 'mobileNumber'
	// 		label="Mobile Number:"
	// 		placeholder='Mobile Number'
	// 		id="Mobile Number"
	// 		value={user.mobileNumber}
	// 		onChange={handleInputChange}  /><br/>

			
	// 		<br/>

	// 		<Input 
	// 		name='address'
	// 		label="Address:"
	// 		placeholder='Address'
	// 		id="Address"
	// 		type="textArea"
	// 		value={user.address}
	// 		onChange={handleInputChange}  />

	// 		<button type='submit' > SignUp </button>
	// 		</form>
	// 		</div>
	// 	 </div>
	// 	)
	// }
}

export default UserDisplay