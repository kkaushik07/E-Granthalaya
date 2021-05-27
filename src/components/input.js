import React,{useState} from 'react'

const Input = (props)=>{

	return <>
	<label for={props.name}>{props.label}</label>
	<input 
	name ={props.name}
	type= {props.type} 
	id={props.id}
	placeholder = {props.placeholder}
	value = {props.value}
	onChange={props.onChange} />
	</>	
}

export default Input