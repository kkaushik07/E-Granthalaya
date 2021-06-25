import firebase from 'firebase'
import { useState,useEffect } from 'react'
import { projectAuth, projectFirestore } from "../../firebase/config"


export const addBook = (values)=>{
    const{ Title,Author,Genre,Quantity} = values 
   projectFirestore.collection('books').doc().set({
    Title,Author,Genre,Quantity
   }).then(()=>{alert(Title+"added")})
}

export const lendBook = (values) => {
        
        
        var docRef = projectFirestore.collection("issueBooks")
        var result = docRef.add(values).then(()=> alert(values.Title +'lended')).catch((err)=>console.log(err))
        var countRef =  projectFirestore.collection('books').doc(values.bookId).update({Quantity: firebase.firestore.FieldValue.increment(-1)})
    }

export const returnBook = (doc) => {
    var docRef = projectFirestore.collection("issueBooks").doc(doc.issueId)
    var result = docRef.update({ReturnedOn: firebase.firestore.Timestamp.now()})
    .then(()=>alert('book returned'))
    .catch(err=>console.log(err))
    var counter =  projectFirestore.collection('books').doc(doc.bookId)
                    .update({Quantity: firebase.firestore.FieldValue.increment(1)})

}


export const sendFine = (props) =>{
    
    var docRef = projectFirestore.collection('users').doc(props.Id)

    var result = docRef.update({totalFine : props.totalFine}).then(()=> alert(props.totalFine)
        )
}

const FetchingBooks = (collection)=>{

	const [docs,setDocs]=useState([])

	useEffect(()=>{
		var docRef = projectFirestore.collection(collection)
			docRef.onSnapshot((snap)=>{
				let data = []
				snap.forEach(doc=>{
				const book = doc.data()
				 book.bookId = doc.id
				data.push(book)
				})
				setDocs(data)
			})
		},[collection])

	return {docs} 
}

export default FetchingBooks



