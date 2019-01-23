import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Registro.css";
import $ from 'jquery';
import '../../node_modules/history/umd/history.js';
import {Link} from 'react-router-dom';
class EditarPerfil extends Component {
constructor(props) {
  super(props);
  this.state ={
    nombres: sessionStorage.getItem('nombres'),
    apellidos: sessionStorage.getItem('apellidos'),
    telefono: sessionStorage.getItem('telefono'),
    correo: sessionStorage.getItem('correo'),
  };
}

onEdit(e) {
  var form = $("#frm")
  e.preventDefault();
  var formData = new FormData(form[0]);
  $.ajax({
      url: 'http://localhost/cdmypephp/editarusuario.php',
      data: formData,
      type: 'POST',
      contentType: false,
      processData: false,
      success: data => this.exito(data)
  });
}

  exito(data){
    console.log(data);
    $('#succesmodal').modal('show')
  }

  onFileSelected(event) {
  var selectedFile = event.target.files[0];
  var reader = new FileReader();

  var imgtag = document.getElementById("preview");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

render() {
  $(window).on('load',function(){
          document.body.style.backgroundImage= "url('http://getwallpapers.com/wallpaper/full/a/5/d/544750.jpg')";
  });
  return (
      <div className="bgR">
        <div className="container" style={{marginTop: "100px"}}>
{/*comienza el div de formulario*/}
                <form id="frm" encType="multipart/form-data" method="POST" onSubmit={this.onEdit.bind(this)}>
                  <div className="inline2">
                    <div className="justify-content-left links">
                      <label>Nombres:</label>
                    </div>
                    <div className="form-group d-flex justify-content-center links">
                      <input type="text" className="form-control" id="txtNombre" name="nombres"  value={this.state.nombres} onChange={e=>this.setState({nombres: e.target.value})} required pattern="/[A-Z][a-z]*?(\s)|[A-Z][a-z]*\w"  title="Ingrese sus nombres con letra inicial mayuscula"/>
                    </div>
                  </div>
                  <div className="inline2">
                    <div className=" justify-content-left links">
                      <label>Apellidos:</label>
                    </div>
                    <div className="form-group d-flex justify-content-center links">
                      <input type="text" className="form-control" id="txtSNombre" name="apellidos" value={this.state.apellidos} onChange={e=>this.setState({apellidos: e.target.value})} required pattern="/[A-Z][a-z]*?(\s)|[A-Z][a-z]*\w"  title="Ingrese sus apellidos con letra inicial mayuscula"/>
                    </div>
                  </div>
                  <div className=" justify-content-left links">
                    <label>Telefono:</label>
                  </div>
                  <div className="form-group d-flex justify-content-center links">
                    <input type="text" className="form-control" id="txtTelefono" name="telefono" value={this.state.telefono} onChange={e=>this.setState({telefono: e.target.value})} required pattern="\[0-9]{3}-[0-9]{8}" title="Ingrese su numero primero con el codigo de area y con guiones ejemplo: 503-7468-1256"/>
                  </div>
                  <div className=" justify-content-left links">
                    <label>Correo:</label>
                  </div>
                  <div className="form-group d-flex justify-content-center links">
                    <input type="email" className="form-control" id="txtCorreo" name="correo" value={this.state.correo} onChange={e=>this.setState({correo: e.target.value})} required title="Ingrese un correo valido"/>
                  </div>
                  <div className=" justify-content-left links">
                    <label>Foto de Perfil:</label>
                  </div>
                  <div className="form-group d-flex justify-content-left links">
                    <label htmlFor="imgInp" className="btn btn-info"> Eligir foto de perfil</label>
                    <input type="file"  id="imgInp" onChange={this.onFileSelected.bind(this)} style={{display:"none"}} name="foto"/>
                  </div>
                  <div className="botones">
                    <input type="submit" value="Registrar" className="btn float-right login_btn"/>
                    <Link to="/Home" className="btn float-left login_btn2">Volver</Link>
                  </div>
                </form>
              </div>
            </div>
    );
  }
  }

  export default EditarPerfil;
