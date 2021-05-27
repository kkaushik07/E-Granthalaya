import {useState,useEffect} from 'react'
import {projectFirestore} from '../../firebase/config';


 const CatFetch= (id)=> {

    const[docs,setDocs]=useState([])
                 

    useEffect(()=>{
     projectFirestore.collection("books").where("name", "==", id)
    .onSnapshot((snap)=>{
                let data = []
                snap.forEach(doc=>{
                data.push(doc.data())
                })
                setDocs(data)
            })
    },['books'])
 return {docs}
}
//export const idSend = (props)=> CatFetch(props.id)

export default CatFetch