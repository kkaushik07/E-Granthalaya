import { projectFirestore } from "../../firebase/config"


const addBook = (values)=>{
    const{ Title,Author,Genre,Quantity} = values 
   projectFirestore.collection('books').doc().set({
    Title,Author,Genre,Quantity
   }).then(()=>{alert(Title+"added")})
}

export default addBook