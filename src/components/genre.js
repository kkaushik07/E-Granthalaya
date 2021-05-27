import Card from './card.js'
import CatFetch from './hooks/catFetch.js'


const Genre =(props)=>{


	const{docs}=CatFetch(props.id)
 	console.log(docs)

	
	return  docs.map( doc => {
		return 	<Card genre={doc.name}/>
	})
}


export default Genre