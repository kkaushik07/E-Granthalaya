import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import FetchingBooks from '../../hooks/booksHook'

const BooksLot = (props) => {

    const { docs } = FetchingBooks('books')

    useEffect (()=>{
        setSortedDocs(docs)
    },[docs])

    
    
    const [sortedDocs, setSortedDocs] = useState([])

   
    console.log('sortedDocs',sortedDocs)
    
  

    function dynamicSort(property) {

        console.log(property)

        return function compare(a, b) {
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
           console.log(property)
            return result
        }
    }

    console.log('docs', docs)


    return <div className='jumbotron'>
        <table className='ui celled table'>
            <thead>
                <tr>

                    <th onClick={() => {
                        let sort = docs.sort(dynamicSort('Title'))
                        setSortedDocs(sort)
                    }} >Title</th>
                    <th onClick={() => {
                        let sort = docs.sort(dynamicSort('Author'))
                        setSortedDocs(sort)
                    }} >Author</th>
                    <th onClick={() => { docs.sort(dynamicSort('Quantity')) }} >Quantity Available</th>
                    <th onClick={() => { docs.sort(dynamicSort('Genre')) }}>Genre</th>
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