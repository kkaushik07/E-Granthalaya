import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import FetchingBooks from '../../hooks/booksHook'

const BooksLot = (props) => {

    const { docs } = FetchingBooks('books')

    useEffect (()=>{
        const docs1 = docs.sort(dynamicSort('Title'))
        setSortedDocs(docs1)
    },[docs])

    
    
    const [sortedDocs, setSortedDocs] = useState([])

    function dynamicSort(property) {

        return function compare(a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result
        }
    }


     const handleClick = (x) =>{
        let sort = docs.sort(dynamicSort(x))
        setSortedDocs([...sort])
     }



    return <div className='jumbotron'>
        <table className='ui celled table'>
            <thead>
                <tr>
                   <th onClick={() => { handleClick('Title')   }} >Title</th>
                    <th onClick={() => { handleClick('Author') }} >Author</th>
                    <th onClick={() => { handleClick('Genre')  }}>Genre</th>
                    <th onClick={() => { handleClick('Quantity')}} >Quantity Available</th>
                </tr>
            </thead>
            {sortedDocs.map(doc => {
                return <tr>
                    <td>{doc.Title}</td>
                    <td>{doc.Author}</td>
                    <td>{doc.Genre}</td>
                    <td>{doc.Quantity}</td>
                </tr>

            })}
            <tr></tr>
        </table>
    </div>


}

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, {})(BooksLot)