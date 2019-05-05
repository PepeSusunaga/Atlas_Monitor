import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';
import logo from './logo.svg';
import './App.css';

class Button extends Component{
  render(){
    return(
      <button>{this.props.text}</button>
    )
  }
}

class App extends Component {
  handleTaskChange = (event) =>
  this.setState({ newTask: event.target.value })

  constructor(props) {
      super(props)

      this.state = {
         newTask: "sdfasdf",
         myData: {
           labels: ["1","2","3","4", "5","6"],
           datasets: [


             {
               label: "Atlas",
               data: [
                 1, 3, 22, 9, 12, 11
               ]
             },
             {
               label: "Atlas 2",
               backgroundColor: "#34323",
               data: [
                 12, 31, 1, 29, 12, 13
               ]
             }
           ]

      }
}
   }

  render(){
    return(
      <div className="container">
     <h1 className="title">
        Hello world <span aria-label="emoji" role="img">🔥</span>
     </h1>
     <Button text="Este es mi primer boton" />
     <input value={this.state.newTask} onChange={this.handleTaskChange} type="text" className="new-task"/>
    <h2 className="test-label">{ this.state.newTask}</h2>
    <Line data={this.state.myData} />
  </div>
);
  }
}

export default App;
