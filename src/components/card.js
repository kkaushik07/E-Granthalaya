import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CatFetch from './hooks/catFetch'

const Card = (props) => {


    const boxShadow = {
    boxShadow: ` rgb(${0} ${32} ${249}) ${0}px ${1}px ${15}px ${4}px`
    }
    // return <> 
    // {props.link ? <Link to={props.link} className="ui small card" >
    //     <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNUbJzHsKxJZMFOttSrteR5_KbuLk89kvhw&usqp=CAU" />

    //     <div class=" center aligned content">
    //         {props.genre}</div></Link> : <Link to={'/catagories/' + props.genre} className="ui card">
    //     <img className='' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNUbJzHsKxJZMFOttSrteR5_KbuLk89kvhw&usqp=CAU" />

    //     <div class="center aligned content">
    //         {props.genre} </div></Link>}</>




        return <div class="card" style={{maxWidth: `${12}rem`, boxShadow:boxShadow.boxShadow}}>
            <img class="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnNUbJzHsKxJZMFOttSrteR5_KbuLk89kvhw&usqp=CAU" alt="Card image cap"/>
                <div class="card-body"  style={{maxWidth: `${12}rem`  }}>
                    {props.Title && <h5 class="card-title">{props.Title}</h5> }
                    {props.work ? <button onClick={props.onClick} className="btn btn-primary"  style={{maxWidth: `${12}rem`  }}>{props.work}</button>:<Link to={ props.link} className="btn btn-primary"  style={{maxWidth: `${12}rem` , margin:'auto' }}>{props.genre}</Link>}
                </div>
      </div>
}

export default Card