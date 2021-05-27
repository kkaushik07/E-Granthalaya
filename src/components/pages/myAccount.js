import React from "react";
import { Redirect } from "react-router-dom";
import { projectAuth } from "../../firebase/config";
import Header from "../header";
import UserDisplay from "../UserDisplay";

const Account = ()=>{

// if(!projectAuth.currentUser){
//     return <Redirect to ='/signup' />
// }
    return <div>
        <UserDisplay/>
    </div>
}

export default Account