import firebase from 'firebase'
import { connect } from 'react-redux'
import { projectFirestore } from "../../firebase/config"


const addBook = (values)=>{
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


export default addBook