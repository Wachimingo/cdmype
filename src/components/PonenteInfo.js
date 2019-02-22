import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/ponente.css";
import {Link} from 'react-router-dom';
import $ from 'jquery';
class PonenteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ponente: [],
    };
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    fetch("https://cdmype.000webhostapp.com/getponenteinfo.php?id="+id, {mode:'cors'})
    .then(response => response.json())
    .then(data => this.setState({ponente: data[0]}));
    // fetch("http://192.168.1.20/cdmypephp/getponenteinfo.php?id="+id, {mode:'cors'})
    // .then(response => response.json())
    // .then(data => this.setState({ponente: data[0]}));
  }
  render() {
    $(window).on('load',function(){
      document.body.style.backgroundImage = null;
      document.body.style.background = "white";
    });
    return (
      <div>
        <div style={{height: "100px"}}></div>
        <div className="nombre">
          <h2>{this.state.ponente['nombreponente']}</h2>
        </div>
        <div className="panelizquierdo">
          <img src={`https://cdmype.000webhostapp.com/uploads/ponentes/${this.state.ponente['foto']}`} height="100px" width="100px" alt="FotoPonente"/>
          {/*<img src={`http://192.168.1.20/cdmypephp/uploads/ponentes/${this.state.ponente['foto']}`} height="100px" width="100px" alt="FotoPonente"/>*/}
          <p>{this.state.ponente['puesto']}</p>
        </div>
        <div className="panelderecho">
          <p>{this.state.ponente['descripcion']}</p>
        </div>
        <Link to="/Home/Ponentes" className="btn btn-info">Volver</Link>
      </div>
    );
  }
}

export default PonenteInfo;
