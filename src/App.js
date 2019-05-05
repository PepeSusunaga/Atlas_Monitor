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

      myData: {
        labels: [],
        datasets: [
          {
            label: "Atlas",
            backgroundColor: 'rgba(0,0,0,0)',
            borderColor: "#862d59",
            data: []
          }
        ]
      },

    };
  }

  addData = () => {
    fetch("http://10.104.105.132").then((respuesta)=> {
      respuesta.text().then((textofinal)=>{
        this.setState({
          myData: {
            labels: [...this.state.myData.labels, new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes() + ":" +new Date(Date.now()).getSeconds()],
            datasets: [
              {
                ...this.state.myData.datasets[0],
                data: [...this.state.myData.datasets[0].data, Number(textofinal)]
              }
            ]
          }
        });
      })
    })

  };

componentDidMount=()=>{
  setInterval(this.addData, 1000)
}
  render() {
    return (
      <div className="container">
        <h1 className="title">
          Atlas Monitor Body Assistant{" "}
          <span aria-label="emoji" role="img">
            ⚡
          </span>
        </h1>
        <h2 className="tituloGrafica">
          Gráfica de Artritis{" "}</h2>

        <h2 className="test-label">{this.state.newTask}</h2>
        <Line data={this.state.myData} />
        <Button addData={this.addData} text="Actualizar Datos" />
      </div>
    );
  }
}

export default App;
