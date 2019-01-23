import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/login.css";
import { Link, withRouter} from 'react-router-dom';
import $ from 'jquery';
class Login extends Component {
constructor(props){
  super(props);
  this.state = {
    info: [],
    prueba: 'hola',
    usuario: '',
    clave: '',
    validado: true,
  }
}
inLogin(e){
  e.preventDefault();
  var form = $('#login');
  var formData = new FormData(form[0]);
  $.ajax({
      url: "http://localhost/cdmypephp/validarLogin.php",
      data: formData,
      type:'POST',
      contentType: false,
      processData: false,
      success: data => this.validarLogin(data)
  });
}
validarLogin(data){
  var resultado = JSON.parse(data);
  this.setState({info: resultado});
  if (this.state.info[5] === this.state.usuario && this.state.info[7] === this.state.clave) {
    sessionStorage.setItem("id",resultado['idusuario']);
    sessionStorage.setItem("nombres",resultado['nombres']);
    sessionStorage.setItem("apellidos",resultado['apellidos']);
    sessionStorage.setItem("identidad",resultado['identidad']);
    sessionStorage.setItem("idpuesto",resultado['idpuesto']);
    sessionStorage.setItem("correo",resultado['correo']);
    sessionStorage.setItem("telefono",resultado['telefono']);
    sessionStorage.setItem("foto",resultado['imgperfil']);
    this.props.history.push('/Home');
  }
  else if (!data[0]) {
     this.setState({validado: false});
     this.aviso();
  }
}
aviso(){
  if (this.state.validado) {
    return(null);
  }else{
  return(
    <h3>Usuario o clave incorrecta</h3>
  );}
}
  render() {
    return (
<div className = "bg">
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3>Sign In</h3>
              <div className="d-flex justify-content-end social_icon">
                <span><i className="fa fa-facebook-square"></i></span>
                <span><i className="fa  fa-google-plus-square"></i></span>
              </div>
              {this.aviso()}
            </div>
            <div className="card-body">
              <form name="login" id="login" method="POST" onSubmit={this.inLogin.bind(this)}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user-md"></i></span>
                  </div>
                  <input type="text" className="form-control" placeholder="Nombre de usuario" id="usuario" name="usuario" onChange={e=>this.setState({usuario: e.target.value})}/>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                  </div>
                  <input type="password" className="form-control" placeholder="Contraseña" id="clave" name="clave" onChange={e => this.setState({clave: e.target.value})}/>
                </div>
                <div className="row align-items-center remember">
                  <input type="checkbox"/>Recuerdame
                </div>
                <div className="form-group">
                  <input type="submit" value="Login" className="btn float-right login_btn"/>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className="d-flex justify-content-center links">
                No tienes cuenta??<Link to="/Registro" className="link">Registrate</Link>
              </div>
              <div className="d-flex justify-content-center">
                <Link to="/Recuperar" className="link">Has olvidado tu contraseña?</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
</div>
    );
  }
}
export default withRouter(Login);
