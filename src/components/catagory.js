import Card from './card.js'

 const Catagory = ()=>{ 	

 	
	return (<div className='jumbotron'>
	<div className='card-deck'> 
	<Card genre='Science'  link='/catagories/Science'/>
	<Card genre='Science' link='/catagories/Science'/>
	<Card genre='maths1' link='/catagories/maths1'/>
	<Card genre='maths1'link='/catagories/maths1'/>

	 </div> 
	
	</div>)
}

export default Catagory