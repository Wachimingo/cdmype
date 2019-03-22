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
    intentos: 0,
  }
}
inLogin(e){
  e.preventDefault();
  var form = $('#login');
  var formData = new FormData(form[0]);
  $.ajax({
      url: "http://backend.acdmype.org/validarLogin.php",
      // url: "https://cdmype.000webhostapp.com/validarLogin.php",
      // url: "http://localhost/cdmypephp/validarlogin.php",
      data: formData,
      type:'POST',
      contentType: false,
      processData: false,
      success: data => this.validarLogin(data)
  });
}
validarLogin(data){
  var resultado = JSON.parse(data);
  if (resultado['correo'] === this.state.correo && resultado['clave'] === this.state.clave && resultado['privilegio'] === '1' && resultado['estado'] === '1') {
    if (resultado['idusuario'] === localStorage.getItem("id")) {
      localStorage.setItem("id",resultado['idusuario']);
      localStorage.setItem("nombres",resultado['nombres']);
      localStorage.setItem("identidad",resultado['identidad']);
      localStorage.setItem("nombreentidad",resultado['nombreentidad']);
      localStorage.setItem("nombretipo",resultado['nombretipo']);
      localStorage.setItem("nombrepuesto",resultado['nombrepuesto']);
      localStorage.setItem("idpuesto",resultado['idpuesto']);
      localStorage.setItem("correo",resultado['correo']);
      localStorage.setItem("telefono",resultado['telefono']);
      localStorage.setItem("foto",resultado['imgperfil']);
      localStorage.setItem("privilegio",resultado['privilegio']);
    }
    else {
      localStorage.setItem("id",resultado['idusuario']);
      localStorage.setItem("nombres",resultado['nombres']);
      localStorage.setItem("identidad",resultado['identidad']);
      localStorage.setItem("nombreentidad",resultado['nombreentidad']);
      localStorage.setItem("nombretipo",resultado['nombretipo']);
      localStorage.setItem("nombrepuesto",resultado['nombrepuesto']);
      localStorage.setItem("idpuesto",resultado['idpuesto']);
      localStorage.setItem("correo",resultado['correo']);
      localStorage.setItem("telefono",resultado['telefono']);
      localStorage.setItem("foto",resultado['imgperfil']);
      localStorage.setItem("privilegio",resultado['privilegio']);
      localStorage.removeItem('idreviewactivo');
    }
    this.props.history.push('/Home');
  }
  else if (resultado['correo'] === this.state.correo && resultado['clave'] === this.state.clave && resultado['privilegio'] === '2' && resultado['estado'] === '1') {
    localStorage.setItem("id",resultado['idusuario']);
    localStorage.setItem("privilegio",resultado['privilegio']);
    this.props.history.push('/Admin');
  }
  else if(resultado['correo'] !== this.state.correo || resultado['clave'] !== this.state.clave || resultado['estado'] !== '1'){
    this.setState({validado: false});
    this.setState({intentos: this.state.intentos + 1});
    console.log(this.state.intentos);
  }
}
isLogged(){
  if (localStorage.getItem('privilegio') === '1') {
    this.props.history.push('/Home');
  }
  else if (localStorage.getItem('privilegio') === '2') {
    this.props.history.push('/Admin');
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
recuperarPassword(){
  if (this.state.intentos >= 3) {
    return(
        <Link to="/Recuperar" className="btn btn-danger recuperar">Recuperar contraseña</Link>
    );
  }
  else {
    return(null);
  }
}
componentDidMount(){
  document.body.style.overflow = 'hidden';
  if (typeof localStorage.getItem('id') === 'undefined') {
      localStorage.setItem('contador', 0);
  }
}
  render() {
    document.body.style.overflow = 'hidden';

    return (
  <div className = "bg">
  {this.isLogged()}
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
                  <div className=" justify-content-center float-left links">
                    <div>
                      <p>No tienes cuenta?</p>
                    </div>
                    <Link to="/Registro" className="btn btn-info float-left irregistrar">Registrate</Link>
                      <input type="submit" value="Login" className="btn float-right btn-success login"/>
                  </div>
                  <div className="form-group">

                  </div>
                </form>
              </div>
              <div className="card-footer">
                {this.recuperarPassword()}
              </div>
            </div>
          </div>
        </div>
  </div>
      );
    }
}
export default withRouter(Login);
