import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Patrocinadores.css";
import Joshua from "../img/joshua.jpg";
import {Link} from 'react-router-dom';
class AcercaDe extends Component {
  render() {
    return (
      <div className="contenedor contaier-fluid">
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
          <Link to={{pathname:`/Home/AcercaDe/${1}`}}>
          <div className="card1" style={{marginLeft: "33vh", marginTop: "5vh"}}>
            <div className="box">
              <div className="img">
                  <img src={Joshua} alt=""/>
              </div>
              <h2>Joshua Alexander Herrera Guillen<br/></h2>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default AcercaDe;
