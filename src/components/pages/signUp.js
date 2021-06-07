import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import Input from '../input.js'
import { SignIn } from '../hooks/authHook.js';
import { createUser, fetchUser, lendedBooks } from '../../redux/actions/fetchUser'


const Signup = (props) => {

	const boxShadow = {boxShadow: `${0} ${4}px ${8}px ${0} rgba(${0}, ${0}, ${0}, ${0.2}),
	 ${0} ${6}px ${20}px ${0} rgba(${0}, ${0}, ${0}, ${0.19})`}

	const initialValues = {
		fullName: "",
		email: "",
		mobileNumber: '',
		address: '',
		password: ""
	}

	const user = props.data

	const [values, setValues] = useState(initialValues)

	const handleInputChange = (event) => {
		const { name, value } = event.target
		setValues({
			...values,
			[name]: value
		})
	}


	const handleFormSubmit = (e) => {
		e.preventDefault()
		props.createUser(values)
	}


	const signIn = () => {
		SignIn(values).then((x) => {
			console.log(x)
			props.fetchUser(x)
			props.lendedBooks(x)
		})
	}

	if (user) {
		return <Redirect to='/' />
	}
	
	
	
	
	return (<div className='d-flex flex-column justify-content-center ui center aligned container  ' style={{ height: `${90}vh` }}>
		<div className="ui two column very relaxed stackable grid">
			<div className='column' style={boxShadow}>
				<form onSubmit={handleFormSubmit} className='ui form' >
					<h2 style={{ textAlign: 'center' }}>SignUp</h2>
					<div className='field' >
						<Input
							name='fullName'
							label="Name:"
							placeholder='Name'
							id="Name"
							onChange={handleInputChange} />
					</div>

					<div className=' field' >
						<Input
							name="email"
							label="Email-Id:"
							type='email'
							placeholder='Email-Id'
							id="Email-Id"
							onChange={handleInputChange} />
					</div>
					<div className='field' >
						<Input
							name='mobileNumber'
							label="Mobile Number:"
							placeholder='Mobile Number'
							id="Mobile Number"
							onChange={handleInputChange} />
					</div>
					<div className=' field' >
						<Input
							name='password'
							label="Password:"
							placeholder='Password'
							id="Password"
							onChange={handleInputChange} />

					</div>
					<div className=' field' >
						<div className="ui labeled input">
							<div className="ui label">Address:</div>
							<textarea
								name='address'
								rows='3'
								placeholder='Address'
								id="Address"
								onChange={handleInputChange} /></div>
					</div>
					<button type='submit' className='ui blue submit button ' > SignUp </button>
				</form>

			</div>

			<div className='ui form column ' style={boxShadow} >
					<h2 style={{ textAlign: 'center' }}>Sign In</h2>
					<div className=' field' >
						<Input
							name="email"
							label="Email-Id:"
							type='email'
							placeholder='Email-Id'

							onChange={handleInputChange} /></div>
					<div className='field' >
						<Input
							name='password'
							label="Password:"
							type='password'
							placeholder='Password'

							onChange={handleInputChange} /></div>

					<button className='ui blue submit button' onClick={signIn} >SignIn</button>


				</div >
			</div>
		</div>


	)
}

const mapStateToProps = (state) => {
	console.log('state: ', state)
	return { data: state.userData }
}

export default connect(mapStateToProps, { fetchUser, createUser, lendedBooks })(Signup)