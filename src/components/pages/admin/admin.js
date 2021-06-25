import { connect } from "react-redux"
import { Redirect } from "react-router"
import Card from "../../card"


const AdminHome = (props)=>{

    const user = props.data

    if (user) {
		if (user.hasOwnProperty('admin')){
            return (<div><h1>this is the admin route</h1>
                <div className= 'ui link cards' >
                    <Card genre='add book'  link='/admin/addBook'  />
                    <Card genre ='user detail' link='/admin/userDetails'  />
                    <Card genre = 'check books lot' link='/admin/books' />
                </div>
                </div>)
        }}
    
   return(<Redirect to ='/' />)
    

}
const mapStateToProps = state => {
	console.log(state)
	return { data: state.userData }
}

export default connect(mapStateToProps)(AdminHome)