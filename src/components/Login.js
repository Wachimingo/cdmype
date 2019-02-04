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
    correo: '',
    clave: '',
    validado: true,
  }
}
inLogin(e){
  // const urlhost ="https://cdmype.000webhostapp.com/validarLogin.php";
  const urllocal = "http://localhost/cdmypephp/validarlogin.php";
  e.preventDefault();
  var form = $('#login');
  var formData = new FormData(form[0]);
  $.ajax({
      url: urllocal,
      data: formData,
      type:'POST',
      contentType: false,
      processData: false,
      success: data => this.validarLogin(data)
  });
}
validarLogin(data){
  var resultado = JSON.parse(data);
  if (resultado['correo'] === this.state.correo && resultado['clave'] === this.state.clave) {
    sessionStorage.setItem("id",resultado['idusuario']);
    sessionStorage.setItem("nombres",resultado['nombres']);
    sessionStorage.setItem("identidad",resultado['identidad']);
    sessionStorage.setItem("nombreentidad",resultado['nombreentidad']);
    sessionStorage.setItem("nombretipo",resultado['nombretipo']);
    sessionStorage.setItem("nombrepuesto",resultado['nombrepuesto']);
    sessionStorage.setItem("idpuesto",resultado['idpuesto']);
    sessionStorage.setItem("correo",resultado['correo']);
    sessionStorage.setItem("telefono",resultado['telefono']);
    sessionStorage.setItem("foto",resultado['imgperfil']);
    this.props.history.push('/Home');
  }
  else  {
    this.setState({validado: false});
  }
}
aviso(){
  if (this.state.validado) {
    return(null);
  }else{
  return(
    <h3 className="aviso">Usuario o clave incorrecta</h3>
  );}
}
  render() {
    return (
<div className = "bg">
      <div className="container">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header">
              <h3 className="links">Sign In</h3>
              {this.aviso()}
            </div>
            <div className="card-body">
              <form name="login" id="login" method="POST" onSubmit={this.inLogin.bind(this)}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user-md"></i></span>
                  </div>
                  <input type="email" className="form-control" placeholder="Correo" id="correo" name="correo" onChange={e=>this.setState({correo: e.target.value})}/>
                </div>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-lock"></i></span>
                  </div>
                  <input type="password" className="form-control" placeholder="Contraseña" id="clave" name="clave" onChange={e => this.setState({clave: e.target.value})}/>
                </div>
                <div className="form-group">
                  <input type="submit" value="Login" className="btn float-right btn-info"/>
                </div>
              </form>
            </div>
            <div className="card-footer">
              <div className=" justify-content-center float-right links registrar">
                <div>
                  <p>No tienes cuenta?</p>
                </div>
                <Link to="/Registro" className="btn btn-info float-right">Registrate</Link>
              </div>
              <div className="d-flex justify-content-center float-left">
                <Link to="/Recuperar" className="btn btn-info recuperar">Recuperar contraseña?</Link>
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
