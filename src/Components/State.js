import React, { Component } from 'react'
import '../index.css';
export default class STATE extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count : 0
      }
    }

    handlerIncre = () =>{
        this.setState({
            count: this.state.count + 1
        })
      }

    handlerdecre = () => {
        this.setState({
            count: this.state.count - 1
        })
      }
  render() {
    const {count} = this.state;
    return (
      <div>
        <h1>Count: {count}</h1>
        <button onClick={this.handlerIncre} className='btn'>+</button>
        <button onClick={this.handlerdecre} disabled={count===0 ? true : false} className='btn'>-</button>
      </div>
    )
  }
}
