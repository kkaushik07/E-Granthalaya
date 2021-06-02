import { connect } from 'react-redux'
import  firebase from 'firebase';
import { projectAuth, projectFirestore } from '../firebase/config.js'
import Card from './card.js'
import CatFetch from './hooks/catFetch.js'
import { lendBook } from './hooks/addbook.js';
import { lendedBooks } from '../redux/actions/fetchUser.js';


const Books =(props)=>{


	const{docs}=CatFetch(props.id)

	
	return  docs.map( doc => {
		const values = {Title:doc.Title , Author: doc.Author , UserId: projectAuth.currentUser.uid , issuedOn: firebase.firestore.Timestamp.now()  }
		return 	<div>
			<Card genre={doc.genre}/>
			<button
			 onClick={()=>{console.log(values)
			lendBook(values)
			props.lendedBooks()
			}
			}>Lend</button>
		</div>
	})
}

const mapStateToProps = state=>{
	console.log(state)
	return state
}

export default connect(mapStateToProps,{lendedBooks})(Books)