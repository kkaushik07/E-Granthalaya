import React, { useState } from 'react'
import addBook from '../../hooks/addbook'
import Input from '../../input'

const AddBook = () => {

    const boxShadow = {boxShadow: `${0} ${4}px ${8}px ${0} rgba(${0}, ${0}, ${0}, ${0.2}),
	 ${0} ${6}px ${20}px ${0} rgba(${0}, ${0}, ${0}, ${0.19})` }

    const book = { Title: '', Author: "", Genre: "", Quantity: "" }

    const [values, setValues] = useState(book)

    const handleChange = (e) => {
        const { name, value } = e.target
        console.log(e.target.id, e.target.value)
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        addBook(values)
    }

    return  <div className='d-flex flex-column justify-content-center ui center aligned container  '  style={{ height: `${80}vh`,width:`${50}vw`}} >
        <form onSubmit={handleFormSubmit} className='ui form '  style={{padding:`${1.5}rem`, boxShadow:boxShadow.boxShadow}}>
            <h1 style={{ color :'white' ,  fontSize:`${3}rem` ,textShadow:`${-2}px ${2}px ${10}px green` }}>Add Book</h1>
            <div className=' field ' style={boxShadow} >
                <Input
                    name='Title'
                    type='text'
                    label='Title'
                    id='Title'
                    placeholder='Title'
                    value={values.Title}
                    onChange={handleChange} /></div>
            <div className=' field'  style={boxShadow} >
                <Input
                name='Author'
                type='text'
                label='Author'
                id='Author'
                placeholder='Author'
                value={values.Author}
                onChange={handleChange} /></div>
            <div className='  field'  style={boxShadow} >
                <Input
                name='Genre'
                type='text'
                label='Genre'
                id='Genre'
                placeholder='Genre'
                value={values.Genre}
                onChange={handleChange} /></div>
            <div className=' field'  style={boxShadow} >
                 <Input
                name='Quantity'
                type='text'
                label='Quantity'
                id='Quantity'
                placeholder='Quantity'
                value={values.Quantity}
                onChange={handleChange} /></div>

            <button type="submit" className='ui green submit button ' >Add Book</button>
        
        </form>
    </div>
}

export default AddBook