import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/ponente.css";
import Joshua from "../img/joshua.jpg";
import {Link} from 'react-router-dom';
class CreadoresInfo extends Component {
  renderInfo(){
    let id = this.props.match.params.id;
    if (id === '1') {
      return(
        <div>
          <div style={{height: "100px"}}></div>
          <div className="nombre" style={{width: "380px"}}>
            <h2>Joshua Alexander Herrera Guillen</h2>
          </div>
          <div className="panelizquierdo">
              <img src={Joshua} alt="" width="190px"/>
              <br/>
              Estudiante de Ingenieria en Sistemas y Computacion
          </div>
          <div className="panelderecho">
          <br/>
          <br/>
            <h5>Datos Generales</h5>
            <p>
              Edad: 23 años
              <br/>
              Correo: alexanderguillen.adoc@gmail.com
            </p>
            <h5>Resumen</h5>
            <p>
              Soy estudiante de la Universidad Tecnologica de El Salvador, actualmente estoy cursando mi 7° ciclo, he trabajado anteriormente
              en Teleperformance, Taca airlines y he tenido experiencia como freelancer haciendo aplicaciones para "La Coalicion Latinoamericana"
              y para DentalTeca.
              <br/>
              Me apasiona poder crear cosas y tratar de emprender, he participado en Pixels el Salvador e Innovatics y actualmente he ganado la
              competencia nacional de Huawei en el track de Cloud Computing, y participare en las finales regionales llevadas a cabo en Mexico.
            </p>
          </div>
          <Link to="/Home/AcercaDe" className="btn btn-info">Volver</Link>
        </div>
      );
    }
  }
  render() {
    return (
      <div>
        {this.renderInfo()}
      </div>
    );
  }
}

export default CreadoresInfo;
