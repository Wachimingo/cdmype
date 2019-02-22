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
    telefono: sessionStorage.getItem('telefono'),
    correo: sessionStorage.getItem('correo'),
    mostrar: "",
    entidad: [],
  };
}

onEdit(e) {
  var form = $("#frm")
  e.preventDefault();
  var formData = new FormData(form[0]);
  formData.append("idusuario", sessionStorage.getItem('id'));
  formData.append("nombres", this.state.nombres);
  formData.append("telefono",this.state.telefono);
  formData.append("correo", this.state.correo);
  formData.append("defaultidentidad", sessionStorage.getItem('identidad'));
  formData.append("defaultidpuesto", sessionStorage.getItem('idpuesto'));
  formData.append("defaultfoto", sessionStorage.getItem('foto'));
  $.ajax({
      url: 'https://cdmype.000webhostapp.com/editarusuario.php',
      // url: 'http://192.168.1.20/cdmypephp/editarusuario.php',
      data: formData,
      type: 'POST',
      contentType: false,
      processData: false,
      success: data => this.exito(data)
      // success: data => alert(data)
  });
}

  exito(data){
    this.props.history.push({pathname:`/Home/Perfil/` + sessionStorage.getItem('id')});
  }
  allowNumbersOnly(e) {
      var code = (e.which) ? e.which : e.keyCode;
      if (code > 31 && (code < 48 || code > 57)) {
          e.preventDefault();
      }
  }
  componentDidMount(){
  /*Fecth para la lista de cdmypes, conamypes e invitados, ademas de los puestos de cada uno*/
   fetch("https://cdmype.000webhostapp.com/getentidades.php",{ mode:'cors'})
      .then(response => response.json())
      .then(data => this.setState({entidad: data}));
    }
   // fetch("http://192.168.1.20/cdmypephp/getentidades.php",{ mode:'cors'})
   //    .then(response => response.json())
   //    .then(data => this.setState({entidad: data}));
   //  }
render() {
  $(window).on('load',function(){
          document.body.style.backgroundImage= "white";
  });
  /*const cdmype y conamype toman los valores del ajax sobre la tabla organizaciones*/
  const {entidad} = this.state;
  /*separacion de listas del array entidad*/
  let cdmype = entidad.filter(tipo => tipo.tipoentidad === "1");
  let puestoscdmype = entidad.filter(id => id.identidad ==="1");
  let conamype = entidad.filter(tipo => tipo.tipoentidad === "3");
  let puestosconamype = entidad.filter(id => id.identidad ==="3");
/*Funcion de render*/
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
           <select className="form-control" id="identidad" name="identidad" required>
               <option disabled hidden selected value="" >{sessionStorage.getItem('nombreentidad')}</option>
               {cdmype.map((item, key) =>
                 <option key={item.tipoentidad} value={item.tipoentidad} required>{item.entidad}</option>
               )}
           </select>
         </div>
         <div className=" justify-content-center links">
           <label>Selecione el puesto que tiene:</label>
         </div>
         <div className="form-group d-flex justify-content-center links">
           <select className="form-control" id="idpuesto" name="idpuesto" required>
           <option disabled hidden selected value="">{sessionStorage.getItem('nombrepuesto')}</option>
             {puestoscdmype.map((item,key)=>
               <option key={item.nombrepuesto} value={item.idpuesto} required>{item.nombrepuesto}</option>
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
           <select className="form-control" id="identidad" name="identidad" required>
               <option disabled hidden selected value="">{sessionStorage.getItem('nombreentidad')}</option>
             {conamype.map((item, key) =>
               <option key={item.tipoentidad} value={item.tipoentidad} required>{item.entidad}</option>
             )}
           </select>
         </div>
         <div className=" justify-content-center links">
           <label>Selecione el puesto que tiene:</label>
         </div>
         <div className="form-group d-flex justify-content-center links">
           <select className="form-control" id="idpuesto" name="idpuesto" required>
               <option disabled hidden selected value="">{sessionStorage.getItem('nombrepuesto')}</option>
             {puestosconamype.map((item,key)=>
               <option key={item.nombrepuesto} value={item.idpuesto} required>{item.nombrepuesto}</option>
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
      <div className="">
        <div className="container" style={{marginTop: "100px"}}>
{/*comienza el div de formulario*/}
                <form id="frm" encType="multipart/form-data" method="POST" onSubmit={this.onEdit.bind(this)}>
                    <div className="justify-content-left ">
                      <label>Nombres:</label>
                    </div>
                    <div className="form-group d-flex justify-content-center ">
                      <input type="text" className="form-control" id="txtNombre" name="nombres"  value={this.state.nombres} onChange={e=>this.setState({nombres: e.target.value})} required  title="Ingrese sus nombres con letra inicial mayuscula"/>
                    </div>
                    <div className=" justify-content-left">
                      <label>Telefono:</label>
                    </div>
                    <div className="form-group d-flex justify-content-center">
                      <input type="text" name="number" style={{display:"none"}}/>
                      <input type="text" className="form-control" id="txtTelefono" name="telefono" onKeyPress={this.allowNumbersOnly.bind(this)} onChange={e=>this.setState({telefono: e.target.value})}  defaultValue={this.state.telefono} title="Ingrese su numero, ejemplo: 7468-1256"/>
                    </div>
                  <label>Puede dejar lo siguiente en blanco si no lo necesita cambiar</label>
                  <div className="justify-content-center">
                    <label>A que organizacion pertenece?</label>
                  </div>
                  <div className="justify-content-center">
                    <select className="form-control" id="institucion" name="institucion"  onChange={(e)=>this.setState({mostrar: e.target.value})}>
                      <option disabled hidden selected value="">{sessionStorage.getItem('nombretipo')}</option>
                      <option value="CDMYPE" required>CDMYPE</option>
                      <option value="CONAMYPE" required>CONAMYPE</option>
                      <option value="Invitado" required>Invitado</option>
                    </select>
                  </div>
{/*Se llama a la funcion renderOrg para mostrar que cdmype o conamype ha seleccionado, y su puestos*/}
                  {
                    renderOrg(this.state.mostrar)
                  }
                  <div className=" justify-content-left links">
                    <label>Foto de Perfil:</label>
                  </div>
                  <div className="form-group d-flex justify-content-left links">
                    <label htmlFor="imgInp" className="btn btn-info"> Eligir foto de perfil</label>
                    <input type="file"  id="imgInp"  style={{display:"none"}} name="foto"/>
                  </div>
                  <div className="botones">
                    <input type="submit" value="Guardar cambios" className="btn float-right btn-info"/>
                    <Link to={{pathname:`Perfil/${sessionStorage.getItem('id')}`}} className="btn float-left btn-info">Volver</Link>
                  </div>
                </form>
              </div>
            </div>
    );
  }
  }

  export default EditarPerfil;
