import {useState,useEffect} from 'react'
import {Redirect,Link} from 'react-router-dom'
import {projectFirestore} from '../firebase/config.js'
import Card from './card.js'

 const Catagory = ()=>{ 	

 	
 	

	return (<>
	<div className='ui link cards'>
	<Card genre='Chem1' />
	<Card genre='Chem1'/>
	<Card genre='maths1'/>
	<Card genre='maths1'/>

	</div>
	
	</>)
}

export default Catagory