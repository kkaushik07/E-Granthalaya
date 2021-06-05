import React, { useState } from 'react'
import {Link} from 'react-router-dom'
import CatFetch from './hooks/catFetch'

const Card = (props) => {

    return <div className="card">
       
            <img  className='image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNUbJzHsKxJZMFOttSrteR5_KbuLk89kvhw&usqp=CAU"/>
           
        <div class="content">
        <Link to={'/catagories/'+props.genre} >{props.genre}</Link>
        </div>
    </div>
}

export default Card