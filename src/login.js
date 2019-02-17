import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: "",
            verify: ""
        }
    }
    render() {
       return(
         <div className="signup">
             <h2>Join Today</h2>
                 <form action="https://recominder-api.herokuapp.com/register" method="post" onSubmit={(e) => {e.preventDefault()}}>
                     <input type="text" name="email" placeholder="Email" onChange={e => this.setState({email: e.target.value})} value={this.state.email}/>
                     <input type="text" name="password" placeholder="Password" onChange={e => this.setState({password: e.target.value})} value={this.state.password}/>
                     <button type="submit" name="register">Register</button>
                     <span>Already Have an Account? <Link to="/register">Sign Up</Link></span>
                 </form>
         </div>
        )
}
}

export default Login