import React, { Component } from 'react';


export default class Form extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         changedValue: ""
      }
     
    }
    

    handlerClick = (e) => {
          this.setState({
               changedValue: e.target.value
               
          },()=>{console.log(e.target.value);})
          console.log(e.target.value);
      }
      
      

  render() {
    return (
        <div>
            <input type='text' onChange={this.handlerClick}></input>
            <p>{this.state.changedValue}</p>
        </div>
      
    )
  }
}
