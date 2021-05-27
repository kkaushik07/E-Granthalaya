import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import CatFetch from './hooks/catFetch'

const Card = (props) => {

//     const handleClick=(e)=>{
//         var x= e.target.id
//         console.log(x) 
//    }
   

    return <div className="card">
        <Link to={props.link} >
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNUbJzHsKxJZMFOttSrteR5_KbuLk89kvhw&usqp=CAU"/>
            </Link>
        <div class="content">
        <Link to={'/catagories/'+props.genre} >{props.genre}</Link>
        </div>
    </div>
}

export default Card