import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Asistencia.css";
import $ from 'jquery';
class Asistencia extends Component {
  constructor(props){
    super(props);
    this.state={
      Lista:[],
      agenda:[],
    };
  }
  componentDidMount(){
  /*Fetch para obtener toda la agenda de la bd*/
  fetch("http://backend.acdmype.org/getListaAsistenciaImprimir.php",{ mode:'cors'})
    .then(response => response.json())
    .then(data => this.setState({Lista: data}));
  fetch("http://backend.acdmype.org/getagenda.php",{ mode:'cors'})
    .then(response => response.json())
    .then(data => this.setState({agenda: data}));
  }
  render() {
    /*Array agenda*/
    const {Lista} = this.state;
    $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
        $("#Lista tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          return null;
        });
      });
    });

    /*Funcion para crear la tabla de la Lista*/
    function renderLista(){
      return Lista.map((value,key) => {
        return (
         <tr key={value.idusuario}  id={value.idusuario} className="cuerpo">
            <td width=''>{value.idusuario}</td>
            <td width=''>{value.nombres}</td>
            <td width=''>
              {value.nombreentidad}
            </td>
        </tr>
        )
      })
    }

    return (
      <div className="contenedorAsistenciaA">
      <br/>
      <br/>
      <input id="myInput" type="text" placeholder="Search.." className="form-control"/>
      <br/>
          <div className="divTablaA resume">
              <table className="table" id="Lista">
                <thead>
                  <tr className="header">
                     <td>ID</td>
                     <td>Nombre</td>
                     <td>Organizacion</td>
                 </tr>
                </thead>
                <tbody>
                  {renderLista()}
                </tbody>
              </table>
          </div>
      </div>
    );
  }
}

export default Asistencia;
