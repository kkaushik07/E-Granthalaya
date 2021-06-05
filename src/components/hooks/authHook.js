
import {projectAuth,projectFirestore} from '../../firebase/config';

// export const SignUp = (values)=>{

// 	const {fullName,email,mobileNumber,password,address} = values

// 	projectAuth.createUserWithEmailAndPassword(email, password)
// 		.then(()=>{
// 		projectFirestore.collection('users')
// 		.doc(projectAuth.currentUser.uid)
// 		.set({
// 			fullName,email,mobileNumber,password,address
// 		})
// 		.catch(err=>console.log(err))
// 		}).catch(err=> console.log(err))

// 		const user = projectAuth.currentUser
// 		console.log(user)
	
// 	return user
// }

export const SignIn = async (values) =>{
	var result = await projectAuth.signInWithEmailAndPassword(values.email,values.password)
	// .then((userCredential)=>{
	// 	const user = userCredential
	// 	console.log(user)
	// 	return user
	// })
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
		console.log('signedOut')
	}).catch(err=> console.log(err))
}


