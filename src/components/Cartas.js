import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Patrocinadores.css";
import {Link} from 'react-router-dom';
class Cartas extends Component {
  render() {
    return (
      <div className="">
          <Link to={{pathname:`/Home/Patrocinador/${this.props.item.idpatrocinador}`}}>
          <div className="card1">
            <div className="box">
              <div className="img">
                  <img src={`http://backend.acdmype.org/uploads/patrocinadores/${this.props.item.imgpatrocinador}`} alt=""/>
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
