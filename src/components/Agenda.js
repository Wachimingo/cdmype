import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Agenda.css";
import {Link} from 'react-router-dom';
import logo from '../img/congreso.jpg';
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
    fetch("http://localhost/cdmypephp/getagenda.php",{ mode:'cors'})
       .then(response => response.json())
       .then(data => this.setState({agenda: data}));
  }
  render() {
    /*Array agenda*/
    const {agenda} = this.state;
    /*funcion para cambiar el fondo*/
    $(window).on('load',function(){
      document.body.style.backgroundImage = null;
      document.body.style.background = "white";
    });
    /*Funcion para crear la tabla de la agenda, toma un array como parametro, en este caso llamado JSON*/
    function renderAgenda(){
      return agenda.map((value,key) => {
        return (
               <tr>
                  <td id={value.dia} className="dia">{value.dia}</td>
                  <td width=''>{value.hora}</td>
                  <td width=''>{value.contenido}</td>
                  <td width='' align="center"><Link to={{pathname:`/Home/Ponente/${value.idponente}`}}>{value.nombreponente}</Link></td>
                  <td width='' align="center">{value.publico}</td>
              </tr>
        )
      })

    }
/*Funcion para hacer rowspan a la columna de dia, pero causa que las celdas se muevan hacia la derecha*/
    /*$(function() {
        var idToElementCount = {};
        $('[id]').each(function() {
            var $this = $(this);
            var id = $this.attr('data-id');
            if(!idToElementCount.hasOwnProperty(id)) {
                idToElementCount[id] = 0;
            }

            idToElementCount[id]++;
        });
        for(var currentId in idToElementCount) {
            $('[id='+currentId + "]")
                .first()
                .attr("rowspan", idToElementCount[currentId])
                .end()
            .filter(":gt(0)")
            .remove()
        }
    })*/
    return (
      <div className="container-fluid ">
          <div>
            <img src={logo} className="rotulo bloque " alt="logo"/>
            <div className="bloque contenido">
              <h3>Programa de contenidos</h3>
            </div>
          </div>
          <div id="agenda" className="col-md-6 wrapper">
              <table className="table tabla table-striped" id="agenda">
                <thead>
                  <tr className="header">
                     <td>Dia</td>
                     <td>Hora</td>
                     <td>Contenido</td>
                     <td>Ponente</td>
                     <td>Publico</td>
                 </tr>
                </thead>
                <tbody>
                  {renderAgenda()}
                </tbody>
              </table>
          </div>
      </div>
    );
  }
}

export default Agenda;
