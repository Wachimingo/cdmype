import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Asistencia.css";
import ReactToPrint from 'react-to-print';

class ImprimirAsistencia extends Component {
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
    // fetch("https://cdmype.000webhostapp.com/getListaAsistenciaImprimir.php",{ mode:'cors'})
    //   .then(response => response.json())
    //   .then(data => this.setState({Lista: data}));
    // fetch("https://cdmype.000webhostapp.com/getagenda.php",{ mode:'cors'})
    //   .then(response => response.json())
    //   .then(data => this.setState({agenda: data}));
    // fetch("http://localhost/cdmypephp/getListaAsistenciaImprimir.php",{ mode:'cors'})
    //   .then(response => response.json())
    //   .then(data => this.setState({Lista: data}));
    // fetch("http://localhost/cdmypephp/getagenda.php",{ mode:'cors'})
    //   .then(response => response.json())
    //   .then(data => this.setState({agenda: data}));

  }

  render() {
    /*Array agenda*/
    const {Lista} = this.state;
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
            <td width='150px'></td>
        </tr>
        )
      })
    }
    return (
      <div className="container-fluid contenedorAsistencia">
      <h3>Taller</h3>
          <div className="divTabla resume">
              <table className="table" id="Lista">
                <thead>
                  <tr className="header">
                     <td>ID</td>
                     <td>Nombre</td>
                     <td>Organizacion</td>
                     <td width='150px'>Firma</td>
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
class Imprimir extends React.Component {
  render() {
    return (
      <div className="contenedordeImpresion">
        <ReactToPrint
          trigger={() => <button className="btn btn-success" value="Imprimir"/>}
          content={() => this.componentRef}
          copyStyles
          pageStyle
        />
        <ImprimirAsistencia ref={el => (this.componentRef = el)} />
      </div>
    );
  }
}

export default Imprimir
