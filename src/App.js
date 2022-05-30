import { hasPointerEvents } from '@testing-library/user-event/dist/utils'
import React, { Component } from 'react'
import image from './img/2.jpg'

export default class App extends Component {
  state ={
    FullName : "Moamed Amine Bouhari",
    Bio :"26/10/1992",
    Profession :"Web developper",
    visible : true,
    count : 0,
    }
   increment =()=> this.setState({count : this.state.count +1})
   decrement =()=> this.setState({count : this.state.count -1})
   handelShow =()=>this.setState({visible : !this.state.visible})

  render() {
    return (
     <div>
       <button onClick={this.handelShow}>{this.state.visible ? 'show' :'hide'}</button>
       { this.state.visible &&
      <div>
        <h1>counter :{this.state.count}</h1>
        <button onClick={this.increment}> + </button>
        <button onClick={this.decrement}> - </button>
        <h1>My name is : {this.state.FullName}</h1>
        <h1>Bio : {this.state.Bio}</h1>
        <h1>Profession :{this.state.Profession}</h1>
        <img src={image} alt ='image' />
      </div>
       }
     </div>
    )
  }
}
