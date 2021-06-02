import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from "react-redux";

import Input from '../input.js'
import { SignIn } from '../hooks/authHook.js';
import { createUser, fetchUser , lendedBooks } from '../../redux/actions/fetchUser'


const Signup = (props) => {

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
			props.lendedBooks()
		})
	}

	if (user) {
		return <Redirect to='/' />
	}

	return (< div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
		<div>
			<h2 style={{ textAlign: 'center' }}>SignUp</h2>
			<form onSubmit={handleFormSubmit} >
				<Input
					name='fullName'
					label="Name:"
					placeholder='Name'
					id="Name"
					onChange={handleInputChange} /> <br />

				<Input
					name="email"
					label="Email-Id:"
					type='email'
					placeholder='Email-Id'
					id="Email-Id"
					onChange={handleInputChange} />

				<Input
					name='mobileNumber'
					label="Mobile Number:"
					placeholder='Mobile Number'
					id="Mobile Number"
					onChange={handleInputChange} /><br />

				<Input
					name='password'
					label="Password:"
					placeholder='Password'
					id="Password"
					onChange={handleInputChange} />

				<br />

				<Input
					name='address'
					label="Address:"
					placeholder='Address'
					id="Address"
					onChange={handleInputChange} />

				<button type='submit' > SignUp </button>
			</form>

		</div>

		<div>
			<h2 style={{ textAlign: 'center' }}>Sign In</h2>

			<Input
				name="email"
				label="Email-Id:"
				type='email'
				placeholder='Email-Id'
				id="Email-Id"
				onChange={handleInputChange} />	<br />

			<Input
				name='password'
				label="Password:"
				placeholder='Password'
				id="Password"
				onChange={handleInputChange} />

			<button onClick={signIn} >SignIn</button>
		</div>
	</div>
	)
}

const mapStateToProps = (state) => {
	console.log('state: ', state)
	return { data: state.userData }
}

export default connect(mapStateToProps, { fetchUser, createUser, lendedBooks })(Signup)