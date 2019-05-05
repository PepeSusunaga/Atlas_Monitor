import React, { Component } from "react";
import { Line } from "react-chartjs-2";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/button";

class App extends Component {
  handleTaskChange = event => this.setState({ newTask: event.target.value });

  constructor(props) {
    super(props);

    this.state = {
      newTask: "sdfasdf",
      myData: {
        labels: ["1", "2", "3", "4", "5", "6"],
        datasets: [
          {
            label: "Atlas",
            data: [1, 3, 22, 9, 12, 11]
          }
        ]
      }
    };
  }

  addData = () => {
    this.setState({
      myData: {
        labels: [...this.state.myData.labels, Date.now()],
        datasets: [
          {
            ...this.state.myData.datasets[0],
            data: [...this.state.myData.datasets[0].data, Math.random() * 30]
          }
        ]
      }
    });
  };

  render() {
    return (
      <div className="container">
        <h1 className="title">
          Hello world{" "}
          <span aria-label="emoji" role="img">
            🔥
          </span>
        </h1>
        <input
          value={this.state.newTask}
          onChange={this.handleTaskChange}
          type="text"
          className="new-task"
        />
        <h2 className="test-label">{this.state.newTask}</h2>
        <Line data={this.state.myData} />
        <Button addData={this.addData} text="Este es mi primer boton" />
      </div>
    );
  }
}

export default App;
