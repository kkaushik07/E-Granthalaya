import {useState,useEffect} from 'react'
import {projectFirestore} from '../../firebase/config';

const FetchingBooks = (collection)=>{

	const [docs,setDocs]=useState([])

	useEffect(()=>{
		var docRef = projectFirestore.collection(collection)
			docRef.onSnapshot((snap)=>{
				let data = []
				snap.forEach(doc=>{
				const book = doc.data()
				 book.bookId = doc.id()
				data.push(book)
				})
				setDocs(data)
			})
		},[collection])

	return {docs} 
}

export default FetchingBooks