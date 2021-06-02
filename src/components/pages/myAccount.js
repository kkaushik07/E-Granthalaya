import React from "react";
import { Redirect } from "react-router-dom";
import { projectAuth } from "../../firebase/config";
import Books from "../bookDisplay";
import Header from "../header";
import UserDisplay from "../UserDisplay";

const Account = ()=>{


    return <div>
        <UserDisplay/>
        <Books/>
    </div>
}

export default Account