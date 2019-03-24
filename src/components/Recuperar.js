import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.js";
import "../css/login.css";
import { Link, withRouter} from 'react-router-dom';
import $ from 'jquery';
class Recuperar extends Component {
Recuperar(e){
  const urlhost ="https://cdmype.000webhostapp.com/recuperar.php";
  // const urllocal = "http://localhost/cdmypephp/recuperar.php";
  e.preventDefault();
  var form = $('#login');
  var formData = new FormData(form[0]);
  $.ajax({
      url: urlhost,
      data: formData,
      type:'POST',
      contentType: false,
      processData: false,
      success: data => this.aviso(data)
  });
}
aviso(){
  return(
    <h3>Revise su correo</h3>
  );
}
  render() {
    return (
<div className = "bg contaier-fluid">
      <div className="container contaier-fluid">
        <div className="d-flex justify-content-center h-100">
          <div className="card">
            <div className="card-header links">
              <h3>Ingrese el correo asociado a la cuenta</h3>
              {this.aviso()}
            </div>

            <div className="card-body">
              <form name="login" id="login" method="POST" onSubmit={this.Recuperar.bind(this)}>
                <div className="input-group form-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-user-md"></i></span>
                  </div>
                  <input type="email" className="form-control" placeholder="Correo" id="correo" name="correo"/>
                </div>
                <div className="form-group">
                  <Link to="/" className="btn float-left btn-info">Volver</Link>
                  <input type="submit" value="Enviar" className="btn float-right btn-info"/>
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
export default withRouter(Recuperar);
