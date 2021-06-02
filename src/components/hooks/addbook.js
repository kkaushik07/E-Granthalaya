import { projectFirestore } from "../../firebase/config"


const addBook = (values)=>{
    const{ Title,Author,Genre,Quantity} = values 
   projectFirestore.collection('books').doc().set({
    Title,Author,Genre,Quantity
   }).then(()=>{alert(Title+"added")})
}

export const lendBook = (values) => {
    
        var docRef = projectFirestore.collection("issueBooks")
        var result = docRef.add(values).then(()=> alert(values.Title,'lended')  ).catch((err)=>console.log(err))
    }


export default addBook