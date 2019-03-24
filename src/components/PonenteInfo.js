import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/ponente.css";
import {Link} from 'react-router-dom';
class PonenteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ponente: [],
    };
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    fetch("http://backend.acdmype.org/getponenteinfo.php?id="+id, {mode:'cors'})
    .then(response => response.json())
    .then(data => this.setState({ponente: data[0]}));
  }
  render() {
    return (
      <div>
        <div style={{height: "100px"}}></div>
        <div className="nombre">
          <h2>{this.state.ponente['nombreponente']}</h2>
        </div>
        <div className="panelizquierdo">
        <img src={`http://backend.acdmype.org/uploads/ponentes/${this.state.ponente['foto']}`} height="150px" width="150px" alt=""/>
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
