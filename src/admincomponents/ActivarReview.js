import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/ActivarReview.css";
import $ from 'jquery';
class ActivarReview extends Component {
  constructor(props){
    super(props);
    this.state={
      agenda:[],
      mostrar: "1",
      reviews: [],
    };
  }
  cambiarTaller(e){
    this.setState({mostrar: e.target.value});

  }
activar(e){
  var form = $("#frm")
  e.preventDefault();
  var formData = new FormData(form[0]);
  $.ajax({
          // url: 'http://localhost/cdmypephp/activarreview.php',
          // url: 'https://cdmype.000webhostapp.com/activarreview.php',
          url: 'http://backend.acdmype.org/activarreview.php',
          data: formData,
          type: 'POST',
          contentType: false,
          processData: false,
          success: data => window.location.reload()
          // success: data => alert(data)
      });
}
componentDidMount(){
/*Fetch para obtener toda la agenda de la bd*/
  // fetch("https://cdmype.000webhostapp.com/getagenda.php",{ mode:'cors'})
  //    .then(response => response.json())
  //    .then(data => this.setState({agenda: data}));
  fetch("https://backend.acdmype.org/getagenda.php",{ mode:'cors'})
     .then(response => response.json())
     .then(data => this.setState({agenda: data}));
  // fetch("http://localhost/cdmypephp/getagenda.php",{ mode:'cors'})
  //   .then(response => response.json())
  //   .then(data => this.setState({agenda: data}));
  fetch("https://backend.acdmype.org/getreviewsactivos.php",{ mode:'cors'})
     .then(response => response.json())
     .then(data => this.setState({agenda: data}));
}
  render() {
    const {agenda} = this.state;
    const {reviews} = this.state;
    function renderTaller(M) {
      const m = M;
     if(m === '1'){
       return(
         <div>
          <br/>
           <div className=" justify-content-center links">
             <label>Seleccione un taller</label>
           </div>
           <div className="form-group d-flex justify-content-center links">
           <select name="idAgenda" className="form-control">
           {agenda.map((item,key) =>
              <option key={item.idagenda} value={item.idagenda}>{item.contenido}</option>
            )}
            </select>
           </div>
         </div>
       );
     }
     else {
       return(
         null
       );
     }
   }
   /*Funcion para crear la tabla de la Lista*/
   function renderLista(){
     return reviews.map((value,key) => {
       return (
        <tr key={value.idreviewactivo}  id={value.idreviewactivo} className="cuerpo">
           <td width=''>{value.nombre}</td>
           <td width=''>{value.contenido}</td>
           <td width=''>{value.fecha}</td>
       </tr>
       )
     })
   }
    return (
    <div className="container-fluid contenedorActivarReview">
      <form id="frm" method="POST"  onSubmit={this.activar.bind(this)}>
      <select id="Tipo" name="TipoReview" className="form-control" onChange={this.cambiarTaller.bind(this)}>
        <option id="Taller" value='1'>Review para taller</option>
        <option id="App" value='2'>Review para app</option>
        <option id="Congreso" value='3'>Review para congreso</option>
      </select>
{/*Se llama a la funcion renderOrg para mostrar que cdmype o conamype ha seleccionado, y su puestos*/}
        {
          renderTaller(this.state.mostrar)
        }
        <input value={localStorage.getItem('id')} name="id" className="dato"/>
        <button type="submit" className="btn btn-primary float-left" value="Activar">Activar Review</button>
      </form>
      <br/>
      <br/>
      <br/>
      <div className="divTabla resume">
          <table className="table" id="Lista">
            <thead>
              <tr className="header">
                 <td>ID</td>
                 <td>Tipo</td>
                 <td>Contenido</td>
                 <td>fecha</td>
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
export default ActivarReview;
