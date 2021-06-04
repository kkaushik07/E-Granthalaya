import {useEffect} from 'react'
import { connect } from 'react-redux'
import { lendedBooks } from '../redux/actions/fetchUser.js'
import { returnBook } from './hooks/addbook.js'

const style = {
	textAlign:'center',
	display: "flex",
	flexDirection: 'row',
	justifyContent: 'space-evenly',
	height: `${70}px`,
	width:`${100}vw`,
	border: `${2}px solid black`,
	margin :`${4}px`
}

const LendedBooks = (props)=>{
	
	const books = props.books
	
	return books.map( doc => {
		if (!doc.Return ){
		return 	<div className='item'>
			<img className="ui small image" 
			src='yeah.jpeg' alt='bookimg' />
			<div className="content" style={{border:`${2}px solid black` , margin:`${4}px`}}>
			 <div className="header">{doc.Title}</div>
			 <div className="header">{doc.Author}</div>
			 <div className="header">{doc.issuedOn.toDate().toDateString()}</div>
			 
			<button onClick={()=>{console.log(doc.issueId)
				returnBook(doc)
				props.lendedBooks()}
			} >Return</button>
			  </div>
			
	</div>}
	})

}

const mapStateToProps = state=>{
	console.log(state)
	return {books: state.lendBook }
}

export default connect(mapStateToProps,{lendedBooks})(LendedBooks)