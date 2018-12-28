  import React, { Component } from 'react';
  import "../../node_modules/bootstrap/dist/css/bootstrap.css";
  import "../../node_modules/bootstrap/dist/js/bootstrap.js";
  import "../css/Registro.css";
  import Login from './Login.js';
  import '../../node_modules/history/umd/history.js';

  import ReactDOM from 'react-dom';
  class Registro extends Component {

  state ={
    primerNombre: '',
    SegundoNombre: '',
    primerApellido: '',
    segundoApellido: '',
    organizacion: '',
    correo: '',
    telefono: '',
    imgPerfil:'',
  }

  onRegister(event) {
    event.preventDefault();
    this.props.history.push('/')
  }
  onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}
  render() {

    return (

      <div className="bgR">
      <div className="container">
      <div className="d-flex justify-content-center h-100">
      <div className="cardR">
      <div className="card-header">
      <form onSubmit={this.onRegister.bind(this)}>
      <div className="inline2">
        <div className=" justify-content-left links">
          <label>Primer Nombre</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <input type="text" className="form-control" id="txtNombre" />
        </div>
        <div className=" justify-content-left links">
          <label>Primer Apellido</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <input type="text" className="form-control" id="txtApellido" />
        </div>
      </div>
      <div className="inline2">
        <div className=" justify-content-left links">
          <label>Segundo Nombre</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <input type="text" className="form-control" id="txtNombre" />
        </div>
        <div className=" justify-content-left links">
          <label>Segundo Apellido</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <input type="text" className="form-control" id="txtApellido" />
        </div>
      </div>
      <div className="justify-content-center links">
        <label>A que organizacion pertenece?</label>
      </div>
      <div className="form-check justify-content-center links">
        <div className="inline">
          <input type="radio" className="form-check-input" id="radio1" name="optradio" value="CDMYPE" checked/>CDMYPE
        </div>
        <div className="inline">
          <input type="radio" className="form-check-input" id="radio2" name="optradio" value="Empresa" checked/>Empresa
        </div>
        <div className="inline">
          <input type="radio" className="form-check-input" id="radio3" name="optradio" value="Invitado"/>Invitado
        </div>
      </div>
      <div className=" justify-content-center links">
      <label>Organizacion</label>
      </div>
      <div className="form-group d-flex justify-content-center links">
      <select className="form-control" id="idLocal">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      </select>
      </div>
      <div className=" justify-content-left links">
        <label>Correo</label>
      </div>
      <div className="form-group d-flex justify-content-center links">
        <input type="text" className="form-control" id="txtCorreo" />
      </div>
      <div className=" justify-content-left links">
        <label>Telefono</label>
      </div>
      <div className="form-group d-flex justify-content-center links">
        <input type="text" className="form-control" id="txtTelefono" />
      </div>
      <div className=" justify-content-left links">
        <label>Foto de Perfil:</label>
      </div>
      <div className="form-group d-flex justify-content-left links">
        <input type="file"  id="imgInp" onChange={this.onFileSelected.bind(this)}/>
      </div>
        <img id="myimage" height="200"/>
        <br/>
        <br/>
        <br/>
      <input type="submit" value="Registrar" className="btn float-right login_btn"/>
      </form>
      </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
  }

  export default Registro;
