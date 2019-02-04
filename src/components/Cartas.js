import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Patrocinadores.css";
import $ from 'jquery';
import {Link} from 'react-router-dom';
class Cartas extends Component {
  render() {
    $(window).on('load',function(){
      document.body.style.backgroundImage = null;
      document.body.style.background = "white";
    });
    return (
      <div className="contenedor">
          <Link to={{pathname:`/Home/Patrocinador/${this.props.item.idpatrocinador}`}}>
          <div className="card1">
            <div className="box">
              <div className="img">
                  {/*<img src={`https://cdmype.000webhostapp.com/uploads/patrocinadores/${this.props.item.imgpatrocinador}`} alt="pat"/>*/}
                  <img src={`http://localhost/cdmypephp/uploads/patrocinadores/${this.props.item.imgpatrocinador}`} alt="pat"/>
              </div>
              <h2>{this.props.item.nombrepatrocinador}<br/></h2>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Cartas;
