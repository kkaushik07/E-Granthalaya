import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CatFetch from './hooks/catFetch'

const Card = (props) => {


    const boxShadow = {
    boxShadow: ` rgb(${0} ${32} ${249}) ${0}px ${1}px ${15}px ${4}px`
    }
  

        return <div className="ui card" style={{maxWidth: `${20}rem`,maxHeight: `${30}rem` , boxShadow:boxShadow.boxShadow}}>
            <img className="card-img-top" src={props.img}  style={{maxHeight: `${15}rem` }} alt="image"/>
                <div className="card-body"  style={{maxWidth: `${20}rem`,maxHeight: `${10}rem`  }}>
                    {props.Title && <h5 className="card-title">{props.Title}</h5> }
                    {props.work ? <button onClick={props.onClick} className="btn btn-primary"  style={{maxWidth: `${12}rem`  }}>{props.work}</button>:<Link to={ props.link} className="btn btn-primary"  style={{maxWidth: `${12}rem` , margin:'auto' }}>{props.genre}</Link>}
                </div>
      </div>
}

export default Card