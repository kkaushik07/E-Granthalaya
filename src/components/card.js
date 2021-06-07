import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CatFetch from './hooks/catFetch'

const Card = (props) => {

    return <div className="card">

            <img  className='ui small image' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNUbJzHsKxJZMFOttSrteR5_KbuLk89kvhw&usqp=CAU"/>

        <div class="content">
        {props.link ? <Link to={props.link} >{props.genre}</Link> :<Link to={'/catagories/'+props.genre} >{props.genre}</Link>}
        
        </div>
    </div>

//     return <div class="card" style={{width: `${18}rem`}}>
//         <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNUbJzHsKxJZMFOttSrteR5_KbuLk89kvhw&usqp=CAU" alt="Card image cap"/>
//             <div class="card-body">
//                 <h5 class="card-title">props.Title</h5>
//                 <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//                 <Link to={props.link} class="btn btn-primary">{props.work}</Link>
//             </div>
//   </div>
}

export default Card