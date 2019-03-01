/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { Component } from 'react'
import './auth.css'
import Cookies from 'universal-cookie'
import { Link, Redirect } from 'react-router-dom'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      redirect: false,
      loginFail: false,
    }
  }

  handleSubmit(e) {
    e.preventDefault()
    // checking login credentials
    const { email, password } = this.state
    const body = { email, password }
    console.log(JSON.stringify(body))
    fetch('https://recominder-api.herokuapp.com/login', {
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
        } else {
          // renders a box stating the username or password is incorrect
          this.setState({ loginFail: true })
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  render() {
    return (
      <div className="signup">
        {this.state.redirect && <Redirect to="/" />}
        <h1>Join Today</h1>
        {this.state.loginFail && <div className="loginFail"><span>Username or Password Incorrect</span></div>}
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" name="email" placeholder="Email" onChange={e => this.setState({ email: e.target.value })} value={this.state.email} />
          <input type="text" name="password" placeholder="Password" onChange={e => this.setState({ password: e.target.value })} value={this.state.password} />
          <button type="submit" name="register">Login</button>
          <span>
            New around here?
            <Link to="/register"> Create an Account</Link>
          </span>
        </form>
      </div>
    )
  }
}

export default Login
