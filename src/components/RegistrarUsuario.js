import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/Registro.css";
import $ from 'jquery';
import '../../node_modules/history/umd/history.js';
import {Link} from 'react-router-dom';
class Registro extends Component {
constructor(props) {
  super(props);
  this.state ={
    mostrar: "nada",
    org: [],
    emp:[],
  };
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
componentDidMount(){
 fetch("http://localhost/cdmypephp/getorg.php",{ mode:'cors'})
    .then(response => response.json())
    .then(data => this.setState({org: data}));
  fetch("http://localhost/cdmypephp/getemp.php",{ mode:'cors'})
     .then(response => response.json())
     .then(data => this.setState({emp: data}));
}
render() {
  const {org} = this.state;
  const {emp} = this.state;
 function renderOrg(M) {
  const m = M
  if(m === "org"){
    return(
      <div>
        <div className=" justify-content-center links">
          <label>Organizacion</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="idLocal" name="organizacion">
            {org.map((item,key) =>
                <option key={item.Cd_EMid}>{item.Cd_EMname}</option>
            )}
          </select>
        </div>
      </div>
    );
  }
  if(m === "empresa"){
    return(
      <div>
        <div className=" justify-content-center links">
          <label>Empresa</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="idLocal" name="organizacion">
            {emp.map((item,key) =>
                <option key={item.Cd_EMid}>{item.Cd_EMname}</option>
            )}
          </select>
        </div>
      </div>
    );
  }
}
  window.onload=function(){
    var form = $("#frm")
  // Listen for form submit
  form.submit(function(e) {
      e.preventDefault();
      var formData = new FormData(form[0]);
      const file = document.querySelector('[type=file]').files;
      formData.append('foto', file);
      $.ajax({
                  url: 'http://localhost:3000/cdmypephp/registrarusuario.php',
                  data: formData,
                  type: 'POST',
                  contentType: false,
                  processData: false,
                  success: function(d) {
                      alert(d);
                  }
              });
      });
  }
    return (
      <div className="bgR">
        <div className="container">
          <div className="d-flex justify-content-center h-100">
            <div className="cardR">
              <div className="card-header">
                <div className=" justify-content-center links">
                  <label>Informacion general:</label>
                </div>
                <form id="frm" encType="multipart/form-data" method="POST">
                  <div className="inline2">
                    <div className=" justify-content-left links">
                      <label>Primer Nombre</label>
                    </div>
                    <div className="form-group d-flex justify-content-center links">
                      <input type="text" className="form-control" id="txtNombre" name="primerNombre"/>
                    </div>
                    <div className=" justify-content-left links">
                      <label>Primer Apellido</label>
                    </div>
                    <div className="form-group d-flex justify-content-center links">
                      <input type="text" className="form-control" id="txtApellido" name="primerApellido"/>
                    </div>
                  </div>
                  <div className="inline2">
                    <div className=" justify-content-left links">
                      <label>Segundo Nombre</label>
                    </div>
                    <div className="form-group d-flex justify-content-center links">
                      <input type="text" className="form-control" id="txtSNombre" name="segundoNombre"/>
                    </div>
                    <div className=" justify-content-left links">
                      <label>Segundo Apellido</label>
                    </div>
                    <div className="form-group d-flex justify-content-center links">
                      <input type="text" className="form-control" id="txtSApellido" name="segundoApellido"/>
                    </div>
                  </div>
                  <div className="justify-content-center links">
                    <label>A que organizacion pertenece?</label>
                  </div>
                  <div className="form-check justify-content-center links radios">
                    <div className="inline">
                      <input type="radio" className="form-check-input" id="radio1" name="optradio" value="CDMYPE" onChange={e=>this.setState({mostrar: "org"})}/>
                      <label className="form-check-label link" for="radio1">CDMYPE</label>
                    </div>
                    <div className="inline">
                      <input type="radio" className="form-check-input" id="radio2" name="optradio" value="Empresa" onChange={e=>this.setState({mostrar:"empresa"})}/>
                      <label className="form-check-label link" for="radio2">Empresa</label>
                    </div>
                    <div className="inline">
                      <input type="radio" className="form-check-input" id="radio3" name="optradio" value="Invitado"  onChange={e=>this.setState({mostrar: "nada"})}/>
                      <label className="form-check-label link" for="radio3">Invitado</label>
                    </div>
                  </div>
                  {renderOrg(this.state.mostrar)}
                  <div className=" justify-content-left links">
                    <label>Correo</label>
                  </div>
                  <div className="form-group d-flex justify-content-center links">
                    <input type="text" className="form-control" id="txtCorreo" name="correo" />
                  </div>
                  <div className=" justify-content-left links">
                    <label>Telefono</label>
                  </div>
                  <div className="form-group d-flex justify-content-center links">
                    <input type="text" className="form-control" id="txtTelefono" name="telefono"/>
                  </div>
                  <div className=" justify-content-left links">
                    <label>Password</label>
                  </div>
                  <div className="form-group d-flex justify-content-center links">
                    <input type="Password" className="form-control" id="txtPass" name="clave"/>
                  </div>
                  <div className=" justify-content-left links">
                    <label>Foto de Perfil:</label>
                  </div>
                  <div className="form-group d-flex justify-content-left links">
                    <label htmlFor="imgInp" className="btn btn-info"> Eligir foto de perfil</label>
                    <input type="file"  id="imgInp" onChange={this.onFileSelected.bind(this)} style={{display:"none"}} name="foto"/>
                  </div>
                    <img id="myimage" className="preview"/>
                  <div className="botones">
                    <input type="submit" value="Registrar" className="btn float-right login_btn"/>
                    <Link to="/" className="btn float-left login_btn2">Volver</Link>
                  </div>
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
