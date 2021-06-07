import { useState } from "react"
import { connect } from "react-redux"
import { search, lendedBooks, reset } from "../../../redux/actions/fetchUser"
import Input from "../../input"
import LendedBooks from '../../bookDisplay'

const UserDetails = (props) => {
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
    const returnedBooks = () => {
        if (books.length > 0) {
            console.log(books)
            var y = books.filter((x) => x.hasOwnProperty('ReturnedOn'))
            console.log(y)
        }
        else {
            props.lendedBooks(user[0].Id)

        }
    }

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
                <button className='ui green submit button ' onClick={() => {
                    props.search({ name, collection: 'users', criteria: 'email' })
                    props.reset('LEND_BOOK')
                }}>Search</button>
            </div>


            <div className='d-flex flex-row ' style={{ marginTop: `${30}px` , }}>
                <div className=' mr-auto' style={{ marginTop: `${30}px`,padding: `${10}px`, boxShadow: boxShadow.boxShadow , height:`${100}%` }}>
                    <h1> Peronal Information </h1>
                    <div className="ui middle aligned divided list">
                        <div className="item">

                            <div className="content">
                                <div className="header">Name</div>{user && <span>{user[0].fullName}</span>}
                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">Email</div>{user && <span>{user[0].email}</span>}

                            </div>
                        </div>
                        <div className="item">
                            <div className="content">
                                <div className="header">MobileNumber</div>{user && <span>{user[0].mobileNumber}</span>}
                            </div>
                        </div>
                    </div>

                    <button className=' ui green button ' onClick={() => { if (props.books.length === 0) { props.lendedBooks(user[0].Id) } }}>Lended Books</button>
                    <button className=' ui green button ' onClick={returnedBooks}>Returned Books</button>
                </div>
                <div className='d-flex justify-content-md-between flex-column ui items ' style={{padding: `${10}px`,flexGrow:'4'}} >
                    <LendedBooks />
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

    )
}

const mapStateToProps = state => {
    console.log(state.searchResult)
    return ({
        user: state.searchResult,
        books: state.lendBook
    })
}

export default connect(mapStateToProps, { search, lendedBooks, reset })(UserDetails)