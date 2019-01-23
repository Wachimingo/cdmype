import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Patrocinadores.css";
import $ from 'jquery';
class Cartas extends Component {
  render() {
    function importAll(r) {
      let patrocinadores = {};
      r.keys().map((item, index) => {return patrocinadores[item.replace('./', '')] = r(item); });
      return patrocinadores;
    }
    const patrocinadores = importAll(require.context('../img/patrocinadores', false, /\.(png|jpe?g|svg)$/));
    $(window).on('load',function(){
      document.body.style.backgroundImage = null;
      document.body.style.background = "white";
    });
    return (
      <div className="contenedor">
        <a href={this.props.item.enlace}>
          <div className="card1">
            <div className="box">
              <div className="img">
                  <img src={patrocinadores[this.props.item.imgpatrocinador]} alt="pat"/>
              </div>
              <h2>{this.props.item.nombrepatrocinador}<br/></h2>
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Cartas;
