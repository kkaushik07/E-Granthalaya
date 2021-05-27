import { useState ,useEffect} from "react"
import Card from "../../card"


const AdminHome = ()=>{
    
    return (<div><h1>this is the admin route</h1>
    <div className= 'ui link cards' >
        <Card genre='add book'  link='/admin/addBook'  />
        <Card genre ='user detail' link='/admin/userDetails'  />
        <Card genre = 'check books lot' link='/admin/books' />
    </div>
    </div>)
    

}

export default AdminHome