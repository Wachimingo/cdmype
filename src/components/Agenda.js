import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import evento1 from '../img/agenda/evento1.png';
import evento2 from '../img/agenda/evento2.png';
import Plx from "./PlxEffect.js";
class Agenda extends Component {
  render() {

    return (
      <div className="container-fluid ">
          <div style={{height: "50px"}}/>
          <Plx titulo="Cena Grupal" cuerpo = "asdl;fhsdfhsafdiosdfis" img = {evento1} fecha="21 de Enenero"/>

          <Plx titulo="Planeacion" cuerpo = "jgsaduigfsduiugadiufs" img = {evento2} fecha="1 de Febrero"/>

          <div style={{height: "150px"}}/>
      </div>
    );
  }
}

export default Agenda;
