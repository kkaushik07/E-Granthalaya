import React, { useState } from 'react'

const Input = (props) => {

	return <>
		<div className="ui labeled input">
			<div className="ui label">{props.label}</div>
				<input
					name={props.name}
					type={props.type}
					id={props.id}
					placeholder={props.placeholder}
					value={props.value}
					onChange={props.onChange} />
			
		</div>
	</>
}

export default Input