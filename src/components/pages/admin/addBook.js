import React, { useState } from 'react'
import addBook from '../../hooks/addbook'
import Input from '../../input'

const AddBook = ()=>{

    const book ={Title:'',Author:"",Genre:"",Quantity:""}

    const [values,setValues]=useState(book)

    const handleChange=(e)=>{
        const {name, value} = e.target
        console.log(e.target.id,e.target.value)
        setValues({
            ...values,
            [name]:value
        })
    }

    const handleFormSubmit =(e)=>{ 
		e.preventDefault()
		addBook(values)}

    return <div>
        <form onSubmit={handleFormSubmit} >
        <Input 
            name = 'Title'
            type= 'text'
            label= 'Title'
            id='Title'
            placeholder = 'Title'
            value = {values.Title}
            onChange={handleChange}/>
        <Input 
            name = 'Author'
            type= 'text'
            label= 'Author'
            id='Author'
            placeholder = 'Author'
            value = {values.Author}
            onChange={handleChange}/>
        <Input 
            name = 'Genre'
            type= 'text'
            label= 'Genre'
            id='Genre'
            placeholder = 'Genre'
            value = {values.Genre}
            onChange={handleChange}/>
        <Input 
         name = 'Quantity'
         type= 'text'
         label= 'Quantity'
         id='Quantity'
          placeholder = 'Quantity'
          value = {values.Quantity}
          onChange={handleChange}/>

        <button  type="submit"  >Add Book</button>
        </form>
    </div>
}

export default AddBook