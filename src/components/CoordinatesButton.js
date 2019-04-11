import React, { Component } from 'react'

export default class CoordinatesButton extends Component {
  clickEvent = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY])
  }

  render() {
    return(
      <button onClick={this.clickEvent}>Push me</button>
    )
  }
}
