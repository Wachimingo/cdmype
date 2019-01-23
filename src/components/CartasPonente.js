import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Patrocinadores.css";
import $ from 'jquery';
import {Link} from 'react-router-dom';
class Cartasponente extends Component {
  render() {
    function importAll(r) {
      let ponentesFoto = {};
      r.keys().map((item, index) => {return ponentesFoto[item.replace('./', '')] = r(item); });
      return ponentesFoto;
    }
    const ponentesFoto = importAll(require.context('../img/ponentes', false, /\.(png|jpe?g|svg)$/));
    $(window).on('load',function(){
      document.body.style.backgroundImage = null;
      document.body.style.background = "white";
    });
    return (
      <div className="contenedor">
        <Link to={{pathname:`/Home/Ponente/${this.props.item.idponente}`}}>
          <div className="card1">
            <div className="box">
              <div className="img">
                  <img src={ponentesFoto[this.props.item.foto]} alt="preview de ponente"/>
              </div>
              <h2>{this.props.item.nombreponente}<br/></h2>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Cartasponente;
