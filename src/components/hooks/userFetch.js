import {useEffect, useState} from 'react'
import {projectAuth,projectFirestore} from '../../firebase/config';



export const Fetching = async ()=>{
var docRef = projectFirestore.collection("users").doc(projectAuth.currentUser.uid);

 var result = await docRef.get()
	if (result) {
      //console.log("Document data:", result.data());
        let userData = result.data()
        return userData
    	} else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    	}
  console.log('func run complete')}

export const UserDetail = (name)=> {

    const[docs,setDocs]=useState([])
                 
     projectFirestore.collection("users").where("fullName", "==", name)
    .onSnapshot((snap)=>{
                let data = []
                snap.forEach(doc=>{
                data.push(doc.data())
                })
                setDocs(data)
            })
 return docs
}

