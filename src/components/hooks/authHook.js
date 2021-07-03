
import {projectAuth,projectFirestore} from '../../firebase/config';



export const SignIn = async (values) =>{
	var result = await projectAuth.signInWithEmailAndPassword(values.email,values.password)
	
	if(result){
		console.log(result)
		return result.user.uid 
	}
	else{
		console.log('error')
	}
	
}

export const SignOut =()=>{
	projectAuth.signOut().then(()=>{
		
	}).catch(err=> console.log(err))
}


