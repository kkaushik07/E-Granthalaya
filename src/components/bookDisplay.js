import {useEffect} from 'react'
import { connect } from 'react-redux'
import { lendedBooks } from '../redux/actions/fetchUser.js'
import { returnBook } from './hooks/addbook.js'
import Item from './itemDisplay.js'

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

	const boxShadow = {boxShadow: `${0} ${4}px ${8}px ${0} rgba(${0}, ${0}, ${0}, ${0.2}),
		${0} ${6}px ${20}px ${0} rgba(${0}, ${0}, ${0}, ${0.19})`}
	
	return books.map( doc => {
		if (!doc.ReturnedOn ){
		// const Duedate = doc.Duedate
		const today = new Date().getTime()
		 
		// let fine = 0
		// if (today>Duedate){
		// 	fine = ((today - Duedate)/(1000*60*60*24))*10
		// }
		
		
		
		return  <div className='ui item ' style={boxShadow}>
			
			
			<Item Title={doc.Title} Author={doc.Author}
			//  Duedate={doc.Duedate}
			//  Fine ={fine}
			/>
			 

			 {/* <img className="ui small image" 
			 src='yeah.jpeg' alt='bookimg' />
			 <div className="content" style={{border:`${2}px solid black` , margin:`${4}px`}}>
			  <div className="header">{doc.Title}</div>
			  <div className="header">{doc.Author}</div>
			  <div className="header">{doc.issuedOn}</div>
			  <div className="header">{doc.Duedate.toDate().toLocaleDateString()}</div>
			  <div className="header">{fine}</div> */}

			 
			<button className='ui right violet button' style={{height:`${50}px`,width:`${110}px`, margin:'auto' }}  onClick={()=>{console.log(doc.issueId)
				returnBook(doc)
				props.lendedBooks(doc.UserId)}
			} >Return</button>
			  </div>
			
	// </div>
}
	})

}

const mapStateToProps = state=>{
	console.log(state)
	return {books: state.lendBook }
}

export default connect(mapStateToProps,{lendedBooks})(LendedBooks)