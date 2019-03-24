import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Agenda.css";
import {Link} from 'react-router-dom';
import $ from 'jquery';
class Agenda extends Component {
  constructor(props){
    super(props);
    this.state={
      agenda:[],
      miercoles:[],
    };
  }
  componentDidMount(){
  /*Fetch para obtener toda la agenda de la bd*/
  fetch("http://backend.acdmype.org/getagenda.php",{ mode:'cors'})
     .then(response => response.json())
     .then(data => this.setState({agenda: data}));
  }
  render() {
    /*Array agenda*/
    const {agenda} = this.state;
    /*Cambiar las agendas.map por las siguientes arrays*/
    let miercoles = agenda.filter(id => id.dia === 'Miercoles');
    let jueves = agenda.filter(id => id.dia === 'Jueves');
    let viernes = agenda.filter(id => id.dia === 'Viernes');
    /*funcion para cambiar el fondo*/
    $(window).on('load',function(){
      document.body.style.backgroundImage = null;
      document.body.style.background = "white";
    });
    /*Funcion para crear la tabla de la agenda, toma un array como parametro, en este caso llamado JSON*/
    function renderMiercoles(){
      return miercoles.map((value,key) => {
        return (
               <tr key={value.idagenda} className="cuerpo">
                  <td width=''>{value.hora}</td>
                  <td width=''>
                    {value.contenido}
                    <br/>
                    <Link to={{pathname:`/Home/Ponente/${value.idponente}`}}>{value.nombreponente}</Link>
                  </td>
              </tr>
        )
      })
    }
    function renderJueves(){
      return jueves.map((value,key) => {
        return (
               <tr key={value.idagenda} className="cuerpo">
                  <td width=''>{value.hora}</td>
                  <td width=''>
                    {value.contenido}
                    <br/>
                    <Link to={{pathname:`/Home/Ponente/${value.idponente}`}}>{value.nombreponente}</Link>
                  </td>
              </tr>
        )
      })
    }
    function renderViernes(){
      return viernes.map((value,key) => {
        return (
               <tr key={value.idagenda} className="cuerpo">
                  <td width=''>{value.hora}</td>
                  <td width=''>
                    {value.contenido}
                    <br/>
                    <Link to={{pathname:`/Home/Ponente/${value.idponente}`}}>{value.nombreponente}</Link>
                  </td>
              </tr>
        )
      })
    }
    return (
      <div className="container-fluid contenedoragenda">
          <div>
            <img src={`http://backend.acdmype.org/uploads/logo.png`} className="rotulo bloque" alt=""/>
            <div className="bloque contenido">
              <h3>Programa</h3>
            </div>
          </div>
            <div className="dia">
                <h3>Miercoles</h3>
            </div>
          <div className="divTabla resume">
              <table className="table tabla table-striped" id="agenda">
                <thead>
                  <tr className="header">
                     <td>Hora</td>
                     <td>Contenido</td>
                 </tr>
                </thead>
                <tbody>
                  {renderMiercoles()}
                </tbody>
              </table>
          </div>
            <div className="dia">
                <h3>Jueves</h3>
            </div>
          <div  className="divTabla">
              <table className="table tabla table-striped" id="agenda">
                <thead>
                  <tr className="header">
                     <td>Hora</td>
                     <td>Contenido</td>
                 </tr>
                </thead>
                <tbody>
                  {renderJueves()}
                </tbody>
              </table>
          </div>
            <div className="dia">
                <h3>Viernes</h3>
            </div>
          <div className="divTabla">
              <table className="table tabla table-striped" id="agenda">
                <thead>
                  <tr className="header">
                     <td>Hora</td>
                     <td>Contenido</td>
                 </tr>
                </thead>
                <tbody>
                  {renderViernes()}
                </tbody>
              </table>
          </div>
      </div>
    );
  }
}

export default Agenda;
