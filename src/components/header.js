import { Link } from 'react-router-dom'
import '../App.css';
import { SignOut } from './hooks/authHook.js'
import { projectAuth } from '../firebase/config.js'
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

	const signOut = () => {
		SignOut()
		props.signOut()
	}
	console.log(props.data)

	if (user) {
		if (user.hasOwnProperty('admin')) {
			return (

				<div class="ui green inverted secondary massive stackable menu">

					<Link to='/' className='item'>
						<i class="home icon"></i>
					    Home</Link>
					<Link to={user ? '/my-account' : '/signup'} className='item'> My Account </Link>
					<Link to='/admin/userDetails' className='item'>Search User </Link>
					<Link to='/admin/addBook' className='item'>Add Book</Link>
					{user && <Link to='/' onClick={signOut} className=' right item'> SignOut </Link>}
				</div>

			)
		}
	}



	return (<div>

		<div className=" ui massive violet inverted secondary stackable menu">
			<Link to='/' className='item'>
				<i class="home icon"></i>
					    Home</Link>
			<Link to={user ? '/my-account' : '/signup'} className='item'> My Account </Link>
			<Link to='/assignedbooks' className='item'>Assigned Books</Link>
			{!user && <Link to='/signup' className='right item'> SignIn </Link>}
			{user && <Link to='/' onClick={signOut} className=' right item'> SignOut </Link>}


		</div>
	</div>)
}

const mapStateToProps = state => {
	console.log(state)
	return { data: state.userData }
}

export default connect(mapStateToProps, { signOut })(Header)