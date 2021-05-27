import { useState } from "react"
import { UserDetail } from "../../hooks/userFetch"
import Input from "../../input"

const UserDetails = ()=>{
    const [name,setName] = useState('')
    const handleChange=(e)=>{
        setName(e.target.value)
    }
    
    return <div>
        <Input 
            name = 'Name'
            type= 'text'
            label= 'Name'
            id='Name'
            placeholder = 'Name'
            onChange={handleChange}/>
            <a onClick={()=>{console.log(UserDetail(name))}}>search</a>
    </div>
}

export default UserDetails