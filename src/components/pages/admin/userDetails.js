import { useState } from "react"
import { connect } from "react-redux"
import { search, lendedBooks,reset } from "../../../redux/actions/fetchUser"
import Input from "../../input"
import LendedBooks from '../../bookDisplay'

const UserDetails = (props) => {
    const [name, setName] = useState('')
    const handleChange = (e) => {
        setName(e.target.value)
    }
    const books = props.books
    const user  = props.user 
    const returnedBooks = ()=>{
        if (books.length > 0){console.log(books)
          var y =  books.filter((x) => x.hasOwnProperty('ReturnedOn'))
         console.log(y)}
         else{
            props.lendedBooks(user[0].Id)
            
         }
    }

    return <div>
        <Input
            name='Name'
            type='text'
            label='Email: '
            id='Name'
            placeholder='email'
            onChange={handleChange} />
        <a onClick={() => {
            props.search({ name, collection: 'users', criteria: 'email' })
            props.reset('LEND_BOOK')
        }}>search</a>

        {user && < div>
            <h3>{user[0].fullName}</h3>
            <h3>{user[0].email}</h3>
            <h3>{user[0].mobileNumber}</h3>
            <button onClick={() => { if (props.books.length === 0) { props.lendedBooks(user[0].Id) } }}>Lended Books</button>
            <button onClick={returnedBooks}>Returned Books</button>
            <LendedBooks />
        </div>}
    </div>
}

const mapStateToProps = state => {
    console.log(state.searchResult)
    return ({
        user: state.searchResult,
        books: state.lendBook
    })
}

export default connect(mapStateToProps, { search, lendedBooks, reset })(UserDetails)