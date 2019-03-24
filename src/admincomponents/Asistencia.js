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
    fetch("http://backend.acdmype.org/getListaAsistencia.php",{ mode:'cors'})
      .then(response => response.json())
      .then(data => this.setState({Lista: data}));
    fetch("http://backend.acdmype.org/getagenda.php",{ mode:'cors'})
      .then(response => response.json())
      .then(data => this.setState({agenda: data}));
  }
  enlistar(e){

  }
  render() {
    /*Array agenda*/
    const {Lista} = this.state;
    const {agenda} = this.state;
    $(document).ready(function(){
    $("#myInput").on("keyup", function() {
      var value = $(this).val().toLowerCase();
        $("#Lista tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          return null;
        });
      });
    });
    $(window).ready(function(){
    $("input[type='checkbox']").change(function(e){
      e.preventDefault();
      e.stopImmediatePropagation();
      if(this.checked){
        var self = this;
        $("#Lista #"+ $(this).closest('tr').attr('id')).toggle(!self.checked);
        var id = $(this).parent().siblings(":first").text();
        var form = $("#frm")
        var formData = new FormData(form[0]);
        formData.append('id', id);
        $.ajax({
                url: 'https://backend.acdmype.org/enlistar.php',
                data: formData,
                type: 'POST',
                contentType: false,
                processData: false,
                success: data => window.location.reload()
                // success: data => console.log(data)
            });
       }
return false;
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
            <td>
              <input type="checkbox" id="asistio" name="asistio"/>
            </td>
        </tr>
        )
      })
    }

    return (
      <div className="contenedorAsistenciaA">
      <form name="frm" id="frm" method="POST">
      <h3>Taller</h3>
      <select name="idAgenda" className="form-control">
      {agenda.map((item,key) =>
         <option key={item.idagenda} value={item.idagenda}>{item.contenido}</option>
       )}
       </select>
      <br/>
      <input id="myInput" type="text" placeholder="Search.." className="form-control"/>
      <br/>
          <div className="divTabla resume">
              <table className="table" id="Lista">
                <thead>
                  <tr className="header">
                     <td>ID</td>
                     <td>Nombre</td>
                     <td>Organizacion</td>
                     <td></td>
                 </tr>
                </thead>
                <tbody>
                  {renderLista()}
                </tbody>
              </table>
          </div>
      </form>
      </div>
    );
  }
}

export default Asistencia;
