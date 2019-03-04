/* eslint-disable react/jsx-filename-extension */
/* eslint-disable semi */
import React, { Component, match } from 'react'

class User extends Component {
  constructor(props) {
    super(props)
    this.state = {
      waterData: '',
      workoutData: '',
      userId: match.params.id,
    }
  }

  render() {
    return (
      <div className="dataContainer">

      </div>
    )
  }
}

export default User
