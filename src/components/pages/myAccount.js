import React, { useEffect, useState } from "react";
import LendedBooks from "../bookDisplay";
import UserDisplay from "../UserDisplay";

const Account = () => {
     const [totalFine,setTotalFine] = useState(0)
     function Fine (netFine){
         setTotalFine(netFine)
     }
     console.log(totalFine)
    return  <div style={{margin:`${25}px`}}>
     <div className='d-flex flex-row ' style={{ marginTop: `${30}px`}}>
        <UserDisplay />
        <div className='d-flex justify-content-md-between flex-column ui items ' style={{ padding: `${10}px`, flexGrow: '4' }} >
            <div className='ui items'>
                <LendedBooks sendFine={Fine} />
            </div>
        </div>
        </div>
        </div>
}

export default Account