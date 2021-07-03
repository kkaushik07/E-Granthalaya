import {useEffect} from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { lendedBooks , fetchUser } from '../redux/actions/fetchUser.js'
import  {sendFine , returnBook}   from './hooks/booksHook'
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
	let user = props.user
	let  totalFine = 0

	useEffect(()=>{
		console.log(user)
		props.lendedBooks(user.Id)
	},[])
	useEffect(()=>{
	sendFine({totalFine, Id:user.Id})
	props.fetchUser(user.Id)
	},[totalFine])

	const history = useHistory()
	const navigateTo = () => history.push('/category')
	const books = props.books

	const boxShadow = {boxShadow: `${0} ${4}px ${8}px ${0} rgba(${0}, ${0}, ${0}, ${0.2}),
		${0} ${6}px ${20}px ${0} rgba(${0}, ${0}, ${0}, ${0.19})`}
	
	return books.map( doc => {
		if (!doc.ReturnedOn ){
			

		const Duedate = new Date(doc.Duedate.seconds*1000)
		const today = new Date()
		 
		 let fine = 0
		 if (today.getTime()>Duedate.getTime()){
		 	fine = (Math.floor((today.getTime() - Duedate.getTime())/(1000*60*60*24)))*10
			totalFine = totalFine+fine
		 }
		
		
		
		return  <div className='ui item ' style={boxShadow}>
			
			
			<Item Title={doc.Title} Author={doc.Author}
			 Duedate={Duedate.toLocaleDateString()}
			  Fine ={fine}
			/>
			 

	
			 
			<button className='ui right violet button' style={{height:`${50}px`,width:`${110}px`, margin:'auto' }}  onClick={()=>{ 
				if(fine>0){navigateTo()}else{
				returnBook(doc)
				props.lendedBooks(doc.UserId)}}
			} >Return</button>
			  </div>
			
	// </div>
}
	})

}

const mapStateToProps = state=>{

	return {books: state.lendBook ,
			user: state.userData}
}

export default connect(mapStateToProps,{lendedBooks , fetchUser})(LendedBooks)