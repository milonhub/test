import React, { Component } from 'react'

export default class Bind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }

      this.handlerIncrease =this.handlerIncrease.bind(this);
    }

   handlerIncrease() {
    this.setState({
        count: this.state.count +1
    })

}
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handlerIncrease}>Increase</button>
      </div>
    )
  }
}

