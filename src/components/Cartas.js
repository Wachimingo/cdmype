import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Patrocinadores.css";
class Cartas extends Component {
  render() {
    function importAll(r) {
      let patrocinadores = {};
      r.keys().map((item, index) => { patrocinadores[item.replace('./', '')] = r(item); });
      return patrocinadores;
    }
    const patrocinadores = importAll(require.context('../img/patrocinadores', false, /\.(png|jpe?g|svg)$/));
    return (
      <div className="contenedor">
      <div className="card1">
      <div className="box">
      <div className="img">
          <img src={patrocinadores[this.props.item.ruta]}/>
      </div>
      <h2>{this.props.item.nombre}<br/><span>{this.props.item.industria}</span></h2>
      <p>{this.props.item.descripcion}</p>
      <span>
          <ul>
              <li><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
              <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
          </ul>
      </span>
  </div>
</div>
</div>
    );
  }
}

export default Cartas;
