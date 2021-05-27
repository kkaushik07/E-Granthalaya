import {useState,useEffect} from 'react'
import {projectFirestore} from '../../firebase/config';

const FetchingBooks = (collection)=>{

	const [docs,setDocs]=useState([])

	useEffect(()=>{
		var docRef = projectFirestore.collection(collection)
			docRef.onSnapshot((snap)=>{
				let data = []
				snap.forEach(doc=>{
				data.push(doc.data())
				})
				setDocs(data)
			})
		},[collection])

	return {docs} 
}

export default FetchingBooks