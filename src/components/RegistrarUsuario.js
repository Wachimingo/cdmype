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
    sexo:"",
  };
}
  onRegister(e) {
  var form = $("#frm");
  e.preventDefault();
  var formData = new FormData(form[0]);
  $.ajax({
      url:"http://backend.acdmype.org/registrarusuario.php",
      data: formData,
      type: 'POST',
      contentType: false,
      processData: false,
      success: data => this.exito(data)
      // success: data => alert(data)
  });
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
  exito(data){
    this.props.history.push('/');
  }

cambiarInstituto(e){
  this.setState({mostrar: e.target.value});
}
cambiarSexo(e){
  this.setState({sexo: e.target.value});
}
  allowNumbersOnly(e) {
      var code = (e.which) ? e.which : e.keyCode;
      if (code > 31 && (code < 48 || code > 57)) {
          e.preventDefault();
      }
  }
  preview(){
    if (this.state.sexo === '1') {
      return(<img id="myimage" src={"http://backend.acdmype.org/uploads/usuarios/user.png"} className="preview" height="100px" width="100px" alt=""/>);
    }
    else if(this.state.sexo === '2'){
      return(<img id="myimage" src={"http://backend.acdmype.org/uploads/usuarios/user2.png"} className="preview" height="100px" width="100px" alt=""/>);
    }
    else {
      return(<img id="myimage" className="preview" height="100px" width="100px" alt=""/>);
    }
  }
componentWillMount(){

}
componentDidMount(){
/*Fecth para la lista de cdmypes, conamypes e invitados, ademas de los puestos de cada uno*/
fetch("http://backend.acdmype.org/getentidades.php",{ mode:'cors'})
   .then(response => response.json())
   .then(data => this.setState({entidad: data}));
 }
render() {
    document.body.style.overflowY = 'scroll';
  /*const cdmype y conamype toman los valores del ajax sobre la tabla organizaciones*/
  const {entidad} = this.state;
  /*separacion de listas del array entidad*/
  let cdmype = entidad.filter(tipo => tipo.tipoentidad === "1");
  let puestoscdmype = entidad.filter(id => id.identidad ==="1");
  let conamype = entidad.filter(tipo => tipo.tipoentidad === "3");
  let puestosconamype = entidad.filter(id => id.identidad ==="3");
/*La funcion renderOrg toma el parametro M dado en despues del grupo de radio buttons, el parametro puede ser cdmype, conamype o invitado*/
 function renderOrg(M) {
   const m = M;
   //console.log(m);
  if(m === "CDMYPE"){
    return(
      <div>
       <br/>
        <div className=" justify-content-center links">
          <label>CDMYPE</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="CDMYPE" name="identidad" required>
              {cdmype.map((item, key) =>
                <option key={item.identidad} value={item.tipoentidad} required>{item.entidad}</option>
              )}
          </select>
        </div>
        <div className="justify-content-center links">
          <label>Seleccione el puesto que tiene:</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="idpuesto" name="idpuesto" required>
            {puestoscdmype.map((item,key)=>
              <option key={item.idpuesto} value={item.idpuesto} required>{item.nombrepuesto}</option>
            )}
          </select>
        </div>
      </div>
    );
  }
  if(m === "CONAMYPE"){
    return(
      <div>
      <br/>
        <div className=" justify-content-center links">
          <label>CONAMYPE</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="CONAMYPE" name="identidad" required>
            {conamype.map((item, key) =>
              <option key={item.identidad} value={item.tipoentidad} required>{item.entidad}</option>
            )}
          </select>
        </div>
        <div className=" justify-content-center links">
          <label>Seleccione el puesto que tiene:</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="idpuesto" name="idpuesto" required>
            {puestosconamype.map((item,key)=>
              <option key={item.idpuesto} value={item.idpuesto} required>{item.nombrepuesto}</option>
            )}
          </select>
        </div>
      </div>
    );
  }
  if (m === "Invitado") {
    return(
      <div>
      <br/>
        <div className=" justify-content-center links">
          <label>Invitado</label>
        </div>
        <div className="form-group d-flex justify-content-center links">
          <select className="form-control" id="Invitado" name="identidad">
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
  $("input[name='telefono']").on("keyup", function(){
    $("input[name='number']").val(destroyMaskPhone(this.value));
    this.value = createMaskPhone($("input[name='number']").val());
  })

  function createMaskPhone(string){
  return string.replace(/(\d{4})(\d{4})/,"$1-$2");
  }

  function destroyMaskPhone(string){
  return string.replace(/\D/g,'').substring(0, 8);
  }
  return (
      <div className="bgR contaier-fluid">
      <br/>
          <div className="cardR">
                <h1 className="informaciongeneral">Informacion general:</h1>
                <p className="nota">Los siguientes datos se ocuparan para generar el diploma.</p>
{/*comienza el div de formulario*/}
              <form id="frm" encType="multipart/form-data" method="POST" onSubmit={this.onRegister.bind(this)} className="formulario">
                  <div className="justify-content-left">
                    <label>Nombre completo:</label>
                  </div>
                  <div className="form-group d-flex justify-content-center">
                    <input type="text" className="form-control" id="txtNombre" name="nombres" placeholder="ej: Jose Antonio Hernandez Perez" required  title="Ingrese sus nombres con letra inicial mayuscula"/>
                  </div>
                  <div className="justify-content-left">
                    <label>Sexo:</label>
                  </div>
                  <div className="justify-content-center">
                    <select className="form-control" id="sexo" name="sexo" ref="sexo" onChange={this.cambiarSexo.bind(this)}>
                      <option value="" defaultValue disable="true">-</option>
                      <option value="1" required>Masculino</option>
                      <option value="2" required>Femenino</option>
                    </select>
                  </div>
                  <br/>
                  <div className=" justify-content-left">
                    <label>Telefono:</label>
                  </div>
                  <div className="form-group d-flex justify-content-center">
                    <input type="text" name="number" style={{display:"none"}}/>
                    <input type="text" className="form-control" id="txtTelefono" name="telefono" onKeyPress={this.allowNumbersOnly.bind(this)} placeholder="7145-6985" required  title="Ingrese su numero, ejemplo: 7468-1256"/>
                  </div>
                <div className="justify-content-center">
                  <label>A que organizacion pertenece?</label>
                </div>
                <div className="justify-content-center">
                  <select className="form-control" id="institucion" name="institucion" ref="institucion" onChange={this.cambiarInstituto.bind(this)}>
                    <option value="" defaultValue disable="true">-</option>
                    <option value="CDMYPE" required>CDMYPE</option>
                    <option value="CONAMYPE" required>CONAMYPE</option>
                    <option value="Invitado" required>Invitado</option>
                  </select>
                </div>
                <br/>
{/*Se llama a la funcion renderOrg para mostrar que cdmype o conamype ha seleccionado, y su puestos*/}
                {
                  renderOrg(this.state.mostrar)
                }
                <div className=" justify-content-left">
                  <label>Correo:</label>
                </div>
                <div className="form-group d-flex justify-content-center">
                  <input type="email" className="form-control" id="txtCorreo" name="correo" placeholder="abc@mail.com" required title="Ingrese un correo valido"/>
                </div>
                <div className=" justify-content-left">
                  <label>Password:</label>
                </div>
                <div className="form-group d-flex justify-content-center">
                  <input type="Password" className="form-control" id="txtPass" name="clave" placeholder="Contraseña" required />
                </div>
                <div className=" justify-content-left">
                  <label>Foto de Perfil:</label>
                </div>
                <label htmlFor="imgInp" className="btn btn-info lbfoto">Elegir foto</label>
                <input type="file" id="imgInp" name="foto" onChange={this.onFileSelected.bind(this)} style={{display:"none"}}/>
                {this.preview()}
                <br/>
                <br/>
                <Link to="/" className="btn btn-info btnvolver">Volver</Link>
                <input type="submit" value="Registrar" className="btn btn-info registrar"/>
              </form>
            </div>
      </div>
    );
  }
}

  export default Registro;
