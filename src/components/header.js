import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import '../App.css';
import { SignOut } from './hooks/authHook.js'
import { signOut } from '../redux/actions/fetchUser';


const Header = (props) => {


	
	const user = props.data


	const signOut = () => {
		SignOut()
		props.signOut()
	}
	

	if (user) {
		if (user.hasOwnProperty('admin')) {
			return (<div>
				<div className="ui massive green inverted secondary stackable menu">

					<Link to='/' className='item'>
						<i className="home icon"></i>
					    Home</Link>
					<Link to={user ? '/my-account' : '/signup'} className='item'><i className='user icon'></i> My Account </Link>
					<Link to='/admin/userDetails' className='item'> Search User </Link>
					<Link to='/admin/addBook' className='item'>Add Book</Link>
					{user && <Link to='/' onClick={signOut} className=' right item'><i className='sign out alternate icon'></i> SignOut </Link>}
				</div>
			</div>
			)
		}
	}



	return (<div>

		<div className=" ui massive violet inverted secondary stackable menu">
			<Link to='/' className='item'>
				<i className="home icon"></i>
					    Home</Link>
			<Link to='/category' className='item'> <i className='th icon'></i> Category</Link>
			<Link to={user ? '/my-account' : '/signup'} className='item'> <i className='user icon'></i>My Account </Link>
			{/* {user && <Link to='/assignedbooks' className='item'>Assigned Books</Link>} */}
			{!user && <Link to='/signup' className='right item'><i className='sign in alternate icon'></i> SignIn </Link>}
			{user && <Link to='/' onClick={signOut} className=' right item'><i className='sign out alternate icon'></i> SignOut </Link>}


		</div>
	</div>)
}

const mapStateToProps = state => {

	return { data: state.userData }
}

export default connect(mapStateToProps, { signOut })(Header)