import react,{useState, useEffect} from 'react'
import FetchingBooks from './hooks/booksFetch.js'

const books = []
 
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

const Books = ()=>{
	
const {docs} = FetchingBooks('books')
	
	console.log(docs)

	return docs.map( doc => {
		return 	<div className='item'>
			<img className="ui small image" 
			src="data:image/jpeg;base64,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"
			alt='bookimg' / >
			<div className="content" style={{border:`${2}px solid black` , margin:`${4}px`}}>
			 <div className="header">{doc.name}</div>
			 <div className="header">{doc.author}</div>
			  books details go here as per reqirement It is a long established fact that a reader will be distracted by the readable contgabjfbhajf hebfebahfjabkef jhebfjab
			  </div>
			
	</div>
	})

}

export default Books