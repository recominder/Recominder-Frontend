/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { Component } from 'react'
import './auth.css'
import Cookies from 'universal-cookie'
import { Link, Redirect } from 'react-router-dom'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      passwordConf: '',
      redirect: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    // checking login credentials
    const { email, password, passwordConf } = this.state
    const body = { email, password, passwordConf }
    console.log(JSON.stringify(body))

    fetch('https://recominder-api.herokuapp.com/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/JSON' },
      body: JSON.stringify(body),
    })
      .then((res) => {
        if (res.status === 200) {
          const cookies = new Cookies()
          cookies.set('nToken', res.token, { maxAge: 900000, httpOnly: true })
          // will activate the redirect component, sending user to the next page when the page renders
          this.setState({ redirect: true })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="registerContainer">
        { this.state.redirect && <Redirect to="/" /> }
        <div className="signup">
          <h2>Join Today</h2>
          <form action="https://recominder-api.herokuapp.com/register" method="post" onSubmit={e => this.handleSubmit(e)}>
            <input type="text" name="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
            <input type="text" name="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
            <input type="text" name="passwordConf" placeholder="Password" onChange={e => this.setState({ passwordConf: e.target.value })} value={this.state.passwordConf} />
            <button type="submit" name="register">Register</button>
            <span>
                Already Have an Account?
              <Link to="/login"> Login</Link>
            </span>
          </form>
        </div>
      </div>
    )
  }
}

export default Register
