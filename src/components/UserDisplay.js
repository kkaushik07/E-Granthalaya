import React from 'react'

import '../App.css';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';


const UserDisplay = (props) => {

	const user = props.user
	const boxShadow = {
		boxShadow: `${0} ${4}px ${8}px ${0} rgba(${0}, ${0}, ${0}, ${0.2}),
    ${0} ${6}px ${20}px ${0} rgba(${0}, ${0}, ${0}, ${0.19})`
	}

	if (!user) {
		return <Redirect to='/signup' />
	}

	// 	return	Object.keys(props.user).map((key) => <div>  <h2> {key}: {props.user[key]}</h2>
	// 			{/* <Input name={key}
	// 			label={key}
	// 			placeholder={key}
	// 			id={key}
	// 			value={user[key]}
	// onChange={handleInputChange} /> } */}
	// 		 <a><i className="fas fa-pencil-alt" onClick={()=>SetEdit(key)} ></i></a></div>);

	return (<>
		<div className=' mr-auto' style={{ marginTop: `${30}px`, padding: `${10}px`, boxShadow: boxShadow.boxShadow, height: `${100}%` }}>
			<h1> Peronal Information </h1>
			<div className="ui middle aligned divided list">
				<div className="item">
					<div className="content">
						<div className="header">Name</div>{user && <span>{user.fullName}</span>}
					</div>
				</div>
				<div className="item">
					<div className="content">
						<div className="header">Email</div>{user && <span>{user.email}</span>}

					</div>
				</div>
				<div className="item">
					<div className="content">
						<div className="header">MobileNumber</div>{user && <span>{user.mobileNumber}</span>}
					</div>
				</div>
				{user.totalFine > 0 && <div className="item">
					<div className="content">
						<div className="header">Total Fine</div>{user && <span>{user.totalFine}</span>}
					</div>
				</div>}
			</div>

		</div>


	</>)
}

const mapStateToProps = state => {
	console.log(state)
	return { user: state.userData }
}

export default connect(mapStateToProps)(UserDisplay)

