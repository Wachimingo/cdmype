import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import Cartas from "./Cartas.js";
import $ from 'jquery';
class Patrocinadores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patrocinadores: [],
    };
  }
  componentDidMount(){
    fetch("https://cdmype.000webhostapp.com/getpatrocinadores.php", {mode:'cors'})
    .then(response => response.json())
    .then(data => this.setState({patrocinadores: data}));
    // fetch("http://192.168.1.20/cdmypephp/getpatrocinadores.php", {mode:'cors'})
    // .then(response => response.json())
    // .then(data => this.setState({patrocinadores: data}));
  }

  render() {
    $(window).on('load',function(){
      document.body.style.backgroundImage = null;
      document.body.style.background = "white";
    });
    const {patrocinadores} = this.state;
    return (
      <div>
          <div className="contenedor">
            {patrocinadores.map((item, i) =>
              <Cartas item={item} key={i} />
            )}
          </div>
      </div>
    );
  }
}

export default Patrocinadores;
