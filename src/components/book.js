import { connect } from 'react-redux'
import firebase from 'firebase';
import { projectAuth, projectFirestore } from '../firebase/config.js'
import Card from './card.js'
import CatFetch from './hooks/catFetch.js'
import { lendBook } from './hooks/booksHook';
import { lendedBooks } from '../redux/actions/fetchUser.js';
import { Redirect } from 'react-router-dom';
import { useEffect } from 'react';



const Books = (props) => {

	const user = props.data

	useEffect(()=>{
		props.lendedBooks(user.Id)
	})
	const { docs } = CatFetch(props.id)

	if (!user){
		return docs.map(doc => {
			return <>
			<Card genre="lend" Title={doc.Title} Author={doc.Author}  link='/signup'  />
			</>
		})
	}

	
	const books = (props.issued).filter((x) => !x.hasOwnProperty('ReturnedOn'))
	console.log(books)

		var today = new Date().toLocaleDateString()
		var Duedate = new Date()
		 Duedate.setDate(new Date().getDate() +7)
		// var Duedate =  date.toLocaleString()

		console.log ('dates', today ,Duedate)
		
  
	return docs.map(doc => {
		const values = {
			Title: doc.Title,
			Author: doc.Author,
			UserId: user.Id,
			issuedOn: today ,
			Duedate : Duedate,
			bookId : doc.bookId
		}
		return < >
			<Card genre={doc.genre} Title={doc.Title} Author={doc.Author} work='Lend' onClick={() => {
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
				}  />
			 {/* <button className="btn btn-primary" 
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
				}>Lend</button>  */}
		</>
	})
}

const mapStateToProps = state => {
	console.log(state)
	return { issued: state.lendBook,
		data: state.userData
	 }
}


export default connect(mapStateToProps, { lendedBooks })(Books)