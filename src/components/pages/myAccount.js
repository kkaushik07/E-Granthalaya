import React from "react";
import LendedBooks from "../bookDisplay";
import UserDisplay from "../UserDisplay";

const Account = ()=>{


    return <div>
        <UserDisplay/>
        <div className='ui items segments'>
        <LendedBooks/>
        </div>
        
    </div>
}

export default Account