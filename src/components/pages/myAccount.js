import React from "react";
import LendedBooks from "../bookDisplay";
import UserDisplay from "../UserDisplay";

const Account = () => {


    return  <div style={{margin:`${25}px`}}>
     <div className='d-flex flex-row ' style={{ marginTop: `${30}px`, }}>
        <UserDisplay />
        <div className='d-flex justify-content-md-between flex-column ui items ' style={{ padding: `${10}px`, flexGrow: '4' }} >
            <div className='ui items'>

                <LendedBooks />
            </div>
        </div>
        </div>
        </div>
}

export default Account