import { projectAuth, projectFirestore } from "../../firebase/config";

export const createUser = (values) => {
    return async function (dispatch, getState) {

        const { fullName, email, mobileNumber, password, address } = values

        // projectAuth.createUserWithEmailAndPassword(email, password).catch(err=> console.log(err))

        // const user = await projectFirestore.collection('users')
        // 	.doc(projectAuth.currentUser.uid)
        // 	.set({
        // 		fullName,email,mobileNumber,password,address
        // 	}).then(()=> projectAuth.currentUser ).catch(err=> console.log(err))


        //     dispatch( {
        //         type: 'CREATE_USER',
        //         payload :  user  })

        // }
        const user = await projectAuth.createUserWithEmailAndPassword(email, password)
            .then(() => {
                projectFirestore.collection('users')
                    .doc(projectAuth.currentUser.uid)
                    .set({
                        fullName, email, mobileNumber, password, address
                    })
                    .catch(err => console.log(err))
                return { fullName, email, mobileNumber, password, address }
            }).catch(err => console.log(err))

        console.log(user)
        dispatch({
            type: 'CREATE_USER',
            payload: user
        })

    }
}

export const search = (item) => {
    return async function (dispatch, getState) {
        var query = projectFirestore.collection(item.collection).where(item.criteria, '==', item.name)

        var result = await query.get().then((querySnapshot) => {
            const data = []
            querySnapshot.forEach(doc =>{ const doct = doc.data()
                doct.Id = doc.id
                data.push(doct)})
            return data
        })

        dispatch({ type: 'SEARCH', payload: result })
    }
}



export const fetchUser = (x) => {
    return async function (dispatch, getState) {
        var docRef = projectFirestore.collection("users").doc(x);
        var result = await docRef.get(x).then((doc) => {const doct = doc.data()
                    doct.Id = x
                    return doct
        }
        )

        dispatch({ type: 'LOGIN_USER', payload: result })
    }
}


export const signOut = () => {
    return {
        type: 'LOGOUT_USER',
        payload: null
    }
}

export const lendedBooks = (x) => {
    return async function (dispatch, getState) {
        var query = projectFirestore.collection('issueBooks').where('UserId', '==', x)

        var result = await query.get().then((querySnapshot) => {
            const data = []
            querySnapshot.forEach(doc => {
                const book = doc.data()
                book.issueId = doc.id
                data.push(book)
            })
            return data
        })

        dispatch({ type: 'LEND_BOOK', payload: result })
    }
}

export const reset = (x)=>{
    return{
        type: x,
        payload:[]
    }
}

