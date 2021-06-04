import {useState,useEffect} from 'react'
import {projectFirestore} from '../../firebase/config';


 const CatFetch= (id)=> {

    const[docs,setDocs]=useState([])
                 

    useEffect(()=>{
     projectFirestore.collection("books").where("Genre", "==", id)
    .onSnapshot((snap)=>{
                let data = []
                snap.forEach(doc=>{
                  const book = doc.data()
                  book.bookId = doc.id
                 data.push(book)
                })
                setDocs(data)
            })
    },['books'])
 return {docs}
}
//export const idSend = (props)=> CatFetch(props.id)

export default CatFetch