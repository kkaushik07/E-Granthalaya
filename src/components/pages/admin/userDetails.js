import { useEffect, useState } from "react"
import { connect } from "react-redux"
import {returnBook} from '../../hooks/booksHook'
import { userSearch, lendedBooks, reset } from "../../../redux/actions/fetchUser"

import { Redirect } from "react-router"

const UserDetails = (props) => {

    const data =props.data

    
    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value)
    }

    


    const boxShadow = {
        boxShadow: `${0} ${4}px ${8}px ${0} rgba(${0}, ${0}, ${0}, ${0.2}),
    ${0} ${6}px ${20}px ${0} rgba(${0}, ${0}, ${0}, ${0.19})`
    }
    const books = props.books
    const user = props.user
       


    if (data) {
		if (data.hasOwnProperty('admin')){
    return (<>
        <div style={{ margin: `${20}px` }}>
            <h1 style={{ color: 'white', fontSize: `${2.5}rem`, textShadow: `${-2}px ${2}px ${10}px green`, marginTop: `${5}px`, textAlign: 'center' }}>Search User</h1>
            <div className='d-flex flex-row  justify-content-center form-row'  >
                <div className='form group col-md-6' >
                    <div className='input-group' style={boxShadow}>
                        <div className="input-group-prepend">
                            <div class="input-group-text">Email</div>
                        </div>
                        <input className='form-control'
                            name='Name'
                            type='text'
                            label='Email: '
                            id='Name'
                            placeholder='email'
                            onChange={handleChange} />
                    </div>
                </div>
                <button className='ui green submit button ' onClick={  () => {
                     
                    props.userSearch({ name, collection: 'users', criteria: 'email' })
                    // console.log('from button',user[0])
                     //props.lendedBooks(user[0].Id)    
                }}>userSearch</button>
            </div>

        
         <div className='d-flex flex-row ' style={{ marginTop: `${30}px` , }}>
                <div className=' mr-auto' style={{ marginTop: `${30}px`,padding: `${10}px`, boxShadow: boxShadow.boxShadow , height:`${100}%` }}>
                    <h1> Peronal Information </h1>
                    <div className="ui middle aligned divided list">
                        <div className="item">

                            <div className="content">
                                <div className="header">Name</div>{user?.length>0 && <span>{user[0].fullName}</span>}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Email</div>{user?.length>0 && <span>{user[0].email}</span>}

                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">MobileNumber</div>{user?.length>0 && <span>{user[0].mobileNumber}</span>}
                            </div>
                        </div>
                    </div>

                    </div>
                <div className='d-flex justify-content-md-between flex-column ui items ' style={{padding: `${10}px`,flexGrow:'4'}} >
                   <table className='ui celled table'>
                   <thead>   
                    <tr>
                        
                        <th>Title</th>
                        <th>Author</th>
                        <th>Issue Date</th>
                        <th>Due Date</th>
                        <th>Status</th>
                        <th>Fine</th>
                        <th></th>
                    </tr>
                    </thead>
                {books.map(book => {
        const Duedate = new Date(book.Duedate.seconds*1000)
        const today = new Date()
        
        

        let fine = 0
        let text = ''
        let button = ''
        if (!book.ReturnedOn){
		 if (today.getTime()>Duedate.getTime()){
		 	fine = (Math.floor((today.getTime() - Duedate.getTime())/(1000*60*60*24)))*10	
            text = 'Return'
            button = <button className=' ui green button ' onClick= {()=>{returnBook(book)
				props.lendedBooks(user[0].Id)}} >{text}</button>
		 }}else{fine = "N/A"
                text = 'Returned'
                button = <button className=' ui green button ' disabled >{text}</button> }
                   return <tr>
                    <td>{book.Title}</td>   
                    <td>{book.Author}</td>   
                    <td>{book.issuedOn}</td>   
                    <td>{Duedate.toLocaleDateString()}</td>
                    {book.ReturnedOn ? <td> {text}</td>:<td> Active</td> }
                    <td>{fine}</td> 
                    {<td>{button}</td>}  
                   </tr>
                })
                }    
                   </table>
                </div>
            </div> 
        </div>


        {/* < div >
                <h3>Name:</h3>
                {user && <h3>{user[0].fullName}</h3>}
                <h3>Email:</h3>
                {user && <h3>{user[0].email}</h3>}
                <h3>MobileNumber:</h3>
                {user && <h3>{user[0].mobileNumber}</h3>}
                <button onClick={() => { if (props.books.length === 0) { props.lendedBooks(user[0].Id) } }}>Lended Books</button>
                <button onClick={returnedBooks}>Returned Books</button>
                <LendedBooks />
            </div> */}
    </>

    )}}

    return(<Redirect to ='/' />)

}

const mapStateToProps = state => {
     console.log(state)
    return ({
        data: state.userData,
        user: state.searchResult,
        books: state.lendBook
    })
}

 


export default connect(mapStateToProps, { userSearch, lendedBooks })(UserDetails)