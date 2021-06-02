import { useState } from "react"
import { connect } from "react-redux"
import { search } from "../../../redux/actions/fetchUser"
import Input from "../../input"

const UserDetails = (props)=>{
    const [name,setName] = useState('')
    const handleChange=(e)=>{
        setName(e.target.value)
    }

    
    return <div>
        <Input 
            name = 'Name'
            type= 'text'
            label= 'Email: '
            id='Name'
            placeholder = 'email'
            onChange={handleChange}/>
            <a onClick={()=>{props.search({name,collection:'users'})}}>search</a>

       { props.user && < div>
        <h3>{props.user[0].fullName}</h3>
        <h3>{props.user[0].email}</h3>
        <h3>{props.user[0].mobileNumber}</h3>
        </div>}
    </div>
}

const mapStateToProps = state =>{
    console.log(state.searchResult)
    return ({user: state.searchResult})
}

export default connect(mapStateToProps,{search}) (UserDetails)