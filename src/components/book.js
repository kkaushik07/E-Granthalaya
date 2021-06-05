import { connect } from 'react-redux'
import firebase from 'firebase';
import { projectAuth, projectFirestore } from '../firebase/config.js'
import Card from './card.js'
import CatFetch from './hooks/catFetch.js'
import { lendBook } from './hooks/addbook.js';
import { lendedBooks } from '../redux/actions/fetchUser.js';


const Books = (props) => {


	const { docs } = CatFetch(props.id)
	const books = (props.issued).filter((x) => !x.hasOwnProperty('ReturnedOn'))
	console.log(books)

		var today = new Date().toLocaleDateString()
		var Duedate = new Date()
		Duedate.setDate(new Date().getDate() +7).toLocaleString()

		console.log ('dates', today ,Duedate)

	return docs.map(doc => {
		const values = {
			Title: doc.Title,
			Author: doc.Author,
			UserId: projectAuth.currentUser.uid,
			issuedOn: today ,
			Duedate : Duedate,
			bookId : doc.bookId
		}
		return <div>
			<Card genre={doc.genre} />
			<button
				onClick={() => {
					if (books.length > 0) {
						const book = books.filter((book) => book.Title === doc.Title)
						if (book.length === 0) {
							lendBook(values)
							props.lendedBooks(values.UserId)
						} else { alert('book already issued') }
					}
					else {
						lendBook(values)
						props.lendedBooks(values.UserId)
					}
				}
				}>Lend</button>
		</div>
	})
}

const mapStateToProps = state => {
	console.log(state)
	return { issued: state.lendBook }
}

export default connect(mapStateToProps, { lendedBooks })(Books)