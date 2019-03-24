import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/ponente.css";
import {Link} from 'react-router-dom';
class PatrocinadorInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patrocinador: [],
    };
  }
  componentDidMount(){
    let id = this.props.match.params.id;

    fetch("http://backend.acdmype.org/getpatrocinadorinfo.php?id="+id, {mode:'cors'})
    .then(response => response.json())
    .then(data => this.setState({patrocinador: data[0]}));
  }
  render() {
    return (
      <div className="contaier-fluid">
        <div style={{height: "100px"}}></div>
        <div className="nombre">
          <h2>{this.state.patrocinador['nombrepatrocinador']}</h2>
        </div>
        <div className="panelizquierdo">
        <img src={`http://backend.acdmype.org/uploads/patrocinadores/${this.state.patrocinador['imgpatrocinador']}`} height="100px" width="100px" alt=""/>
        </div>
        <div className="panelderecho">
          <p>
            {this.state.patrocinador['acerca']}
            <br/>
            <a href={this.state.patrocinador['enlace']}>{this.state.patrocinador['enlace']}</a>
          </p>
        </div>
        <Link to="/Home/Patrocinadores" className="btn btn-info">Volver</Link>
      </div>
    );
  }
}

export default PatrocinadorInfo;
