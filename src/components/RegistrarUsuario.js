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
    mostrar: "",
    entidad: [],
  };
}

onRegister(e) {
  var form = $("#frm")
  e.preventDefault();
  var formData = new FormData(form[0]);
  $.ajax({
      url: 'http://localhost/cdmypephp/registrarusuario.php',
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

  var imgtag = document.getElementById("myimage");
  imgtag.title = selectedFile.name;

  reader.onload = function(event) {
    imgtag.src = event.target.result;
  };

  reader.readAsDataURL(selectedFile);
}

componentDidMount(){
{/*Fecth para la lista de cdmypes, conamypes e invitados, ademas de los puestos de cada uno*/}
 fetch("http://localhost/cdmypephp/getentidades.php",{ mode:'cors'})
    .then(response => response.json())
    .then(data => this.setState({entidad: data}));
  }
render() {
  {/*const cdmype y conamype toman los valores del ajax sobre la tabla organizaciones*/}
  const {entidad} = this.state;
  {/*separacion de listas del array entidad*/}
  let cdmype = entidad.filter(tipo => tipo.tipoentidad === "1");
  let puestoscdmype = entidad.filter(id => id.identidad ==="1");
  let conamype = entidad.filter(tipo => tipo.tipoentidad === "3");
  let puestosconamype = entidad.filter(id => id.identidad ==="3");
  let empresario = entidad.filter(tipo => tipo.tipoentidad === "2");
  let puestoempresario = entidad.filter(id => id.identidad ==="3");
  let no_empresario = entidad.filter(tipo => tipo.tipoentidad === "4");
  let puestono_empresario = entidad.filter(id => id.identidad ==="4");
  {/*La funcion renderOrg toma el parametro M dado en despues del grupo de radio buttons, el parametro puede ser cdmype, conamype o invitado*/}
 function renderOrg(M) {
  const m = M
  if(m === "cdmype"){
    return(
      <div>
        <div className=" justify-content-center links">
          <label>CDMYPE</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="identidad" name="identidad" required>
              <option disabled hidden selected >--Selecione la CDMYPE a la que pertenece</option>
              {cdmype.map((item, key) =>
                <option key={item.tipoentidad} value={item.tipoentidad} required>{item.entidad}</option>
              )}
          </select>
        </div>
        <div className=" justify-content-center links">
          <label>Puesto que tiene:</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="idpuesto" name="idpuesto" required>
          <option disabled hidden selected >--Selecione una opcion</option>
            {puestoscdmype.map((item,key)=>
              <option key={item.nombrepuesto} value={item.idpuesto} required>{item.nombrepuesto}</option>
            )}
          </select>
        </div>
      </div>

    );
  }
  if(m === "conamype"){
    return(
      <div>
        <div className=" justify-content-center links">
          <label>CONAMYPE</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="entidad" name="identidad" required>
              <option disabled hidden selected >--Selecione la CONAMYPE a la que pertenece</option>
            {conamype.map((item, key) =>
              <option key={item.tipoentidad} value={item.tipoentidad} required>{item.entidad}</option>
            )}
          </select>
        </div>
        <div className=" justify-content-center links">
          <label>Puesto que tiene:</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="idpuesto" name="idpuesto" required>
              <option disabled hidden selected>--Selecione una opcion</option>
            {puestosconamype.map((item,key)=>
              <option key={item.nombrepuesto} value={item.idpuesto} required>{item.nombrepuesto}</option>
            )}
          </select>
        </div>
      </div>
    );
  }
  if (m === "invitado") {
    return(
      <div>
        <div className=" justify-content-center links">
          <label>Invitado</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="identidad" name="identidad">
                <option value="5" required>Empresario</option>
                <option value="6" required>No empresario</option>
          </select>
          <select className="form-control" id="idpuesto" name="idpuesto" style={{display:"none"}}>
                <option value="3">Empresario</option>
                <option value="5">No empresario</option>
          </select>
        </div>
      </div>
    );
  }
}

  return (
      <div className="bgR">
        <div className="container">
{/*Modal box que aparece cuando el registro fue exitoso*/}
          <div className="modal fade" id="succesmodal" tabIndex="-1" role="dialog" aria-labelledby="Exito" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Exito</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Exito en registrarse
                </div>
                <div className="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center h-100">
            <div className="cardR">
              <div className="card-header">
                <div className=" justify-content-center links">
                  <h1>Informacion general:</h1>
                  <h3>NOTA: Los siguientes datos se ocuparan para generar el diploma.</h3>
{/*comienza el div de formulario*/}
                </div>
                <form id="frm" encType="multipart/form-data" method="POST" onSubmit={this.onRegister.bind(this)}>
                  <div className="inline2">
                    <div className="justify-content-left links">
                      <label>Nombres:</label>
                    </div>
                    <div className="form-group d-flex justify-content-center links">
                      <input type="text" className="form-control" id="txtNombre" name="nombres" placeholder="ej: Jose Antonio" required pattern="/[A-Z][a-z]*?(\s)|[A-Z][a-z]*\w"  title="Ingrese sus nombres con letra inicial mayuscula"/>
                    </div>
                  </div>
                  <div className="inline2">
                    <div className=" justify-content-left links">
                      <label>Apellidos:</label>
                    </div>
                    <div className="form-group d-flex justify-content-center links">
                      <input type="text" className="form-control" id="txtSNombre" name="apellidos" placeholder="ej: Reyes Lopez" required pattern="/[A-Z][a-z]*?(\s)|[A-Z][a-z]*\w"  title="Ingrese sus apellidos con letra inicial mayuscula"/>
                    </div>
                  </div>
                  <div className="justify-content-center links">
                    <label>A que organizacion pertenece?</label>
                  </div>
                  <div className="form-check justify-content-center links radios">
                    <div className="inline">
                      <input type="radio" className="form-check-input" id="radio1" name="optradio" value="CDMYPE" required onChange={e=>this.setState({mostrar: "cdmype"})}/>
                      <label className="form-check-label link" htmlFor="radio1">CDMYPE</label>
                    </div>
                    <div className="inline">
                      <input type="radio" className="form-check-input" id="radio2" name="optradio" value="Empresa" required onChange={e=>this.setState({mostrar:"conamype"})}/>
                      <label className="form-check-label link" htmlFor="radio2">CONAMYPE</label>
                    </div>
                    <div className="inline">
                      <input type="radio" className="form-check-input" id="radio3" name="optradio" value="Invitado" required  onChange={e=>this.setState({mostrar: "invitado"})}/>
                      <label className="form-check-label link" htmlFor="radio3">Invitado</label>
                    </div>
                  </div>
{/*Se llama a la funcion renderOrg para mostrar que cdmype o conamype ha seleccionado, y su puestos*/}
                  {renderOrg(this.state.mostrar)}
                  <div className=" justify-content-left links">
                    <label>Telefono:</label>
                  </div>
                  <div className="form-group d-flex justify-content-center links">
                    <input type="text" className="form-control" id="txtTelefono" name="telefono" placeholder="503-7145-6985" required pattern="\[0-9]{3}-[0-9]{8}" title="Ingrese su numero primero con el codigo de area y con guiones ejemplo: 503-7468-1256"/>
                  </div>
                  <div className=" justify-content-left links">
                    <label>Correo:</label>
                  </div>
                  <div className="form-group d-flex justify-content-center links">
                    <input type="email" className="form-control" id="txtCorreo" name="correo" placeholder="abc@mail.com" required title="Ingrese un correo valido"/>
                  </div>
                  <div className=" justify-content-left links">
                    <label>Password:</label>
                  </div>
                  <div className="form-group d-flex justify-content-center links">
                    <input type="Password" className="form-control" id="txtPass" name="clave" placeholder="Contraseña" required pattern="/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{8,16}/$" title="La contraseña debe de ser de almenos 8 digits"/>
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
